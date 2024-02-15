import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const noto_serif = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif',
})

export const metadata: Metadata = {
  title: "Empower Your Students: University Vote T-Shirts & Hats (Wholesale)",
  description: "Boost student voter turnout with high-quality, customizable Vote T-shirts & hats for your university. Shop wholesale & promote civic engagement!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${noto_serif.variable}`}>{children}</body>
    </html>
  );
}
