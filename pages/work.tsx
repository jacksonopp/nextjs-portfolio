import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import homeStyles from '../styles/Home.module.css';
import workStyles from '../styles/Work.module.css';
import topazScreenshot from '../public/screenshots/topaz.png';
import a11yScreenshot from '../public/screenshots/a11y.png'

type Props = {};

const Work: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Work | Jackson Oppenheim</title>
        <meta name='description' content="Jackson Oppenheim's Portfolio" />
      </Head>

      <div className={homeStyles.hero}>
        <h1 className={homeStyles.hero__item}>Stuff I've done</h1>
      </div>

      <div className={workStyles.work}>
        <div className={workStyles.work__content}>
          <h2 className={workStyles.work__title}>Topaz Design</h2>
          <p className={workStyles.work__role}>
            <span className={workStyles.work__role__title}>Role: </span>Lead developer
          </p>
          <p>Topaz Design is a set of Angular libraries and customizations on top of Angular Material built for the demands of Pearson VUE's enterprise architecture. It is built with scalibility in mind, and includes and recommend a11y best practices so applications can be built for users of all ability in mind.</p>
          <p>It is being used to build applications for clients such as IBM, Amazon, and Microsoft.</p>
          <div>
            <a href='https://vueui3.pearsonvue.com' target='_blank' rel='noreferrer'>
              Take a look
            </a>
          </div>
        </div>
        <div className={workStyles.work__img}>
          <Image src={topazScreenshot} alt='' />
        </div>
      </div>

      <hr />

      <div className={`${workStyles.work} ${workStyles['work--reverse']}`}>
        <div className={workStyles.work__content}>
          <h2 className={workStyles.work__title}>OnVUE A11y</h2>
          <p className={workStyles.work__role}>
            <span className={workStyles.work__role__title}>Role: </span>A11y developer
          </p>
          <p>As COVID-19 shut down many of Pearson VUE's test centers, test candidates had to turn to OnVUE, the company's online proctoring service, balooning to over 3M candidates in a year. Because of the massive new number of users, a gap in the product's a11y began to become more problematic.</p>
          <p>I was one of the developers who led the effort to get this product WCAG AA Compliant, as well as change the mentality of a11y being an afterthought to one where it needs to be built in from the start.</p>
        </div>
        <div className={workStyles.work__img}>
          <Image src={a11yScreenshot} alt='' />
        </div>
      </div>
    </>
  );
};

export default Work;
