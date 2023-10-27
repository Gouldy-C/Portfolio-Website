import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import ContainerLg from './components/ContainerLg'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Christian Gouldy Portfolio Website',
  description: '',
}

export default function RootLayout( {children,} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ContainerLg>
          <Navbar/>
          {children}
        </ContainerLg>
      </body>
    </html>
  )
}
