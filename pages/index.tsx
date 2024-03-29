import type { NextPage } from 'next';
import Head from 'next/head';
import HidenComment from '../components/HidenComment';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jackson Oppenheim | Home</title>
        <meta name='description' content="Jackson Oppenheim's Portfolio" />
      </Head>
      <header className={styles.hero}>
        <h1 className={styles.hero__item}>Hi.</h1>
        <p className={styles.hero__item}>I'm Jackson Oppenheim.</p>
      </header>
      <div className={styles.intro}>
        <p>UX/UI Developer</p>
        <p>I build UIs that scale.</p>
        <HidenComment>This portfolio uses BEM CSS, a super-scalable css methodology.</HidenComment>
      </div>
      <div className={styles.about}>
        <h2 className={styles.about__title}>Who am I?</h2>
        <div className={styles.about__content}>
          <div className={styles.bio}>
            <p>I'm a Front-End Engineer in Minneapolis, MN.</p>
            <p>I'm serious about creating performant, intuitive, accessible, and scalable Front-End solutions.</p>
            <p>
              <Link href='/contact-me'>Lets connect.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
