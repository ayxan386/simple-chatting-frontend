import DataProvider from '@/data/DataProvider'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  </>
}

interface AppData {
  token?: string
}
