import { ReactNode } from "react";
import Image from "next/image";


export default function Card() {
  const title = "23 MILLION"
  const description = "NUMBER OF US COLLEGE-AGE VOTERS"
  return (
    <div
      className="relative w-128 overflow-hidden rounded border-gray-100 border-solid
       bg-gray-200 shadow-lg
        m-4"
    >
      <div className="pt-4 pb-6 mx-auto max-w-3xl text-center">
        <div className="m-4 mb-5 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 bg-clip-text text-transparent text-6xl sm:text-8xl font-bold  [text-wrap:balance]">
          {title}
        </div>
        <div className="rounded shadow-lg text-3xl sm:text-4xl pb-5 mx-12 px-2 font-display
          font-medium text-gray-800 bg-gray-200 [text-wrap:balance]">
            {description}</div>
      </div>
    </div>
  );
}
