import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date'
import {Roboto} from "@next/font/google"
import Button from '../components/button'
const roboto = Roboto({
  weight:"900",
  subsets:["latin"]
})


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="flex items-left justify-left h-screen flex-col">
        <h2 className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-gray-800`}></h2>
        <h2 className={`${roboto.className} text-4xl sm:text-6xl md:text-9xl text-center text-white `}></h2>
        {/* <button className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'>
          Toggle Mode
        </button> */}
        <Button/>
      </main>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Jonathan, and I'm a software engineer based in Houston, Texas. 
          Feel free to reach out to me on {' '} 
          <a href="https://www.linkedin.com/in/jonathan-lizama"> LinkedIn</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}