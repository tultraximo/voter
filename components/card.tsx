import { ReactNode } from "react";
import Image from "next/image";



export default function Card() {
  return (
    <div
      className="relative w-128 overflow-hidden rounded border-gray-100 border-solid
       bg-gray-200 shadow-lg
        m-4"
    >
      <div className="pt-6 pb-6 mx-auto max-w-lg text-center">
        <h2 className=" mb-5 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 bg-clip-text text-transparent font-hammer text-5xl font-bold  [text-wrap:balance] sm:text-7xl">
          YOUR VOTE MATTERS!
        </h2>
        <div className="rounded shadow-lg text-2xl pb-5 mx-12 px-2 font-display
          font-bold text-gray-800 bg-gray-200 [text-wrap:balance]">
            The US presidential election of 2020 came down to a few tens of thousands of votes in key swing states</div>
      </div>
    </div>
  );
}
