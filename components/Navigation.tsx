import React from 'react';
import style from '../styles/Navigation.module.css';
import Link from 'next/link';

type Props = {};

const Navigation = (props: Props) => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <Link href='/'>
            <a className={style.nav__link}>Home</a>
          </Link>
        </li>
        <li className={style.nav__item}>
          <Link href='/work'>
            <a className={style.nav__link}>Work</a>
          </Link>
        </li>
        <li className={style.nav__item}>
          <Link href='/contact-me'>
            <a className={style.nav__link}>Contact Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
