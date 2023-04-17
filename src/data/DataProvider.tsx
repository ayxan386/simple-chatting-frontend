import { createContext, useEffect, useState } from 'react'


export const AppKeys = {
    token: "token"
}

const defaultState : AppData = {}

export const Data = createContext(defaultState)


export default function DataProvider({children}: any) {

  const [data, setData] = useState(defaultState)

  useEffect(() => {
    setData({token: window.localStorage.getItem(AppKeys.token)})
  }, [])

  return (
    <Data.Provider value={data}>
      {children}
    </Data.Provider>
  )
}

export interface AppData {
    token?: string | null
}