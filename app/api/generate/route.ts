import { DATABASE_ID, databases, TABLE_MESSAGES } from "@/lib/appwriteConfig";
import { NextResponse } from "next/server";
import axios from "axios";

const COHERE_API_KEY = process.env.COHERE_API_KEY!;
const SUPPORTED_PLATFORMS = ["Twitter", "Facebook", "LinkedIn", "Reddit"];

export async function POST(req: Request) {
  try {
    const { campaignId, aiMessageId, prompt, platform } = await req.json();

    // required fields validation
    if (!campaignId || !aiMessageId || !prompt || !platform) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // platform validation
    if (!SUPPORTED_PLATFORMS.includes(platform)) {
      return NextResponse.json(
        { error: `Unsupported platform. Supported: ${SUPPORTED_PLATFORMS.join(", ")}` },
        { status: 400 }
      );
    }

    // prompt length validation
    const trimmedPrompt = prompt.trim();
    if (trimmedPrompt.length < 10) {
      return NextResponse.json(
        { error: "Prompt must be at least 10 characters long" },
        { status: 400 }
      );
    }
    if (trimmedPrompt.length > 300) {
      return NextResponse.json(
        { error: "Prompt too long (max 1000 characters)" },
        { status: 400 }
      );
    }

    // formated prompt for Cohere
    const formattedPrompt = `
        You are a creative social media content writer.
        Write a ${platform} post based on the following idea:
        "${trimmedPrompt}"

        - Keep it engaging, short, and professional.
        - Use proper hashtags for ${platform}.
        `;

    // Cohere API call
    const cohereRes = await axios.post(
      "https://api.cohere.com/v1/generate",
      {
        model: "command",
        prompt: formattedPrompt,
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const cohereData = cohereRes.data;
    const generatedContent =
      cohereData?.generations?.[0]?.text?.trim() || "Failed to generate post.";

    // AI message update in Appwrite
    const updatedMessage = await databases.updateDocument(
      DATABASE_ID,
      TABLE_MESSAGES,
      aiMessageId,
      {
        content: generatedContent,
        status: "complete",
      }
    );

    return NextResponse.json(updatedMessage);
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      console.error("Cohere API error:", err.response?.data || err.message);
    } else if (err instanceof Error) {
      console.error("Error generating AI post:", err.message);
    } else {
      console.error("Unknown error:", err);
    }

    return NextResponse.json(
      { error: "Failed to generate AI post" },
      { status: 500 }
    );
  }
}
