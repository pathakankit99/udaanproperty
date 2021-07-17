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
                <h1 className="text-7xl text-indigo-300 font-extrabold"><span className="leading-1 block">Utsav</span>
                <span className="text-3xl font-normal block">Residential</span> </h1>
                <br/>
                <p className="text-gray-400 lg:w-9/12">
                Utsav Residential, is a proposed modern integrated township located at Medical More, near North Point residential boarding school, opposite SSB Camp, Ranidanga. Buzzing with development activities, the plots on offer in Utsav Residential are in various sizes of <b>7200 to 8600 sq feet</b>, enabling you to build a house the way you desire.
                </p>
                <div className="lg:w-9/12 my-4 inline-block">
                <Link href="#features" passHref>
                    <div className="block btn btn-dark-blue flex justify-center pointeronhover items-center">
                        <span className="transformIcon mr-1">
                            <FaArrowRight/>
                        </span>
                        <span className="">                
                            Details
                        </span> 
                        <span className="extraSpan"></span>
                    </div>
                </Link>
                </div>
            </div>
            <div className="w-full lg:w-5/12 order-1 flex justify-center">
               <img src="/images/utsav-residential/utsav.svg"/>
            </div>
            <div style={{width:"50vw", height:"120vh"}} className="decor hidden lg:block bg-black"></div>
        </section>
    );
}

export default Section1;