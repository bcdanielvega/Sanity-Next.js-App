import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={`quicksand ${styles.header}`}>
      <div className={styles.logo}>
        <Link href="/">
          Milestones
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
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
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;