import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { ArticleList } from '@/components/ArticleList';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name='description' content='A blog post' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <ArticleList articles={articles} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
