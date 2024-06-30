// components/FeedClient.tsx

"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Embed } from "@/components/embed";
import { Heart } from "lucide-react";
import { Feed } from "@/types"; // Adjust the import path based on where you define the types
import { Auth } from "./auth";
import { Button } from "./ui/button";

interface FeedClientProps {
  feed: Feed;
}

export function FeedClient({ feed }: FeedClientProps) {
  const [like, setLike] = useState(false);

  // const handleLike = () => {
  //   setLike(!like);
  // };

  return (
    <>
      <div className="my-2 m-auto w-fit">
        <Auth />
      </div>
      <div className="flex justify-between">
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
        <div className="bg-background my-3 p-4 border rounded-2xl" key={cast.hash}>
          <div className="flex gap-4 sm:w-[500px] w-[350px] flex-row items-start">
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
            </div>
          </div>
          {/* <div className="engage">
            <button onClick={handleLike}>
              <Heart className={`${like ? "text-red-600" : ""}`} />
            </button>
          </div> */}
        </div>
      ))}
    </>
  );
}
