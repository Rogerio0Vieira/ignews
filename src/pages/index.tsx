import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/home.module.scss'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className={styles.title}>Hello world</h1>
  )
}
