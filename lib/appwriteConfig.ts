import { Client, Databases, ID } from "node-appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const databases = new Databases(client);

// envs
const DATABASE_ID = process.env.APPWRITE_DATABASE_ID!;
const TABLE_CAMPAIGNS = process.env.APPWRITE_TABLE_CAMPAIGNS!;
const TABLE_MESSAGES = process.env.APPWRITE_TABLE_MESSAGES!;

export { client, databases, ID, DATABASE_ID, TABLE_CAMPAIGNS, TABLE_MESSAGES };
