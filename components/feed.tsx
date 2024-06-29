// "use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Embed } from "@/components/embed";
import siteMeta from "@/config/site.config";

import { Heart } from "lucide-react";
import { useState } from "react";

export const dynamic = "force-dynamic";

async function cronFeed(channel: string, pageSize: number) {
  try {
    const result = await fetch(
      `https://api.pinata.cloud/v3/farcaster/casts?channel=${channel}&pageSize=${pageSize}`,
      {
        next: { revalidate: 60 },
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      }
    );
    if (!result.ok) {
      throw new Error("failed to fetch data");
    }
    const resultData = await result.json();
    return resultData;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function Feed() {
  // const [like, setLike] = useState(false);
  // const feed = await cronFeed(siteMeta.channelUrl, 50);

  // const handleLike = () => {
  //   setLike(!like);
  // }

  return (
    <div className=" border p-10">
        {/* {feed.casts.map((cast: any) => (  */}
      <div className="bg-background p-4 rounded-2xl">
        <div
          className="flex gap-4 sm:w-[500px] w-[350px] flex-row items-start"
        >
          <div className="flex flex-col items-start w-full gap-3">
            <div className="flex gap-3 items-center">
              <Avatar>
                <AvatarImage src="../public/logo.svg" />
                <AvatarFallback>TP</AvatarFallback>
              </Avatar>
                <div className="flex gap-2">
                  <p className="font-bold">{"Muhammad Amoo"}</p>
                  <p className="text-gray-600">@{"druxamb"}</p>
                </div>
            </div>
            <p className="pb-2">{"I and my team are working on the Farcaster Track for the Onchain Summer Buildathon"}</p>
          </div>
        </div>
        <div className="engage">
          {/* <button onClick={handleLike}> */}
          <Heart />
          {/* <Heart className={`${like ? "text-red-600" : ""}  `} /> */}
          {/* </button> */}
        </div>
      </div>
        {/* ))} */}
    </div>
  );
}



{
  /* {feed.casts.map((cast: any) => ( 
  <div
    className="flex gap-4 sm:w-[500px] w-[350px] flex-row items-start"
    key={cast.hash}
  >
    <Avatar>
      <AvatarImage src={cast.author.pfp_url} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <div className="flex flex-col items-start w-full">
      <div className="flex gap-2">
        <p className="font-bold">{cast.author.display_name}</p>
        <p className="text-gray-600">@{cast.author.username}</p>
      </div>
      <p className="pb-2">{cast.text.replace(/https?:\/\/\S+/i, '')}</p>
      {cast.embeds &&
        cast.embeds.length > 0 ? (
        <Embed embedObject={cast.embeds[0]} />
      ) : null}
    </div>
  </div>
))} */
}
