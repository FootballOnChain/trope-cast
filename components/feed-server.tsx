// components/FeedServer.tsx

import { FeedClient } from "@/components/feed-client";
import siteMeta from "@/config/site.config";
import { Feed } from "@/types"; // Adjust the import path based on where you define the types

async function cronFeed(channel: string, pageSize: number): Promise<Feed | null> {
  try {
    const url = `https://api.pinata.cloud/v3/farcaster/casts?channel=${channel}&pageSize=${pageSize}`;
    const token = process.env.PINATA_JWT;

    console.log(url);
    
    if (!token) {
      throw new Error("PINATA_JWT is not defined");
    }
    console.log("Fetching URL:", url);
    const result = await fetch(url, {
      next: { revalidate: 60 },
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Fetch result status:", result.status);
    if (!result.ok) {
      throw new Error(`Failed to fetch data: ${result.status} ${result.statusText}`);
    }
    const resultData = await result.json();
    return resultData;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function FeedServer() {
  const feed = await cronFeed("football", 10);

  if (!feed) {
    return <div>Failed to load feed</div>;
  }

  return <FeedClient feed={feed} />;
}
