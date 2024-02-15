import Image from "next/image"
import { Noto_Serif } from "next/font/google";


export default function AboutUs(){


  return (
<div className="relative max-w-2xl font-noto overflow-hidden rounded border-gray-100 border-solid shadow-lg m-4 ">
  <div className="p-6 mx-auto text-2xl sm:text-2xl">
    We want everyone to know the importance of their voice in the upcoming 2024 election.
    <br /> {/* Extra space between paragraphs */}
    <br /> {/* Extra space between paragraphs */}
    To do our part, we’re offering a selection of high quality goods customizable to your university.
    <br /> {/* Extra space between paragraphs */}
    <br /> {/* Extra space between paragraphs */}
    With our past recent elections coming down to such a small margin of actual votes we are eager to partner with you in spreading awareness about the importance of the vote.
    <br /> {/* Extra space between paragraphs */}
    <br /> {/* Extra space between paragraphs */}
    Hope to hear from you soon!
    <br /> {/* Extra space between paragraphs */}
    <br /> {/* Extra space between paragraphs */}
    <span className="text-lg sm:text-xl font-bold">VOTE</span>
  </div>
</div>


  )
}
