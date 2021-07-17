import Head from 'next/head'
import Navbar from '../src/Navbar'
import Footer from "../src/Footer"
import Section1 from '../src/utsav-residential/Section1'
import Section2 from '../src/utsav-residential/Section2'
import Section3 from '../src/utsav-residential/Section3'
import Section4 from '../src/utsav-residential/Section4'
import Section5 from '../src/utsav-residential/Section5'
function utsavResidential() {
    return (
        <div>
            <Head>
                <title>Udaan Property - Utsav Residential</title>
                <meta name="description" content="Generate a SEO Friendly Description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar active="projects"/>
            <main className="utsav-residential-page">
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
            </main>    
            <Footer/>
        </div>
    );
}

export default utsavResidential;