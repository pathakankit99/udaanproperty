import Head from 'next/head'
import Footer from "../src/Footer"
import Section1 from '../src/about/Section1';
import Navbar from '../src/Navbar';
import Section2 from '../src/about/Section2';
function about() {
    return (
        <div className="relative w-full">
          <Head>
            <title>Udaan Property - About Us</title>
            <meta name="description" content="Generate a SEO Friendly Description" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <Navbar active="about-us"/>
          <main>
              <Section1/>
              <Section2/>
          </main>    
          <Footer/>
        </div>
    );
}

export default about;