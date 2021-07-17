import Head from 'next/head'
import Navbar from '../src/Navbar'
import Footer from "../src/Footer"
import Section1 from '../src/projects/Section1'
import Section2 from '../src/projects/Section2'

function projects() {
    return (
        <div>
           <Head>
                <title>Udaan Property - Projects</title>
                <meta name="description" content="Udaan Properties is constantly trying to bring you the best properties from in and around
                  north bengal. Our Properties are placed in accordance with the availability of Good connection with major commerce hubs and other daily life facilities." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar active="projects"/>
            <main>
                <Section1/>
                <Section2/>
            </main>    
            <Footer/>
        </div>
    );
}

export default projects;