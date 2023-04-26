import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import {  AppKeys  } from '@/data/DataProvider'
import ContactListItem, { DEFAULT_PIC_URL } from './components/ContactListItem'

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
      window.location.href = '/login'
    }
}
  

  return (
    <>
      <Head>
        <title>Simple-chatting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} container `}>
        <div className='row'> </div>
        <div className={`${styles.main_wrapper} row`}> 
        <div className='col-6'>
          {
            contacts
            .map((contact : ContactDto) => ContactListItem(contact))
          }
        </div>
        <div className='col-1'></div>
        <div className={`${styles.my_info} col-5 justify-content-center`}>
          <div className='row justify-content-center'><h1>My Space</h1></div>
          <div className='row justify-content-center'><img className={styles.my_profile_pic} src={DEFAULT_PIC_URL}></img></div>
          <div className='row justify-content-center'><h1>username</h1></div>
        </div>
        </div>
      </main>
    </>
  )
}


export interface ContactDto {
  username: string,
   otherId: string
  }