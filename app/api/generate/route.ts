import { DATABASE_ID, databases, TABLE_MESSAGES } from "@/lib/appwriteConfig";
import { NextResponse } from "next/server";

const COHERE_API_KEY = process.env.COHERE_API_KEY!;

export async function POST(req: Request) {
  try {
    const { campaignId, aiMessageId, prompt, platform } = await req.json();

    if (!campaignId || !aiMessageId || !prompt || !platform) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Call Cohere's Generate endpoint
    const cohereRes = await fetch("https://api.cohere.com/v1/generate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${COHERE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "command",  // use default command-capable model
        prompt: `Write a ${platform} social media post: ${prompt}`,
        max_tokens: 200,
        temperature: 0.7
      }),
    });

    const cohereData = await cohereRes.json();

    let generatedContent = "Failed to generate post.";
    if (cohereData?.generations?.[0]?.text) {
      generatedContent = cohereData.generations[0].text.trim();
    }

    // 2. Update AI message in Appwrite
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
  } catch (err) {
    console.error("Error generating AI post:", err);
    return NextResponse.json({ error: "Failed to generate AI post" }, { status: 500 });
  }
}
