import Link from "next/link";

const Index = () => (
    <section id="contacts">
        
        <div className="pt-14 pb-4 md:py-6 mt-4 text-cyan-500 font-mono">
            {/* Header Section */}
            <div className=" mb-4 py-8  tech-border-bottom tech-border-top relative">
                <div className="flex  justify-between items-start ">
                    <div>
                        <p className="text-xs md:text-sm tracking-widest text-cyan-400 mb-2 uppercase">Software Engineer</p>
                        <p className="text-lg md:text-2xl font-bold glow-cyan">Esla Dankuje</p>
                        {/* <p className="text-xs md:text-sm text-cyan-300 mt-1">⦿ D22-8.97</p> */}
                    </div>
                    <div className="text-right">
                        <div className="flex items-center justify-end gap-2 mb-2">
                            <span className="status-indicator"></span>
                            <span className="text-xs md:text-sm tracking-widest text-cyan-300 uppercase">SIGNAL ACTIVE</span>
                        </div>
                        <p className="text-xs md:text-sm text-cyan-300">SKILL LVL: █████████</p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Image Section */}
                <div className="relative flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-sm">
                        <div className="corner-bracket top-left"></div>
                        <div className="corner-bracket top-right"></div>
                        <div className="corner-bracket bottom-left"></div>
                        <div className="corner-bracket bottom-right"></div>

                        <div className="scanlines m-3">
                            <img
                                src="./imgs/esla.jpeg"
                                alt="Esla Dankuje"
                                className="w-full aspect-square object-cover pixel-image border-2 border-cyan-500 " />
                        </div>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="flex flex-col justify-between">
                    <div className="h-full flex flex-col justify-between">
                        <p className="text-sm md:text-base leading-relaxed text-cyan-100 mb-8">
                            Crafting intricate code to shape digital innovation and push boundaries.
                        </p>

                        {/* Quick Links */}
                        <div className="space-y-3 hidden md:block mb-8">
                            <p className="text-xs tracking-widest text-cyan-300 uppercase mb-4">NAVIGATION</p>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#about" className="text-cyan-300 hover:text-cyan-100 transition">• About</Link></li>
                                <li><Link href="#skill_and_tools" className="text-cyan-300 hover:text-cyan-100 transition">• Skills & Tools</Link></li>
                                <li><Link href="#experience" className="text-cyan-300 hover:text-cyan-100 transition">• Experience</Link></li>
                                <li><Link href="#project" className="text-cyan-300 hover:text-cyan-100 transition">• Projects</Link></li>
                                {/* <li><Link href="#contacts" className="text-cyan-300 hover:text-cyan-100 transition">• Contact</Link></li> */}
                            </ul>
                        </div>

                        {/* Contact Box */}

                        <div className="border-t-2 border-b-2 border-cyan-500 p-4 bg-black bg-opacity-50 hover:bg-opacity-75 transition cursor-pointer">
                            <p className="text-xs text-center md:text-sm tracking-tight text-cyan-100 font-mono">
                                [INITIATE_CONTACT]
                            </p>
                            <div className="flex justify-center gap-6 pt-2 ">
                                <Link  href="https://github.com/esladan" target="_blank" rel="noopener noreferrer" className="text-cyan-400 group flex flex-col relative items-center hover:text-cyan-100 transition">
                                    <svg className="animate-pulse" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M46 18V30H44V34H42V38H40V40H38V42H36V44H32V46H30V36H28V34H30V32H34V30H36V28H38V18H36V12H32V14H30V16H28V14H20V16H18V14H16V12H12V18H10V28H12V30H14V32H18V36H14V34H12V32H8V34H10V38H12V40H18V46H16V44H12V42H10V40H8V38H6V34H4V30H2V18H4V14H6V10H8V8H10V6H14V4H18V2H30V4H34V6H38V8H40V10H42V14H44V18H46Z" fill="#5FFFFF" />
                                    </svg>
                                    <p className="hidden absolute text-xs text-center top-6 group-hover:block">Github</p>
                                </Link>
                                <Link href="mailto:alsenad390@gmail.com" className="text-cyan-400 group flex flex-col relative items-center hover:text-cyan-100 transition">
                                    <svg className="animate-pulse" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.18164 10.9094H4.36346V8.72754H43.6362V10.9094H45.818V39.273H43.6362V41.4548H4.36346V39.273H2.18164V10.9094ZM6.54528 37.0912H41.4544V19.6366H39.2726V21.8184H34.9089V24.0003H30.5453V26.1821H26.1816V28.3639H21.818V26.1821H17.4544V24.0003H13.0907V21.8184H8.7271V19.6366H6.54528V37.0912ZM41.4544 13.0912H6.54528V15.273H10.9089V17.4548H15.2726V19.6366H19.6362V21.8184H28.3635V19.6366H32.727１V１７．４５４８Ｈ３７．０９０７Ｖ１５．２７３Ｈ４１．４５４４Ｖ１３．０９１２Ｚ" fill="#5FFFFF" />
                                    </svg>
                                    <p className="hidden absolute text-xs text-center top-6 group-hover:block">Email</p>
                                </Link>
                                <Link href="tel:+2349154754448" className="text-cyan-400 group flex flex-col relative items-center hover:text-cyan-100 transition">
                                   <svg className="animate-pulse" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 1H11V3H2V1ZM9 3H11V9H9V3ZM7 7H9V11H7V7ZM4 12H6V14H4V12ZM2 3H4V12H2V3ZM9 11H11V13H9V11ZM11 13H13V15H11V13ZM13 15H17V17H13V15ZM15 13H21V15H15V13ZM21 13H23V22H21V13ZM6 14H8V16H6V14ZM8 16H10V18H8V16ZM10 18H12V20H10V18ZM12 20H21V22H12V20Z" fill="#5FFFFF"/>
</svg>

                                    <p className="hidden absolute text-xs text-center top-6 group-hover:block">Phone</p>
                                </Link>
                                <Link href="https://www.linkedin.com/in/esla-dankuje-9455121b7/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 group flex flex-col relative items-center hover:text-cyan-100 transition">

                                    <svg className="animate-pulse" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_773_8)">
                                            <path d="M22.8525 2.2875H24V21.7125H22.8525V2.2875ZM21.7125 21.7125H22.8525V22.86H21.7125V21.7125ZM21.7125 1.14H22.8525V2.2875H21.7125V1.14ZM20.565 3.4275H21.7125V20.5725H20.565V3.4275ZM2.28 22.86H21.7125V24H2.28V22.86ZM3.4275 20.5725H20.565V21.7125H3.4275V20.5725ZM17.1375 11.43H15.9975V10.2825H13.71V11.43H12.57V10.2825H10.2825V17.145H12.57V13.7175H13.71V12.57H14.8575V13.7175H15.9975V17.145H18.285V12.57H17.1375V11.43ZM5.7075 10.2825H7.995V17.145H5.7075V10.2825ZM5.7075 6.855H7.995V9.1425H5.7075V6.855ZM3.4275 2.2875H20.565V3.4275H3.4275V2.2875ZM2.28 0H21.7125V1.14H2.28V0ZM2.28 3.4275H3.4275V20.5725H2.28V3.4275ZM1.14 21.7125H2.28V22.86H1.14V21.7125ZM1.14 1.14H2.28V2.2875H1.14V1.14ZM0 2.2875H1.14V21.7125H0V2.2875Z" fill="#5FFFFF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_773_8">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="hidden absolute text-xs text-center top-6 group-hover:block">LinkedIn</p>


                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* Social Links */}


            {/* Tagline */}
            <div className="flex justify-center">
                {/* <h1 className="text-2xl sm:text-4xl biggest text-center tracking-tight">BUILDING PRODUCTS ADDING VALUE</h1> */}
            </div>
        </div>
    </section>
)

export default Index;
