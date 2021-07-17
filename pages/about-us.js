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
            <meta name="description" content="Sanjay Singh is the founder and director of Udaan Properties. With over 10 years of on ground experience in the real estate industry he leads the organization from the front.
                        The passion he has for his work led him to create and organization that focuses on customer centric properties and township." />
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