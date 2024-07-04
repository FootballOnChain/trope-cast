import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FeedChannel } from "@/types";

interface channelMembers {
  feed: FeedChannel;
}

export const LeftNav = ({ feed }: channelMembers) => {
  const { channel } = feed;

  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">Hosts</h1>
        {channel.hosts.map((host, index) => (
          <div
            className="bg-background my-2 p-4 border rounded-2xl shadow-sm"
            key={index}
          >
            <div className="flex flex-col items-start w-full gap-3">
              <div className="flex gap-3 items-center">
                <Avatar>
                  <AvatarImage src={host.pfp_url || "../public/logo.svg"} />
                  <AvatarFallback>TP</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">{host.display_name}</p>
                  <p className="text-gray-600">@{host.username}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-xl font-semibold">Members</h1>
      </div>
    </>
  );
};
