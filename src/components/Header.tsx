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
        <ul className={`${styles.navList} uppercase`}>
          <li>
            <Link href="/">
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