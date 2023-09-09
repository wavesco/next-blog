import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import {Roboto} from "@next/font/google"
import Button from '../components/button'
import { motion } from "framer-motion"
import ScrollAnimation from './scrollanimation';

const roboto = Roboto({
  weight:"900",
  subsets:["latin"]
})

const name = 'Jonathan Lizama';
export const siteTitle = 'Portfolio';

export default function Layout({ children, home }) {
  return (
    <motion.div animate={{ opacity: [0, .5, .75, 1] }}>
    <ScrollAnimation>
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="flex items-left justify-left h-screen flex-col">
        <h2 className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}></h2>
        <h2 className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-white `}></h2>
        <Button/>
      </main>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <IconButton
              className='bg-gray-800 dark:bg-gray-100 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 rounded-full p-2'>
        <HomeIcon />
      </IconButton></Link>
        </div>
      )}
    </div>
    </ScrollAnimation>
    </motion.div>
  );
}