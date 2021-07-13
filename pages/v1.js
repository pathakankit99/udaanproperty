import Head from 'next/head'
import Navbar from '../src/Navbar'
import Section1 from '../src/v1/Section1'
import Section2 from '../src/v1/Section2'
import Section3 from '../src/v1/Section3'
import Footer from "../src/Footer"
export default function v1() {
  return (
    <div>
      <Head>
        <title>Udaan Property</title>
        <meta name="description" content="Generate a SEO Friendly Description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar active="home"/>
      <main>
        <Section1/>
        <Section2/>
        <Section3/>
      </main>    
      <Footer/>
    </div>
  )
}
