import Link from "next/link";
import { useEffect, useState } from "react";

const Top = () => {

    const [MobileNav, setMoblieNav] = useState(false)

  useEffect(() => {
    const handleResize = () => {
        console.log(window.innerWidth)
        if (window.innerWidth > 640) {
            setMoblieNav(false)
            document.querySelector('body').style.overflowY = ""
        }
    };
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
    return (
        <div className=" flex justify-between items-center top-0 bg-black  border-cyan-500 font-mono text-cyan-400">
            <div className="contact hidden">
                <a href="#contacts">
                    <button className="border-2 border-cyan-500 px-6 md:px-8 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition font-mono text-sm md:text-base glow-text">
                        CONTACT
                    </button>
                </a>
            </div>

            <div className="w-full  ">
                <div  className="flex backdrop-blur-sm bg-[#000000de] w-full py-4 fixed top-0 justify-center items-center z-50  sm:hidden">
                    {!MobileNav ?
                  
                       
                        <Link onClick={() => { setMoblieNav(true), document.querySelector('body').style.overflowY = "hidden" }} href={'#'} className="text-cyan-400 hover:text-cyan-200 transition">[OPEN_NAVIGATION]</Link>
                        :
                                                <Link onClick={() => { setMoblieNav(false), document.querySelector('body').style.overflowY = "scroll" }} href={'#'} className="text-cyan-400 hover:text-cyan-200 transition">[CLOSE_NAVIGATION]</Link>

                    }
                </div>

                
            </div>
            <div className={`${MobileNav ? 'flex' : 'hidden'} fixed bg-black sm:bg-transparent h-[100vh] w-full left-0 top-0 z-30  justify-center items-center  sm:static sm:h-fit`}>

                <div className={`${MobileNav?"bg-[url('/imgs/bg-icons.svg')]":""} absolute opacity-30 w-full h-full left-0   bg-blend-multiply  -z-10 bg-[#00000000]`}></div>
                <ul className="grid sm:flex sm:justify-evenly items-center">
                   
                    <li className="w-full text-center text-lg ">
                        <a onClick={() => { setMoblieNav(false), document.querySelector('body').style.overflowY = "" }} className="w-full text-center text-lg" href="#about">
                            About
                        </a>
                    </li>
                     <li className="w-full text-center text-lg ">
                        <a onClick={() => { setMoblieNav(false), document.querySelector('body').style.overflowY = "" }} className="w-full text-center text-lg" href="#contacts">
                            Contact
                        </a>
                    </li>
                    <li className="w-full text-center text-lg">
                        <a onClick={() => { setMoblieNav(false), document.querySelector('body').style.overflowY = "" }} className="w-full" href="#skill_and_tools">
                            Skills & Tools
                        </a>
                    </li>
                    <li className="w-full text-center text-lg">

                        <a onClick={() => { setMoblieNav(false), document.querySelector('body').style.overflowY = "" }} className="w-full" href="#experience">
                            Experience
                        </a>
                    </li>
                    <li className="w-full text-center text-lg">
                        <a onClick={() => { setMoblieNav(false), document.querySelector('body').style.overflowY = "" }} className="w-full" href="#project">
                            Project
                        </a>
                    </li>
                </ul>
            </div>


        </div>



    );
}

export default Top
