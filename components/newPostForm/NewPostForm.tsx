import React from 'react';
import styles from './NewPostForm.module.css';
import Input from '@/components/input/Input';
import Textarea from '@/components/textarea/Textarea';
import Button from '@/components/button/Button';

type NewPostFormType = {
  handleSubmit: (e: any) => void;
  isLoading: boolean;
};
const NewPostForm = ({ handleSubmit, isLoading }: NewPostFormType) => {
  return (
    <form className={styles.new} onSubmit={handleSubmit}>
      <h1>Add New Post</h1>
      <Input name={'title'} type='text' placeholder='Title' className={styles.input} />
      <Input name={'desc'} type='text' placeholder='Description' className={styles.input} />
      <Input name={'img'} type='text' placeholder='Image' className={styles.input} />
      <Textarea name={'content'} cols={30} placeholder='Content' rows={10} className={styles.textArea} />
      <Button
        type='submit'
        text='Send'
        className={isLoading ? styles.buttonDisabled : styles.button}
        disabled={isLoading}
      />
    </form>
  );
};

export default NewPostForm;