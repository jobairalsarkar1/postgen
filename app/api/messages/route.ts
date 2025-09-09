import { DATABASE_ID, databases, ID, TABLE_MESSAGES } from "@/lib/appwriteConfig";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { campaignId, role, content, status } = await req.json();

    if (!campaignId || !role || !content || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const message = await databases.createDocument(
      DATABASE_ID,
      TABLE_MESSAGES,
      ID.unique(),
      {
        campaignId,
        role,
        content,
        status,
      }
    );

    return NextResponse.json(message);
  } catch (err) {
    console.error("Error creating message:", err);
    return NextResponse.json({ error: "Failed to create message" }, { status: 500 });
  }
}
