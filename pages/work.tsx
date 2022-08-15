import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import homeStyles from "../styles/Home.module.css";
import workStyles from "../styles/Work.module.css";
import topazScreenshot from "../public/screenshots/topaz1.png";
import a11yScreenshot from "../public/screenshots/a11y.png";
import portfolioScreenshot from "../public/screenshots/portfolio.png";
import lnkScreenshot from "../public/screenshots/lnk.png";
import Link from "next/link";

type Props = {};

const Work: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>Work | Jackson Oppenheim</title>
        <meta name="description" content="Jackson Oppenheim's Portfolio" />
      </Head>

      <div className={homeStyles.hero}>
        <h1 className={homeStyles.hero__item}>Stuff I've done</h1>
      </div>

      <div className={workStyles.work}>
        <div className={workStyles.work__content}>
          <h2 className={workStyles.work__title}>Topaz Design</h2>
          <p className={workStyles.work__role}>
            <span className={workStyles.work__role__title}>Role: </span>Lead
            developer
          </p>
          <p>
            Topaz Design is a set of Angular libraries and customizations on top
            of Angular Material built for the demands of Pearson VUE's
            enterprise architecture. It is built with scalibility in mind, and
            includes and recommend a11y best practices so applications can be
            built for users of all ability in mind.
          </p>
          <p>
            The framework incorporates user-centric design, and is built to make
            developing beautiful, robust applications easy for developers.
          </p>
          <p>
            It is being used to build applications for clients such as IBM,
            Amazon, and Microsoft.
          </p>
          <div>
            <a
              href="https://vueui3.pearsonvue.com"
              target="_blank"
              rel="noreferrer"
            >
              Take a look
            </a>
          </div>
        </div>
        <div className={workStyles.work__img}>
          <Image src={topazScreenshot} alt="" />
        </div>
      </div>

      <hr />

      <div className={`${workStyles.work} ${workStyles["work--reverse"]}`}>
        <div className={workStyles.work__content}>
          <h2 className={workStyles.work__title}>OnVUE A11y</h2>
          <p className={workStyles.work__role}>
            <span className={workStyles.work__role__title}>Role: </span>A11y
            developer
          </p>
          <p>
            As COVID-19 shut down many of Pearson VUE's test centers, test
            candidates had to turn to OnVUE, the company's online proctoring
            service, balooning to over 3M candidates in a year. Because of the
            massive new number of users, a gap in the product's a11y began to
            become more problematic.
          </p>
          <p>
            I was one of the developers who led the effort to get this product
            WCAG AA Compliant, as well as change the mentality of a11y being an
            afterthought to one where it needs to be built in from the start.
          </p>
        </div>
        <div className={workStyles.work__img}>
          <Image src={a11yScreenshot} alt="" />
        </div>
      </div>

      <hr />

      <div className={workStyles.work}>
        <div className={workStyles.work__content}>
          <h2 className={workStyles.work__title}>lnk</h2>
          <p className={workStyles.work__role}>
            <span className={workStyles.work__role__title}>Role: </span>Designer
            & Developer
          </p>
          <p>
            A link shortener that also includes a time to live limit. It is
            using Next.js, Tailwindcss, Vercel edge serverless functions,
            Prisma, Postgresql on Railway, and tRPC.
          </p>
          <p>
            Since its a subdomain of this website, and my name is pretty long,
            I'm not sure that it actually shortens the URLs all that much, but
            that just adds to the charm, right?
          </p>
          <div className={workStyles.work__links}>
            <a
              href="https://lnk.jacksonoppenheim.com"
              rel="noreferrer"
              target="_blank"
            >
              Take a look
            </a>
            <a
              href="https://github.com/jacksonopp/lnk"
              rel="noreferrer"
              target="_blank"
            >
              View the source code
            </a>
          </div>
        </div>
        <div className={workStyles.work__img}>
          {/* TODO: Use a mac screenshot */}
          <Image src={lnkScreenshot} alt="" />
        </div>
      </div>

      <hr />

      <div className={workStyles.work}>
        <div className={workStyles.work__img}>
          <Image src={portfolioScreenshot} alt="" />
        </div>
        <div className={workStyles.work__content}>
          <h2 className={workStyles.work__title}>This Portfolio</h2>
          <p className={workStyles.work__role}>
            <span className={workStyles.work__role__title}>Role: </span>Designer
            & Developer
          </p>
          <p>
            This is the site you're on right now! It's built in Typescript using
            Next.js and is deployed on the edge with Vercel.
          </p>
          <p>
            I am incorporating CSS Modules, and using a BEM CSS System to allow
            me to easily scale the style of this site.
          </p>
          <p>
            It's also designed for a mobile first experience. Go ahead and look
            at this on your phone (or just shrink your browser window if you
            don't have your phone on you)!
          </p>
          <div className={workStyles.work__links}>
            <Link href="/work">Take a look (you're already here)</Link>
            <a
              href="https://github.com/jacksonopp/nextjs-portfolio"
              rel="noreferrer"
              target="_blank"
            >
              View the source code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
