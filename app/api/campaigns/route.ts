import { DATABASE_ID, databases, ID, TABLE_CAMPAIGNS, TABLE_MESSAGES } from "@/lib/appwriteConfig";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, platform, userId } = await req.json();

    if (!prompt || !platform || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // this will create a campaign like a session for a prompt so inside this follow up prompt can be made.
    const campaign = await databases.createDocument(
      DATABASE_ID,
      TABLE_CAMPAIGNS,
      ID.unique(),
      {
        userId,
        platform,
        prompt,
        status: "active",
      }
    );

    await databases.createDocument(
      DATABASE_ID,
      TABLE_MESSAGES,
      ID.unique(),
      {
        campaignId: campaign.$id,
        role: "user",
        content: prompt,
        status: "complete",
      }
    );

    const aiMessage = await databases.createDocument(
      DATABASE_ID,
      TABLE_MESSAGES,
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
