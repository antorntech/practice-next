import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
      <body className={sailecThin.className}>
        <nav className="flex justify-between items-center bg-slate-400 p-5">
          <h1 className="font-bold">
            <Link href="/" className="text-lg font-bold">
              My App
            </Link>
          </h1>
          <ul className="flex items-center gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <div className="p-5">{children}</div>
      </body>
    </html>
  );
}
