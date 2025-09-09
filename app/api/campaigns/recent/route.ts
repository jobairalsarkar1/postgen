import { DATABASE_ID, databases, TABLE_CAMPAIGNS } from "@/lib/appwriteConfig";
import { NextResponse } from "next/server";
import { Query } from "node-appwrite";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ campaigns: [] });
    }

    const campaigns = await databases.listDocuments(DATABASE_ID, TABLE_CAMPAIGNS, [
      Query.equal("userId", userId),
      Query.orderDesc("$createdAt"),
    ]);

    return NextResponse.json({ campaigns: campaigns.documents });
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return NextResponse.json(
      { error: "Failed to fetch campaigns" },
      { status: 500 }
    );
  }
}
