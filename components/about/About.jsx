import React from "react";

const About = () => {
    const [showMore, setShowMore] = React.useState(false);
    
    return (
        <div className="py-8" id="about">
            <div className="mb-6 pb-4 tech-border-bottom">
                <h2 className="text-xl md:text-2xl font-bold glow-cyan font-mono tracking-widest">≈ ABOUT</h2>
            </div>
            
            <p className="text-sm md:text-base leading-relaxed font-mono text-cyan-100 text-justify space-y-4">
                <span className="block">
                    [PROFILE LOADED] Hello, I'm Esla Dankuje Josiah, a versatile full-stack software developer. My expertise spans backend and frontend development, Shopify integration, AI development, data analysis, and multimedia production.
                </span>
                
                <span className="block">
                    Passionate about building valuable products, I've dedicated my career to creating meaningful solutions that drive impact and innovation.
                </span>
                
                {!showMore && (
                    <span 
                        onClick={() => setShowMore(!showMore)} 
                        className="text-cyan-400 cursor-pointer hover:text-cyan-200 transition inline-flex items-center gap-1"
                    >
                        [EXPAND_DATA] ▼
                    </span>
                )}
                
                {showMore && (
                    <>
                        <span className="block">
                            Currently, I'm engaged in exciting personal projects while gaining valuable experience working with diverse clients and organizations across multiple industries.
                        </span>
                        
                        <span className="block">
                            Driven by my passion for gaming, coding, and exploration, I approach every project with enthusiasm and a commitment to excellence. As a clear communicator and meticulous professional, I'm dedicated to exceeding expectations and bringing your vision to life.
                        </span>
                        
                        <span className="block">
                            My technical foundation includes:
                        </span>
                        
                        <ul className="list-none space-y-2 ml-4 text-cyan-200">
                            <li>➢ Full-stack web development (backend & frontend)</li>
                            <li>➢ E-commerce solutions (Shopify & custom implementations)</li>
                            <li>➢ AI/ML development and data analysis</li>
                            <li>➢ Multimedia & video production</li>
                        </ul>
                        
                        <span className="block">
                            I'm excited to collaborate with forward-thinking organizations that share a passion for innovation. If you're looking for a dedicated developer to bring your ideas to reality, let's connect and build something extraordinary together.
                        </span>
                        
                        <span 
                            onClick={() => setShowMore(!showMore)} 
                            className="text-cyan-400 cursor-pointer hover:text-cyan-200 transition inline-flex items-center gap-1"
                        >
                            [COMPRESS_DATA] ▲
                        </span>
                    </>
                )}
            </p>
        </div>
    );
}

export default About;
