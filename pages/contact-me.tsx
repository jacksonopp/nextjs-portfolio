import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import contactStyles from '../styles/ContactMe.module.css';
import homeStyles from '../styles/Home.module.css';

type Props = {};

const ContactMe: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Contact Me | Jackson Oppenheim</title>
        <meta name='description' content='Contact Jackson Oppenheim' />
      </Head>
      <div className={homeStyles.hero}>
        <h1 className={homeStyles.hero__item}>Contact me</h1>
      </div>

      <ul className={contactStyles.contact}>
        <li className={contactStyles.contact__item}>
          <span className={contactStyles.contact__type}>Phone:</span>
          <span className={contactStyles.contact__details}>
            <a href='tel:+14406656551'>440.665.6551</a>
          </span>
        </li>
        <li className={contactStyles.contact__item}>
          <span className={contactStyles.contact__type}>Email:</span>
          <span className={contactStyles.contact__details}>
            <a href='mailto:jacksonopp@gmail.com'>jacksonopp@gmail.com</a>
          </span>
        </li>
        <li className={contactStyles.contact__item}>
          <span className={contactStyles.contact__type}>Linkedin:</span>
          <span className={contactStyles.contact__details}>
            <a href='https://www.linkedin.com/in/jacksonopp/' target='_blank' rel='noreferrer'>
              in/jacksonopp
            </a>
          </span>
        </li>
        <li className={contactStyles.contact__item}>
          <span className={contactStyles.contact__type}>Github:</span>
          <span className={contactStyles.contact__details}>
            <a href='https://github.com/jacksonopp' target='_blank' rel='noreferrer'>
              /jacksonopp
            </a>
          </span>
        </li>
        <li className={contactStyles.contact__item}>
          <span className={contactStyles.contact__type}>Resume:</span>
          <span className={contactStyles.contact__details}>
            <a href='https://drive.google.com/file/d/1VrgXADa8KbzwKAB-DV9Q_QqAeLeuLpcj/view?usp=sharing' target='_blank' rel='noreferrer'>
              On Goolge Drive
            </a>
          </span>
        </li>
      </ul>
    </>
  );
};

export default ContactMe;
