import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} font-agrandir`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
          src="/MILESTONES4.png"
          width={300}
          height={100}
          alt="Logo"          
          />
        </Link>
      </div>
      <nav>
        <ul className={`${styles.navList} uppercase font-agrandir text-2xl`}>
          <li>
            <Link href="/" className='font-agrandir'>
              Home
            </Link>
          </li>
          <li>
            <Link href="/albumReviews">
              Albums
            </Link>
          </li>
          <li>
            <Link href="/artists">
              Artists
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;