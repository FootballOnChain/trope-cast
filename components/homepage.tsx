import React from "react";
import { RightNav } from "./right-nav";
import { LeftNav } from "./left-nav";
import FeedServer from "./feed-server";

export const HomePage = () => {
  return (
    <main className="w-full">
    <div className="fixed top-0 left-0 w-1/4 bg-background h-screen border border-r-primary p-4 flex flex-col items-end">
      <RightNav />
    </div>
    <div className="">
      <FeedServer />
    </div>
    <div className="fixed top-0 right-0 w-1/4 bg-background h-screen border border-l-primary p-4 flex flex-col items-start">
      <LeftNav />
    </div>
  </main>
  
  );
};
