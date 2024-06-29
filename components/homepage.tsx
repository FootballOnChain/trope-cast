import React from "react";
import { Feed } from "./feed";
import { RightNav } from "./right-nav";
import { LeftNav } from "./left-nav";

export const HomePage = () => {
  return (
    <main className="grid grid-cols-5 w-full">
      <div className="grid col-span-1">
        <RightNav />
      </div>
      <div className="grid col-span-3">
        <Feed />
      </div>
      <div className="grid col-span-1">
        <LeftNav />
      </div>
    </main>
  );
};
