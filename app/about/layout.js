import Link from "next/link";
import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <main>
      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
      </nav>
      <div className="mt-5">{children}</div>
    </main>
  );
};

export default AboutLayout;
