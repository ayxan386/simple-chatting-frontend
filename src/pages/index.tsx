import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import {  AppKeys  } from '@/data/DataProvider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [contacts, setContacts] = useState(Array<ContactDto>);


  useEffect(() => {
    const token = window.localStorage.getItem(AppKeys.token);
    if(token == null) {
      window.location.href = '/login'
    } else {
      getContacts(token);
    }
  }, [])


  async function getContacts(token : string) {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/contacts/my`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`,
                "Accept": "*/*"
            },
        })

        const data: {data : [ContactDto], message: string} = await res.json();
        setContacts(data.data);
    }
    catch (err) {
      // window.location.href = '/login'
    }
}
  

  return (
    <>
      <Head>
        <title>Simple-chatting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          {
            contacts
            .map((contact : ContactDto) => <div className='row' key={contact.otherId}>{contact.username}</div>)
          }
        </div>
      </main>
    </>
  )
}


interface ContactDto {
  username: string,
   otherId: string
  }