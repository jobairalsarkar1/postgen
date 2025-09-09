import { DATABASE_ID, databases, TABLE_CAMPAIGNS, TABLE_MESSAGES } from "@/lib/appwriteConfig";
import { NextResponse } from "next/server";
import { Query } from "node-appwrite";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const campaign = await databases.getDocument(
      DATABASE_ID,
      TABLE_CAMPAIGNS,
      id
    );

    const messagesRes = await databases.listDocuments(
      DATABASE_ID,
      TABLE_MESSAGES,
      [
        Query.equal("campaignId", id),
        Query.orderDesc("$createdAt"),
      ]
    );

    return NextResponse.json({
      campaign,
      messages: messagesRes.documents.reverse(),
      aiMessage: messagesRes.documents.find(
        (m) => m.role === "ai" && m.status === "pending"
      ),
    });
  } catch (err) {
    console.error("Error fetching campaign:", err);
    return NextResponse.json(
      { error: "Failed to fetch campaign" },
      { status: 500 }
    );
  }
}
