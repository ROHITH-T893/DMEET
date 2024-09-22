import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
  title: "DMEET ",
  description: "VIDEO CALLING APP",
  icons:{
    icon:'/icons/logo.svg'
  }
};

const Rootlayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
        <StreamVideoProvider>
        {children}</StreamVideoProvider>
    </main>
  )
}

export default Rootlayout
