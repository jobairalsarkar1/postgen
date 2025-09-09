import { NextResponse } from "next/server";
import { Client, Databases, ID } from "node-appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const databases = new Databases(client);

export async function POST(req: Request) {
  try {
    const { campaignId, role, content, status } = await req.json();

    if (!campaignId || !role || !content || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const message = await databases.createDocument(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_TABLE_MESSAGES!,
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
