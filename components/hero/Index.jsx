import Link from "next/link";

const Index = () => {
    return (
        <div className="py-12 text-cyan-500 font-mono">
            {/* Header Section */}
            <div className="mb-12 pb-8 tech-border-bottom relative">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <p className="text-xs md:text-sm tracking-widest text-cyan-400 mb-2 uppercase">ESLA DANKUJE</p>
                        <p className="text-lg md:text-2xl font-bold glow-cyan">FULL STACK DEVELOPER</p>
                        <p className="text-xs md:text-sm text-cyan-300 mt-1">⦿ D22-8.97</p>
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
                        
                        <div className="scanlines">
                            <img 
                                src="./imgs/esla.jpeg" 
                                alt="Esla Dankuje" 
                                className="w-full aspect-square object-cover pixel-image border-2 border-cyan-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Bio Section */}
                <div className="flex flex-col justify-between">
                    <div>
                        <p className="text-sm md:text-base leading-relaxed text-cyan-100 mb-8">
                            Crafting intricate code to shape digital innovation and push boundaries.
                        </p>

                        {/* Quick Links */}
                        <div className="space-y-3 mb-8">
                            <p className="text-xs tracking-widest text-cyan-300 uppercase mb-4">NAVIGATION</p>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#about" className="text-cyan-300 hover:text-cyan-100 transition">• About</Link></li>
                                <li><Link href="#skill_and_tools" className="text-cyan-300 hover:text-cyan-100 transition">• Skills & Tools</Link></li>
                                <li><Link href="#experience" className="text-cyan-300 hover:text-cyan-100 transition">• Experience</Link></li>
                                <li><Link href="#project" className="text-cyan-300 hover:text-cyan-100 transition">• Projects</Link></li>
                                <li><Link href="#contacts" className="text-cyan-300 hover:text-cyan-100 transition">• Contact</Link></li>
                            </ul>
                        </div>

                        {/* Contact Box */}
                        <div className="border-2 border-cyan-500 p-4 bg-black bg-opacity-50 hover:bg-opacity-75 transition cursor-pointer">
                            <p className="text-xs md:text-sm tracking-tight text-cyan-100 font-mono">
                                alsenad390@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-12 py-8 tech-border-top">
                <Link href="https://github.com/esladan" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-100 transition">
                    <img src="./imgs/contact/GitHub.svg" alt="GitHub" width={24} height={24} />
                </Link>
                <Link href="mailto:alsenad390@gmail.com" className="text-cyan-400 hover:text-cyan-100 transition">
                    <img src="./imgs/contact/Letter.svg" alt="Email" width={24} height={24} />
                </Link>
                <Link href="tel:+2348135829978" className="text-cyan-400 hover:text-cyan-100 transition">
                    <img src="./imgs/contact/Call.svg" alt="Phone" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/esla-dankuje-9455121b7/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-100 transition">
                    <img src="./imgs/contact/LinkedIn 2.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
            </div>

            {/* Tagline */}
            <div className="flex justify-center">
                <h1 className="text-2xl sm:text-4xl biggest text-center tracking-tight">BUILDING PRODUCTS ADDING VALUE</h1>
            </div>
        </div>
    );
}

export default Index;
