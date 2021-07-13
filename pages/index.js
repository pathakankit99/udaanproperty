import Head from 'next/head'
import Footer from "../src/Footer"
import Section1 from '../src/home/Section1';
import Navbar from '../src/Navbar';
import Section2 from '../src/home/Section2';
import Section3 from '../src/home/Section3';
function home() {
    return (
        <div className="relative w-full">
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

export default home;