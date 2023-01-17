import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import About from './About'
import Project from './Project'
import Contract from './Contract'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Chivo+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200&display=swap" rel="stylesheet"/> 
        <title>Sutima Phetsatien | Portfolio</title>
        <meta name="description" content=" Created by Sutima Phetsatien using Next.js and Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <About/>
        <Project/>
        <Contract/>
        <Footer/>
      </div>
    </div>
  )
}
