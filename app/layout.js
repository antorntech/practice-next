import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import logo from "@/app/assets/logo.png";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sailecMedium = localFont({
  src: "./fonts/Sailec Medium.ttf",
  variable: "--font-sailec-medium",
});

const sailecThin = localFont({
  src: "./fonts/Sailec Thin.ttf",
  variable: "--font-sailec-thin",
});

export const metadata = {
  title: "Home",
  description: "This is home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sailecMedium.className}>
        <nav className="max-w-screen-lg mx-auto flex items-center justify-between py-2">
          <ul className="flex items-center gap-5 text-black">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/about">Discover Malta</Link>
            </li>
            <li>
              <Link href="/blogs">Fleet</Link>
            </li>
          </ul>
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <ul className="flex items-center gap-5 text-black">
            <li>
              <Link href="/">Long-Term Lease</Link>
            </li>
            <li>
              <Link href="/about">Contact Us</Link>
            </li>
            <li>
              <button className="px-5 py-2 bg-gradient-to-r from-[#9D0208] to-[#D00000] text-white rounded-md shadow-md font-bold">
                Book Now
              </button>
            </li>
          </ul>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
