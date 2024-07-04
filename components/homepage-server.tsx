// HomePageServer.tsx
import React from "react";
import { LeftNav } from "./left-nav";
import FeedServer from "./feed-server";
import cronChannel from "./channel-server";
import { FeedChannel } from "@/types"; // Ensure this import path is correct
import { HomePage } from "./homepage";

export default async function HomePageServer() {
  const feed = await cronChannel("football");

  if (!feed) {
    return <div>Failed to load feed</div>;
  }

  return <HomePage feed={feed} />;
}
