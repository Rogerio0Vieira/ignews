import Head from 'next/head'
import { Inter } from 'next/font/google'


export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>
      <h1 className={styles.title}>Hello world</h1>
    </>

  )
}
