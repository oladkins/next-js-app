import React from 'react';
import styles from './ContactForm.module.css';
import Input from '@/components/input/Input';
import Textarea from '@/components/textarea/Textarea';
import Button from '@/components/button/Button';

type ContactFormType = {
  handleSubmit: (e: any) => Promise<void>;
};
const ContactForm = ({ handleSubmit }: ContactFormType) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input className={styles.input} placeholder='name' required />
      <Input className={styles.input} placeholder='email' required type='email' />
      <Textarea cols={30} rows={10} className={styles.textArea} placeholder='message' required />
      <Button type='submit' text='Send' className={styles.button} />
    </form>
  );
};

export default ContactForm;