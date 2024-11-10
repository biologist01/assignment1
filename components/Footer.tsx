// components/Footer.tsx
import Link from 'next/link';
import styles from '../CSS/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">My FancyWebsite</Link>
        </h1>
        <nav className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>
        <div className={styles.socials}>
          <a href="https://vercel.com/fatimas-projects-f0392711" className={styles.socialIcon}>Vercel</a>
          <a href="https://www.linkedin.com/in/fatima-aamir-shaikh-3aa3bb313/" className={styles.socialIcon}>LinkedIn</a>
          <a href="https://github.com/biologist01" className={styles.socialIcon}>GitHub</a>
        </div>
        <p className={styles.copyright}>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
