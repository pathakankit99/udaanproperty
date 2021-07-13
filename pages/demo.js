import Head from 'next/head'
import Footer from "../src/Footer"
import Section1 from '../src/home/Section1';
import Navbar from '../src/home/Navbar';
import Section2 from '../src/home/Section2';
import Section3 from '../src/home/Section3';
Section1
function demo() {
    return (
        <div className="relative">
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
    );
}

export default demo;