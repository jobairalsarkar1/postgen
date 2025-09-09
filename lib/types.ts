interface Message {
  $id: string;
  role: "user" | "ai";
  content: string;
  status: "pending" | "complete";
  $createdAt: string;
  campaignId: string;
}

interface CampaignData {
  $id: string;
  prompt: string;
  platform: string;
}

export interface CampaignResponse {
  campaign: CampaignData;
  messages: Message[];
  aiMessage?: Message;
}