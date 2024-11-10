// pages/contact.tsx
import Head from 'next/head';
import styles from '../CSS/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.contactCard}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We’d love to hear from you! Reach out with any questions, feedback, or just to say hello.
          </p>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <p><strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p><strong>Address:</strong> 1234 Street Name, City, State, ZIP</p>
          </div>

          {/* Contact Form */}
          <form className={styles.contactForm}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}
