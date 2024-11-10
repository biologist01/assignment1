// pages/index.tsx
import Head from 'next/head';
import styles from '../CSS/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fancy Website</title>
      </Head>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to Our Fancy Website</h1>
          <p className={styles.heroSubtitle}>Experience the blend of aesthetics and functionality.</p>
        </section>

        {/* About Section */}
        <section className={styles.about}>
          <h2>About Us</h2>
          <p>
            We are passionate about creating beautiful and functional websites that elevate your brand and meet your needs.
          </p>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <h2>Our Premium Services</h2>
          <div className={styles.serviceCards}>
            <div className={styles.serviceCard}>
              <h3>Design</h3>
              <p>Crafting visually stunning designs that captivate and inspire.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Development</h3>
              <p>Building responsive, high-performance websites tailored to your business.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Consulting</h3>
              <p>Providing expert guidance to help you achieve your digital goals.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
