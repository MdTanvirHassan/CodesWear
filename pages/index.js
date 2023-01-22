import Banner from '@/components/Banner'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
// import Image from 'next/image'
//import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WearsCode.com - wear your code</title>
        <meta name="description" content="WearsCode.com - wear your code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Banner/>
      <Content/>
      <Footer/>
      
    </>
  )
}
