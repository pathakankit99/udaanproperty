import {GiElectric, GiShield, GiTap, GiTennisRacket,GiDefensiveWall} from "react-icons/gi"
import {ImRoad} from "react-icons/im"
function Section3() {
    return (
        <section className="Features p-4 pb-16 lg:px-32 bg-gray-200">
           <h3 className="heading font-bold mb-6">Extra Features</h3>
            <div className="flex items-center justify-between flex-wrap">
                <div className="w-full md:w-5/12 bg-white shadow-xl flex items-center text-md lg:text-sm xl:text-xl mb-4">
                    <div className="mr-3 bg-pink-500 p-4 text-5xl text-white">
                        <GiElectric/>
                    </div>
                    <div className="flex-1 p-4">
                        <p>24Hr Electricity</p>
                    </div>
                </div>
                <div className="w-full md:w-5/12 bg-white shadow-xl flex items-center text-md lg:text-sm xl:text-xl mb-4">
                    <div className="mr-3 bg-pink-500 p-4 text-5xl text-white">
                        <GiShield/>
                    </div>
                    <div className="flex-1 p-4">
                        <p>Security Guards</p>
                    </div>
                </div>
                <div className="w-full md:w-5/12 bg-white shadow-xl flex items-center text-md lg:text-sm xl:text-xl mb-4">
                    <div className="mr-3 bg-pink-500 p-4 text-5xl text-white">
                        <GiTap/>
                    </div>
                    <div className="flex-1 p-4">
                        <p>24Hr Water Supply</p>
                    </div>
                </div>
                <div className="w-full md:w-5/12 bg-white shadow-xl flex items-center text-md lg:text-sm xl:text-xl mb-4">
                    <div className="mr-3 bg-pink-500 p-4 text-5xl text-white">
                        <GiTennisRacket/>
                    </div>
                    <div className="flex-1 p-4">
                        <p>Play Ground</p>
                    </div>
                </div>
                <div className="w-full md:w-5/12 bg-white shadow-xl flex items-center text-md lg:text-sm xl:text-xl mb-4">
                    <div className="mr-3 bg-pink-500 p-4 text-5xl text-white">
                        <ImRoad/>
                    </div>
                    <div className="flex-1 p-4">
                        <p>16Ft Metal Road</p>
                    </div>
                </div>
                <div className="w-full md:w-5/12 bg-white shadow-xl flex items-center text-md lg:text-sm xl:text-xl mb-4">
                    <div className="mr-3 bg-pink-500 p-4 text-5xl text-white">
                        <GiDefensiveWall/>
                    </div>
                    <div className="flex-1 p-4">
                        <p>Boundary Wall</p>
                    </div>
                </div>        
            </div>
        </section>
    );
}

export default Section3;