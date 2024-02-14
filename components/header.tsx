import Link from "next/link";
import Image from "next/image"

export default function Header() {
    return (
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg ">
      <div className="fixed left-0 top-0 flex w-full justify-evenly border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl">
      <Link href="/about-us" className="header-link">About Us</Link>
      <Link href="/product" className="header-link">Product</Link>
      <Link href="/faq" className="header-link">FAQ</Link>
    </div>
    </div>
    )
  }
