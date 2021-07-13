import Link from "next/link"
import {FaPhoneAlt, FaEnvelope, FaWhatsapp} from "react-icons/fa"
function Footer() {
    return (
        <footer className="bg-indigo-900 p-4 lg:px-16 text-white ">
            <div className="p-4 fixed bottom-20 text-white bg-blue-500 hover:bg-blue-800 right-5 text-xl flex justify-center items-center shadow-xl" style={{width:'50px', height:'50px', borderRadius: "50%",padding:"10px", zIndex: 1000}}>
                <a href='tel:+918967379419'>
                    <FaPhoneAlt size="30px"/>
                </a>
            </div>
            <div className="p-4 fixed bottom-5 text-white bg-green-500 hover:bg-green-800 right-5 text-xl flex justify-center items-center shadow-xl" style={{width:'50px', height:'50px', borderRadius: "50%",padding:"10px", zIndex: 1000}}>
                <a href='https://wa.me/+918145321652' target='_blank'>
                    <FaWhatsapp size="30px"/>
                </a>
            </div>
            <div className="flex justify-between flex-wrap">
                <div className="w-full md:w-6/12">
                    <h6 className="font-bold text-2xl">Contact Us</h6>
                    <hr className="w-full my-2 md:w-6/12"/>
                    <p>Bagdogra,<br/>
                        734014,<br/>
                        West Bengal
                    </p>
                    <br/>
                    <div className="flex items-center py-1"><span><FaPhoneAlt/></span><a href="tel:7031785903" className="mx-2 hover:underline"> (+91) 7031785903</a></div>
                    <div className="flex items-center py-1"><span><FaEnvelope/></span><a href="mailto:contact@udaayproperty.com" className="mx-2 hover:underline"> contact@udaayproperty.com</a></div>
                </div>
                <div className="mt-6 md:m-0 w-full md:w-6/12">
                    <h6 className="text-white font-bold text-2xl">Quick Links</h6>
                    <hr className="w-full my-2 md:w-6/12"/>
                    <ul className="text-lg list-disc pl-6 text-white">
                    <li className="hover:underline">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/">Utsav Residential</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/">Gallery</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/">About Us</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="/">Contact Us</Link>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                <hr className="my-4"/>
                <p>© Copyright 2021 <bold>M/S Udaan Property Solution</bold>. All Rights Reserved</p>
                <p className="py-3">Made by Ankit Pathak at <a className="text-blue-300" href="https://pathakankit.com">www.pathakankit.com</a></p>
            </div>
        </footer>
    );
}

export default Footer;