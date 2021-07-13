import Link from "next/link";
import {FaArrowRight} from "react-icons/fa"
function Section2() {
    return (
        <section id="Projects" className="homeSection2 lg:px-32 pb-32 bg-gray-900">
            <h3 className="p-4 heading text-white font-bold">Our Projects</h3>
            <div className="flex flex-wrap justify-between items-center">
                <div className="card h-64 m-4 w-full lg:w-5/12 flex items-center bg-gray-700 p-0">
                    <div className="w-6/12 text-gray-300 p-4">
                        <h6 className="font-bold text-lg md:text-2xl xl:text-3xl text-indigo-400 pb-4">Utsav Residential</h6>
                        <p className="text-sm xl:text-md">
                        Utsav Residential, is a proposed modern integrated township located at Medical More, near North Point residential boarding school, opposite SSB Camp, Ranidanga.
                        </p>
                        <div className="inline-block mt-4 text-xs">
                            <Link href="/about-us" passHref>
                                <div className="block btn text-indigo-300 border hover:bg-indigo-900 border-indigo-300 flex justify-center pointeronhover items-center">
                                    <span className="transformIcon">
                                        <FaArrowRight/>
                                    </span>
                                    <span className="px-1">                
                                        Know More
                                    </span> 
                                    <span className="extraSpan"></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-6/12 h-full bg-white flex items-center relative">
                        <div style={{height:"70px", width: "70px"}} className="bg-gray-700 text-indigo-400 absolute top-0 right-0 z-50 flex justify-center items-center">
                            <p className="text-4xl font-bold">1.</p>
                        </div>
                        <div className="flex items-center justify-center h-full w-full bg-yellow-600">
                            <img src="/images/utsav.png"/>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    );
}

export default Section2;