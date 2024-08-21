import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type FooterProps = {
  companyName?: string;
  year?: number;
};

const Footer: React.FC<FooterProps> = ({
  companyName = 'Your Company',
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="bg-darkgreen text-mintcream py-6 arimo">
      <div className="container mx-auto flex flex-row justify-between">
        <div>
            <ul className="flex flex-col">
            <li>
                <Link href="/artists">
                    Artists                
                </Link>
            </li>
            <li>
                <Link href="/albumReviews">
                Contact
                </Link>
            </li>
            </ul>
        </div>
        <div>
            <Link href="/">
                <Image 
                src="/M.png"
                width={100}
                height={100}
                alt="secondary logo"
                />
            </Link>
        </div>
      </div>
      <div className='flex justify-center mt-5'>
      <p className="mb-1">
            &copy; {year} {companyName}. All rights reserved.
            </p>
      </div>
    </footer>
  );
};

export default Footer;
