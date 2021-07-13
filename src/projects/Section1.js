import Link from "next/link"
import {FaArrowRight} from "react-icons/fa"
import Lottie from "react-lottie"
import * as animationData from '../../public/lottie/building.json'
function Section1() {
    const lottieOptions={
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <section style={{minHeight: "100vh"}} className="flex justify-center items-center flex-wrap relative">
            <div className="p-4 py-12 lg:p-0 w-full lg:w-5/12 order-2 lg:order-1 bg-black lg:bg-transparent">
                <h1 className="text-7xl text-indigo-300 font-extrabold"><span className="leading-1 block">Projects</span>
                <span className="text-3xl font-normal block">By Udaan</span> </h1>
                <br/>
                <p className="text-gray-400 lg:w-9/12">
                  Udaan Properties is constantly trying to bring you the best properties from in and around
                  north bengal. Our Properties are placed in accordance with the availability of Good connection with major commerce hubs and other daily life facilities.
                </p>
                <div className="lg:w-9/12 my-4 inline-block">
                <Link href="#Projects" passHref>
                    <div className="block btn btn-dark-blue flex justify-center pointeronhover items-center">
                        <span className="transformIcon mr-1">
                            <FaArrowRight/>
                        </span>
                        <span className="">                
                            View Projects
                        </span> 
                        <span className="extraSpan"></span>
                    </div>
                </Link>
                </div>
            </div>
            <div className="w-full lg:w-5/12 order-1 flex justify-center">
                <Lottie options={lottieOptions}/>
            </div>
            <div style={{width:"50vw", height:"120vh"}} className="decor hidden lg:block bg-black"></div>
        </section>
    );
}

export default Section1;