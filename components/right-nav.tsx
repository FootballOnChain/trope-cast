import React from 'react';
import { AirplayIcon, AwardIcon, Clock10Icon, HomeIcon, TrendingUpIcon, Users, Wallet} from 'lucide-react';
import Link from "next/link";

export const RightNav = () => {
  return (
    <div className=' bg-background h-screen border border-r-primary  p-4 flex flex-col gap-5'>
      <h1 className=' text-xl font-bold'>Trope</h1>
      <div className="profile text-center grid gap-2">
        <div className='profile-pic border rounded-full bg-green-700 h-28 w-28 my-2 mx-auto'></div>
        <p className='username font-semibold'>Muhammad Amoo</p>
        <p className='bio text-secondary-foreground'>MERN Stack Nextjs | React Native Developer</p>
        <hr />
        <div className="grid grid-cols-3 gap-2">
          <div>
            <p className='font-semibold'>652</p>
            <small className='text-secondary-foreground text-xs'>Posts</small>
          </div>
          <div>
            <p className='font-semibold'>20.5K</p>
            <small className='text-secondary-foreground text-xs'>Followers</small>
          </div>
          <div>
            <p className='font-semibold'>100</p>
            <small className='text-secondary-foreground text-xs'>Following</small>
          </div>
        </div>
      </div>
      <div className="nav grid gap-3">
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer ">
            <HomeIcon className='group-hover:text-green-700 h-5' />
            <p className='group-hover:text-green-700 group-hover:font-semibold'>Home</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer ">
            <TrendingUpIcon className='group-hover:text-green-700 h-5' />
            <p className='group-hover:text-green-700 group-hover:font-semibold'>Trending</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer ">
            <Wallet className='group-hover:text-green-700 h-5' />
            <p className='group-hover:text-green-700 group-hover:font-semibold'>Wallet</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer ">
            <AirplayIcon className='group-hover:text-green-700 h-5' />
            <p className='group-hover:text-green-700 group-hover:font-semibold'>Live Stream</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer ">
            <AwardIcon className='group-hover:text-green-700 h-5' />
            <p className='group-hover:text-green-700 group-hover:font-semibold'>Fantasy Game</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer ">
            <Users className='group-hover:text-green-700 h-5' />
            <p className='group-hover:text-green-700 group-hover:font-semibold'>Community</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="group flex gap-2 cursor-pointer ">
            <Clock10Icon className='group-hover:text-green-700 h-5' />
            <p className='group-hover:text-green-700 group-hover:font-semibold'>Live Score</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
