import React from 'react';
import style from '../styles/Navigation.module.css';
import Link from 'next/link';

type Props = {
  currentPath: string
};

const Navigation: React.FC<Props> = ({currentPath}) => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__item}>
          <Link href='/'>
            <a className={`${style.nav__link} ${currentPath === '/' ? style['nav__link--active'] : ''}`}>Home</a>
          </Link>
        </li>
        <li className={style.nav__item}>
          <Link href='/work'>
            <a className={`${style.nav__link} ${currentPath === '/work' ? style['nav__link--active'] : ''}`}>Work</a>
          </Link>
        </li>
        <li className={style.nav__item}>
          <Link href='/contact-me'>
            <a className={`${style.nav__link} ${currentPath === '/contact-me' ? style['nav__link--active'] : ''}`}>Contact Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
