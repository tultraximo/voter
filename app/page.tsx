import Image from "next/image";
import Header from "../components/header";
import Gallery from "@/components/gallery";
import Stack from "@/components/stack";
import Card from "@/components/card";
import Statement from "@/components/statement";

function VoteImage(){
  return (
    <div className="relative flex place-items-center">
    <Image
      className="relative"
      src="/vote.png"
      alt="Next.js Logo"
      width={360}
      height={37}
      priority
    />
  </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Card />
      <Statement />
      <VoteImage />
      <Gallery />
      <Stack />

    </main>
  );
}
