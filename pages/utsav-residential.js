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
                <meta name="description" content="Utsav Residential, is a proposed modern integrated township located at Medical More, near North Point residential boarding school, opposite SSB Camp, Ranidanga. Buzzing with development activities, the plots on offer in Utsav Residential are in various sizes of <b>7200 to 8600 sq feet</b>, enabling you to build a house the way you desire." />
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