import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
function Section3() {
    return (
        <section className="p-4 lg:px-32">
            <h3 className="px-4 md:-mb-24 heading font-bold">Latest Project</h3>
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-full lg:w-7/12">
                    <img src="/images/utsav.svg"/>
                </div>                
                <div className="w-full lg:w-4/12">
                    <h2 className="heading2">Utsav Residential</h2>
                    <p className="py-6">
                        Utsav Residential, is a proposed modern integrated township located at Medical More, near North Point residential boarding school, opposite SSB Camp, Ranidanga. 
                        Buzzing with development activities, the plots on offer in Utsav Residential are in various sizes of <b>115 to 1000 sq yard</b>, enabling you to build a house the way you desire.<br/>
                        
                    </p>
                    <span className="inline-block">
                    <Link href="/utsav-residential" passHref>
                        <div className="btn btn-outline-blue flex justify-center pointeronhover items-center">
                            <span className="transformIcon">
                                <FaArrowRight/>
                            </span>
                            <span className="mx-2">                
                                Know More
                            </span> 
                            <span className="extraSpan"></span>
                        </div>
                    </Link>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Section3;