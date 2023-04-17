import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import {  AppKeys  } from '@/data/DataProvider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  useEffect(() => {
    if(window.localStorage.getItem(AppKeys.token) == null) {
      window.location.href = '/login'
    } else {
      //get some content to show
    }
  }, [])
  

  return (
    <>
      <Head>
        <title>Simple-chatting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          Hello world
        </div>``
      </main>
    </>
  )
}
