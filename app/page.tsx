import Image from 'next/image';
import styles from './page.module.css';
import LinkButton from '@/components/linkButton/LinkButton';
import MainPicture from './../public/main-page.picture.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Own the change. Next js application</h1>
        <p className={styles.desc}>
          We design, build, and scale all things digital for startups, scale-ups, and enterprises
        </p>
        <LinkButton text='See Our Works' url='/portfolio' />
      </div>
      <div className={styles.item}>
        <Image src={MainPicture} alt='main picture' className={styles.img} priority />
      </div>
    </div>
  );
}
