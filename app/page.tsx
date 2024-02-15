import Image from "next/image";
import Header from "../components/header";
import Gallery from "@/components/gallery";
import Stack from "@/components/stack";
import Card from "@/components/card";
import Statement from "@/components/statement";
import AboutUs from "@/components/about_us";


function VoteImage(){
  return (
    <div className="pt-5 relative flex place-items-center">
    <Image
      className="relative"
      src="/vote_transparent.png"
      alt="Next.js Logo"
      width={360}
      height={37}
      priority
    />
  </div>
  )
}

export default function Home() {

  const description = "23 MILLION"
  const title = "THE NUMBER OF COLLEGE-AGE POTENTIAL US VOTERS"

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-12 bg-repeat-spaced bg-gray-200" style={{backgroundImage: 'url("/")'}}>
          {/* <div className="mb-5 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent font-hammer text-5xl font-bold  [text-wrap:balance] sm:text-7xl">
          {description}
        </div> */}
      <Header />

      <VoteImage />
      <Statement />

      <Card />
      <Gallery />
      {/* <Stack /> */}
      <AboutUs />

    </main>
  );
}
