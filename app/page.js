import Image from "next/image";
import heroBg from "@/app/assets/hero.png";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <main className="w-full">
      <div className="text-3xl font-bold">
        <Image src={heroBg} alt="hero" />
      </div>
      <div>
        <Partners />
      </div>
    </main>
  );
}
