
import React, { useEffect, useState } from "react";
import { LeftNav } from "./left-nav";
import FeedServer from "./feed-server";
import cronChannel from "./channel-server";
import { FeedChannel } from "@/types"; // Ensure this import path is correct
import { RightNav } from "./right-nav";

interface HomepageProps {
  feed: FeedChannel;
}

export const HomePage = ({feed}: HomepageProps) => {

  console.log("Feed is not null, displaying content");
  return (
    <main className="w-full grid grid-cols-4">
      <div className="sticky top-0 left-0 bg-background h-screen border border-r-primary p-4 grid col-span-1 justify-end">
        <RightNav feed={feed} />
      </div>
      <div className="grid col-span-2 border">
        <FeedServer />
      </div>
      <div className="sticky top-0 right-0 bg-background h-screen border border-l-primary p-4 grid col-span-1 justify-start">
        <LeftNav feed={feed} />
      </div>
    </main>
  );
};

  //   <main className="w-full mt-20">
  //   <div className="fixed top-0 left-0 w-1/4 bg-background h-screen border border-r-primary p-4 flex flex-col items-end">
  //     <RightNav />
  //   </div>
  //   <div className="">
  //     <FeedServer />
  //   </div>
  //   <div className="fixed top-0 right-0 w-1/4 bg-background h-screen border border-l-primary p-4 flex flex-col items-start">
  //     <LeftNav />
  //   </div>
  // </main>