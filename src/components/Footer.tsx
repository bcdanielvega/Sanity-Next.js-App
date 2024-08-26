import React from "react";
import Link from "next/link";
import Image from "next/image";

type FooterProps = {
  companyName?: string;
  year?: number;
};

const Footer: React.FC<FooterProps> = ({
  companyName = "Your Company",
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-darkgreen text-mintcream py-6 font-agrandir">
      <div className="container mx-auto flex flex-row justify-between mt-5">
        <div className="ml-10">
          <ul className="flex flex-col">
            <li className="mb-2">
              <Link
                href="/artists"
                className="text-xl underline underline-offset-4 decoration-darkgreen transition-all duration-1000 hover:decoration-mintcream"
              >
                Artists
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/albumReviews"
                className="text-xl underline underline-offset-4 decoration-darkgreen transition-all duration-1000 hover:decoration-mintcream"
              >
                Albums
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/about"
                className="text-xl underline underline-offset-4 decoration-darkgreen transition-all duration-1000 hover:decoration-mintcream"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/">
            <Image src="/M.png" width={100} height={100} alt="secondary logo" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <p className="mb-1">
          &copy; {year} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
