import { NextResponse } from "next/server";
import { Client, Databases, Query } from "node-appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const databases = new Databases(client);

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    // Fetch campaign
    const campaign = await databases.getDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_TABLE_CAMPAIGNS!,
      id
    );

    // Fetch related messages
    const messagesRes = await databases.listDocuments(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_TABLE_MESSAGES!,
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
