import Lottie from 'react-lottie'
import * as animationData from '../../public/lottie/5StarRating.json'
import * as animationData2 from '../../public/lottie/documents.json'
function Section2() {
    const lottieOptions={
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    const lottieOptions2={
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <section className="homeSection2 lg:px-32 pb-32 bg-gray-900">
            <h3 className="p-4 heading text-white font-bold">Our Values</h3>
            <div className="flex flex-wrap justify-between items-center">
                <div className="card h-64 m-4 w-full lg:w-5/12 flex items-center bg-gray-700 p-0">
                    <div className="w-6/12 text-gray-300 p-4">
                        <h6 className="font-bold text-lg md:text-2xl xl:text-3xl text-indigo-400 pb-4">Customer Satisfaction</h6>
                        <p className="text-sm xl:text-md">
                            At Udaan Properties, We hold our clients in high regard and strive hard to provide them with the best possible outcome. 
                            Our team works round the clock to help you find your next home.
                        </p>
                    </div>
                    <div className="w-6/12 h-full bg-white flex items-center relative">
                        <div style={{height:"70px", width: "70px"}} className="bg-gray-700 text-indigo-400 absolute top-0 right-0 z-50 flex justify-center items-center">
                            <p className="text-4xl font-bold">1.</p>
                        </div>
                        <div className="w-full">
                        <Lottie options={lottieOptions} />
                        </div>
                    </div>                    
                </div>
                <div className="card m-4 h-64 w-full lg:w-5/12 flex items-center bg-gray-700 p-0">
                    <div className="w-6/12 text-gray-300 p-4">
                        <h6 className="font-bold text-lg md:text-2xl xl:text-3xl text-indigo-400 pb-4">Easy Documentation</h6>
                        <p className="text-sm xl:text-md">We know that the process of buying a property can be quite cumbersome and we try our best to 
                            make this process easier for our clients.
                        </p>
                    </div>
                    <div className="w-6/12 h-full bg-white flex items-center justify-center relative">
                        <div style={{height:"70px", width: "70px"}} className="bg-gray-700 text-indigo-400 absolute top-0 right-0 z-50 flex justify-center items-center">
                            <p className="text-4xl font-bold">2.</p>
                        </div>
                        <div className="w-8/12">
                        <Lottie options={lottieOptions2} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section2;