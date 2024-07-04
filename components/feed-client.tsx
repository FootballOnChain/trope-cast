
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Embed } from "@/components/embed";
// import { Heart } from "lucide-react";
import { Feed } from "@/types"; // Adjust the import path based on where you define the types
import { Auth } from "./auth";
import { Button } from "./ui/button";
import { NavBar } from "./nav-bar";

interface FeedClientProps {
  feed: Feed;
}

export function FeedClient({ feed }: FeedClientProps) {

  return (
    <>
    <NavBar />
      <div className="my-4 flex justify-between border border-transparent border-b-primary p-4 sticky top-[65px] z-10 bg-[#ffffffe1] dark:bg-[#161E29]">
        <Auth />
        <Button className="group bg-green-700 font-semibold text-white group-hover:text-secondary">
          PTS: <span className="text-black ms-1 group-hover:text-white">500,00</span>
        </Button>
      </div>
      <div className="p-3">
        <div className="flex justify-between mb-3">
          <h1 className="font-bold text-xl">Feed</h1>
          <div className="flex">
            <Button className="rounded-3xl px-3 py-1 bg-green-700 absolute text-white hover:text-secondary font-semibold">
              Popular
            </Button>
            <Button className="rounded-3xl ps-8 py-1 border ms-12 bg-black text-white hover:text-secondary font-semibold">
              Latest
            </Button>
          </div>
        </div>
        {feed.casts.map((cast) => (
          <div
            className="bg-background my-2 p-4 border rounded-2xl shadow-sm"
            key={cast.hash}
          >
            <div className="flex gap-4 flex-row items-start">
              <div className="flex flex-col items-start w-full gap-3">
                <div className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage
                      src={cast.author.pfp_url || "../public/logo.svg"}
                    />
                    <AvatarFallback>TP</AvatarFallback>
                  </Avatar>
                  <div className="flex gap-2">
                    <p className="font-bold">{cast.author.display_name}</p>
                    <p className="text-gray-600">@{cast.author.username}</p>
                  </div>
                </div>
                <p className="pb-2">{cast.text.replace(/https?:\/\/\S+/i, "")}</p>
                {cast.embeds && cast.embeds.length > 0 ? (
                <Embed embedObject={cast.embeds[0]} />
              ) : null}
              </div>
            </div>
            {/* <div className="engage">
              <button onClick={handleLike}>
                <Heart className={`${like ? "text-red-600" : ""}`} />
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
}
