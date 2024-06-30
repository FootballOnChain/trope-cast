
import "./globals.css";
import { HomePage } from "@/components/homepage";
import { Separator } from "@/components/ui/separator";
import "@farcaster/auth-kit/styles.css";
import { Auth } from "@/components/auth";
import Image from "next/image";
import siteMeta from "@/config/site.config";

// import Og from "../public/og.png";


export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-12 bg-secondary">
      {/* <Image src={siteMeta.logo} alt="logo" className="" width={350} height={350} /> */}
      {/* <Auth /> */}
      <h1 className="text-center flex m-auto lg:hidden">Sorry :(, this page is currently not available on mobile devices, please switch to a desktop mode</h1>
      <div className="hidden lg:block">
      <HomePage />

      </div>
        {/* <Image src={Og} width={150} height={100} className="w-[500px] h-60" alt="logo" /> */}
    </main>
  );
}


{/* <Image src="https://dweb.mypinata.cloud/ipfs/QmRnrZHMHacn4ctBx67JkHpwL2i5Xc9335mJoVVdimnfjj" width={150} height={100} alt="logo" /> */}