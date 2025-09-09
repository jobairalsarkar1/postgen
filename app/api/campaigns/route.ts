import { NextResponse } from "next/server";
import { Client, Databases, ID } from "node-appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const databases = new Databases(client);

export async function POST(req: Request) {
  try {
    const { prompt, platform, userId } = await req.json();

    if (!prompt || !platform || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Create campaign (⚡ include prompt here)
    const campaign = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_TABLE_CAMPAIGNS!,
      ID.unique(),
      {
        userId,
        platform,
        prompt,         // <-- FIXED (was missing before)
        status: "active",
      }
    );

    // 2. Add initial user message
    await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_TABLE_MESSAGES!,
      ID.unique(),
      {
        campaignId: campaign.$id,
        role: "user",
        content: prompt,
        status: "complete",
      }
    );

    // 3. Add placeholder AI message
    const aiMessage = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_TABLE_MESSAGES!,
      ID.unique(),
      {
        campaignId: campaign.$id,
        role: "ai",
        content: "Generating...",
        status: "pending",
      }
    );

    return NextResponse.json({
      campaignId: campaign.$id,
      aiMessageId: aiMessage.$id,
    });
  } catch (error) {
    console.error("Error creating campaign:", error);
    return NextResponse.json(
      { error: "Failed to create campaign" },
      { status: 500 }
    );
  }
}
