import { useState } from "react";

const Top = () => {

    const [MobileNav, setMoblieNav] = useState(false)

    return (
        <div className="py-6 flex justify-between items-center top-0 bg-black border-b-2 border-cyan-500 font-mono text-cyan-400">
            <div className="contact">
                <a href="#contacts"> 
                    <button className="border-2 border-cyan-500 px-6 md:px-8 py-2 text-cyan-300 hover:bg-cyan-500 hover:text-black transition font-mono text-sm md:text-base glow-text">
                        CONTACT
                    </button>
                </a>
            </div>

            <div className="w-6/12 relative">
                <div className="flex justify-end items-center z-50 absolute right-0 sm:hidden">
                    {!MobileNav?
                    <button onClick={()=>{setMoblieNav(true), document.querySelector('body').style.overflowY="hidden"}} className="text-cyan-400 hover:text-cyan-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                    :                    
                    <button onClick={()=>{setMoblieNav(false), document.querySelector('body').style.overflowY=""}} className="text-cyan-400 hover:text-cyan-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    }
                </div>
                
                <div className={`${MobileNav?'flex':'hidden'} fixed bg-black sm:bg-transparent h-[100vh] w-full left-0 top-0 z-30 flex justify-center items-center sm:block sm:static sm:h-fit`}>
                    <div className="absolute w-full h-full left-0 border-2 border-cyan-500 sm:border-0 bg-[url('/imgs/bg-icons.svg')] bg-blend-multiply -z-10 bg-[#000000b4]"></div>
                    
                    <ul className="grid sm:flex sm:gap-2 md:gap-4 sm:justify-end items-center">
                        <li className="w-full sm:w-auto text-center">
                            <a onClick={()=>{setMoblieNav(false), document.querySelector('body').style.overflowY=""}} className="text-cyan-300 hover:text-cyan-100 transition text-sm md:text-base font-mono" href="#about">
                                About
                            </a>
                        </li>
                        <li className="w-full sm:w-auto text-center">
                            <a onClick={()=>{setMoblieNav(false), document.querySelector('body').style.overflowY=""}} className="text-cyan-300 hover:text-cyan-100 transition text-sm md:text-base font-mono" href="#skill_and_tools">
                                Skills
                            </a>
                        </li>
                        <li className="w-full sm:w-auto text-center">
                            <a onClick={()=>{setMoblieNav(false), document.querySelector('body').style.overflowY=""}} className="text-cyan-300 hover:text-cyan-100 transition text-sm md:text-base font-mono" href="#experience">
                                Experience
                            </a>
                        </li>
                        <li className="w-full sm:w-auto text-center">
                            <a onClick={()=>{setMoblieNav(false), document.querySelector('body').style.overflowY=""}} className="text-cyan-300 hover:text-cyan-100 transition text-sm md:text-base font-mono" href="#project">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
                <div className={`${MobileNav?'flex':'hidden'} fixed bg-black sm:bg-transparent h-[100vh] w-full left-0 top-0 z-30 flex justify-center items-center sm:block sm:static sm:h-fit`}>
                  
      <div className="absolute w-full h-full left-0  bg-[url('/imgs/bg-icons.svg')] bg-blend-multiply  -z-10 bg-[#000000b4]"></div>
                    <ul className="grid sm:flex sm:justify-evenly items-center">
                        <li className="w-full text-center text-lg ">
                            <a onClick={()=>{setMoblieNav(false), document.querySelector('body').style.overflowY=""}} className="w-full text-center text-lg" href="#about">
                                About
                            </a>
                        </li>
                        <li className="w-full text-center text-lg">
                            <a onClick={()=>{setMoblieNav(false), document.querySelector('body').style.overflowY=""}} className="w-full" href="#skill_and_tools">
                                Skills & Tools
                            </a>
                        </li>
                        <li className="w-full text-center text-lg">

                            <a onClick={()=>{setMoblieNav(false), document.querySelector('body').style.overflowY=""}} className="w-full" href="#experience">
                                Experience
                            </a>
                        </li>
                        <li className="w-full text-center text-lg">
                            <a onClick={()=>{setMoblieNav(false), document.querySelector('body').style.overflowY=""}} className="w-full" href="#project">
                                Project
                            </a>
                        </li>
                    </ul>
                </div>


            </div>


        </div>
    );
}

export default Top
