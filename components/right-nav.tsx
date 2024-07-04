"use client";

import React from "react";
import {
  AirplayIcon,
  AwardIcon,
  Clock10Icon,
  HomeIcon,
  TrendingUpIcon,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { FeedChannel } from "@/types";

interface ChannelProps {
  feed: FeedChannel;
}

export const RightNav = ({ feed }: ChannelProps) => {
  const { channel } = feed;

  
  const formatCount = (count: any) => {
    if (count >=1000) {
      return (count / 1000).toFixed(1) + 'K';
    }

    return count.toString();
  }

  return (
    <div className="w-60 flex flex-col gap-5">
      <div className="flex justify-between">
        <h1 className="my-auto text-2xl font-bold">Trope Cast</h1>
        <ModeToggle />
      </div>
      <div className="profile text-center grid gap-2">
        {/* <div className="profile-pic border rounded-full bg-green-700 h-28 w-28 my-2 mx-auto">
        </div> */}
        <img src={channel.image_url || "../public/logo.svg"} alt="Channel Image" className="rounded-full h-28 w-28 my-2 mx-auto" />
    
        <p className="username text-xl font-semibold">{channel.name}</p>
        <p className="bio text-secondary-foreground">
          {channel.lead.profile.bio.text}
        </p>
        <hr />
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className="font-semibold"> {formatCount(channel.follower_count)}</p>
            <small className="text-secondary-foreground text-xs">
              Followers
            </small>
          </div>
          <div>
            <p className="font-semibold">{formatCount(channel.lead.follower_count)}</p>
            <small className="text-secondary-foreground text-xs">
              Followers
            </small>
          </div>
          <div>
            <p className="font-semibold">{formatCount(channel.lead.following_count)}</p>
            <small className="text-secondary-foreground text-xs">
              Following
            </small>
          </div>
        </div>
      </div>
      <div className="nav">
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer rounded-lg hover:bg-accent p-3 ">
            <HomeIcon className="group-hover:text-green-700 h-5" />
            <p className="group-hover:text-green-700 group-hover:font-semibold">
              Home
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer rounded-lg hover:bg-accent p-3 ">
            <TrendingUpIcon className="group-hover:text-green-700 h-5" />
            <p className="group-hover:text-green-700 group-hover:font-semibold">
              Trending
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer rounded-lg hover:bg-accent p-3 ">
            <Wallet className="group-hover:text-green-700 h-5" />
            <p className="group-hover:text-green-700 group-hover:font-semibold">
              Wallet
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer rounded-lg hover:bg-accent p-3 ">
            <AirplayIcon className="group-hover:text-green-700 h-5" />
            <p className="group-hover:text-green-700 group-hover:font-semibold">
              Live Stream
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer rounded-lg hover:bg-accent p-3 ">
            <AwardIcon className="group-hover:text-green-700 h-5" />
            <p className="group-hover:text-green-700 group-hover:font-semibold">
              Fantasy Game
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer rounded-lg hover:bg-accent p-3 ">
            <Users className="group-hover:text-green-700 h-5" />
            <p className="group-hover:text-green-700 group-hover:font-semibold">
              Community
            </p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer rounded-lg hover:bg-accent p-3 ">
            <Clock10Icon className="group-hover:text-green-700 h-5" />
            <p className="group-hover:text-green-700 group-hover:font-semibold">
              Live Score
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
