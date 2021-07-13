import logo from "../public/images/logo2.png"
import Lottie from "react-lottie"
import Image from "next/image"
import React,{useState, useEffect} from "react"
import ProjectMenu from "./ProjectMenu"
import Link from "next/link"
import * as animationData from '../public/lottie/menu.json'
function Navbar() {
    const [isStopped, setIsStopped] = useState(false)
    const [count, setCount] = useState(1)
    const [open, setOpen] = useState(false)
    const [direction, setDirection] = useState(1)
    const sidemenu = { true: "translateX(0%)", false: "translateX(-100%)" };
    var style = {
      transform: sidemenu[open],
      minHeight: "100vh"
    };
    const lottieOptions={
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        if(count%2==0)
        {
            setOpen(true)
            setDirection(1)
        }
        else
        {
            setOpen(false)
            setDirection(-1)
        }
    }, [count])
    return (
        <nav style={{height: "100px"}} className="fixed right-0 left-0 top-0 flex items-center justify-end">
            <div style={{width: "100px", height: "100px"}} className="fixed left-0 z-50 p-4 bg-indigo-900" 
            onClick={()=>{
                setCount(count+1)
            }}>
                <Lottie
                options={lottieOptions}
                direction={direction}
                speed={2}
                />
            </div>
            <div style={{height:"100%"}} className="bg-white flex items-center">
                <div className="px-4">
                    <Image width={30} height={50} src={logo}/>
                </div>
                <div className="pb-2 pr-4">
                    <span className="text-2xl text-gray-800 font-bold">Udaan<br/></span>
                    <span className="text-xl text-indigo-700 font-bold">Properties</span>
                </div>
            </div>
            <div style={style} className="fixed flex justify-center items-center menu z-10 bg-indigo-700 text-white top-0 bottom-0 right-0 left-0">
                <ul>
                    <li className="nav-item nav-item-hover">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="nav-item nav-item-hover">
                        <Link href="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item nav-item-hover">
                        <ProjectMenu/>
                    </li>
                    <li className="nav-item nav-item-hover">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;