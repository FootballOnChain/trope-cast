import React from "react";
import { RightNav } from "./right-nav";
import { LeftNav } from "./left-nav";
import FeedServer from "./feed-server";

export const HomePage = () => {
  return (
    <main className="w-full grid grid-cols-4">
    <div className="sticky top-0 left-0 bg-background h-screen border border-r-primary p-4 grid col-span-1 justify-end">
      <RightNav />
    </div>
    <div className="grid col-span-2 border">
      <FeedServer />
    </div>
    <div className="sticky top-0 right-0 bg-background h-screen border border-l-primary p-4 grid col-span-1 justify-start">
      <LeftNav />
    </div>
  </main>
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
  
  );
};
