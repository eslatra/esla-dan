import React from "react";

const About = () => {
    const [showMore, setShowMore] = React.useState(false);

    return (
        <div className="py-8 md:pt-8 pt-16" id="about">
            <div className="mb-6 pb-4 tech-border-bottom">
                <h2 className="text-xl md:text-2xl font-bold glow-cyan font-mono tracking-widest">≈ ABOUT</h2>
            </div>

            <p className="text-sm md:text-base leading-relaxed font-mono text-cyan-100 text-justify space-y-4">
                <span className="block">
                    <span className="text-cyan-200">[PROFILE LOADED]</span> Hello, I'm Esla Dankuje Josiah, a Software Engineer. My expertise spans Backend and Frontend, Mobile ,AI development, Data analysis, Shopify integration and multimedia production.
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
                            Driven by my passion for technology, creativity, and exploration, I approach every project with enthusiasm and a commitment to excellence. As a clear communicator and meticulous professional, I'm dedicated to exceeding expectations and bringing your vision to life.
                        </span>

                        <span className="block">
                            My technical foundation includes:
                        </span>

                        <ul className="list-none space-y-2 ml-4 text-cyan-200">
                            <li>➢ Full-stack web development (backend & frontend)</li>
                            <li>➢ Mobile app development (React Native)</li>
                            <li>➢ AI/ML development and Data analysis</li>
                            <li>➢ E-commerce solutions (Shopify & custom implementations)</li>
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
