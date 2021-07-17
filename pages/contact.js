import Head from 'next/head'
import Navbar from '../src/Navbar'
import ContactUs from '../src/ContactUs';
import Footer from "../src/Footer"
function contact() {
    return (
        <div>
            <Head>
                <title>Udaan Property - Contact Us</title>
                <meta name="description" content="Generate a SEO Friendly Description" />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.0/dist/email.min.js"></script>
                <script dangerouslySetInnerHTML={{ __html: `(function(){
                    emailjs.init("%REACT_APP_EMAILJS_USERID%");
                })();` }} />
            </Head>
            <Navbar active="contact"/>
            <main>
                <ContactUs/>
            </main>    
            <Footer/>
        </div>
    );
}

export default contact;