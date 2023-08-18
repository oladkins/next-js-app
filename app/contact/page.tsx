'use client';
import styles from './page.module.css';
import Image from 'next/image';
import { useCreateContact } from '@/hooks/useCreateContact';
import ContactForm from '@/components/contactForm/ContactForm';

const Contact = () => {
  const { createContact } = useCreateContact();
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    createContact({
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
      createdAt: new Date().toISOString(),
    }).then(() => e.target.reset());
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src='/contact.png' alt='contacts' fill={true} className={styles.image} />
        </div>
        <ContactForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Contact;
