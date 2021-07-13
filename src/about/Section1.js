import Link from "next/link"
import Lottie from "react-lottie"
import * as animationData from '../../public/lottie/hero.json'
import {FaArrowRight} from "react-icons/fa"
function Section1() {
    const lottieOptions={
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <section style={{minHeight: "100vh"}} className="flex justify-center items-center flex-wrap relative">
            <div className="p-4 py-12 lg:p-0 w-full lg:w-5/12 order-2 lg:order-1 bg-black lg:bg-transparent">
                <h1 className="text-7xl text-indigo-300 font-extrabold"><span className="leading-1 block">About Us</span>
                <span className="text-3xl font-normal block"></span> </h1>
                <br/>
                <p className="text-gray-400 lg:w-9/12">
                    Udaan Properties have earned the badge as the prominent realtor in North Bengal, providing tailored real estate solutions for your dream home or the right office environment for your business.
                </p>
                <div className="lg:w-9/12 my-4 inline-block">
                    <Link href="/contact" passHref>
                        <div className="block btn btn-dark-blue flex justify-center pointeronhover items-center">
                            <span className="transformIcon">
                                <FaArrowRight/>
                            </span>
                            <span className="mx-2">                
                            Contact Us
                            </span> 
                            <span className="extraSpan"></span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-full lg:w-5/12 order-1 flex justify-center">
                <div className="w-8/12"><Lottie options={lottieOptions}/></div>
            </div>
            <div style={{width:"50vw", height:"120vh"}} className="decor hidden lg:block bg-black"></div>
        </section>
    );
}

export default Section1;