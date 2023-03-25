import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import LandingMain from '@/components/LandingMain'
import Mission from '@/components/Mission'
import About from '@/components/About'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Insure-A-Bag</title>
        <meta name="description" content="NFT Insurance. Insure-A-Bag" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LandingMain />
      <Mission /> 
      <About /> 
      <Footer /> 
    </>
  )
}
