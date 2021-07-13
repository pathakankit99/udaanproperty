import Head from 'next/head'
import Navbar from '../src/Navbar'
import Section1 from '../src/gallery/Section1'
import Footer from "../src/Footer"
function gallery() {
    return (
        <div>
            <Head>
                <title>Udaan Property - Gallery</title>
                <meta name="description" content="Generate a SEO Friendly Description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar active="gallery"/>
            <main>
                <Section1/>
            </main>    
            <Footer/>
        </div>
    );
}

export default gallery;