import Lottie from "react-lottie"
import * as animationData from '../public/lottie/contact2.json'
function ContactUs() {
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
                <h1 className="text-7xl text-indigo-300 font-extrabold"><span className="leading-1 block">Contact Us</span>
                <span className="text-3xl font-normal block">Share your queries.</span> </h1>
                <br/>
                <form className="mt-6 lg:w-8/12 text-indigo-200">
                    <div className="mb-3 pt-0">
                        <label>Full Name <span>*</span></label>
                        <input className="mt-2" type="text" placeholder="Full Name"/>
                    </div>
                    <div className="mb-3 pt-0">
                        <label>Email <span>*</span></label>
                        <input className="mt-2" type="email" placeholder="Email"/>
                    </div>
                    <div className="mb-3 pt-0">
                        <label>Message <span>*</span></label>
                        <textarea  rows={7} className="px-3 mt-2 py-3 text-gray-700" placeholder="Message"></textarea>
                    </div>
                    <input type="submit" value="submit" className="pointeronhover btn bg-blue-200 text-blue-900 hover:bg-blue-800 hover:text-white shadow-xl"/>
                </form>
            </div>
            <div className="w-full lg:w-5/12 order-1 flex justify-center">
                <Lottie options={lottieOptions}/>
            </div>
            <div style={{width:"50vw", height:"120vh"}} className="decor hidden lg:block bg-black"></div>
        </section>
    );
}

export default ContactUs;