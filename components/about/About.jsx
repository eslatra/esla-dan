import React from "react";



const About = () => {

    const [showMore, setShowMore] = React.useState(false);
    return (
        <div className="py-5" id="about">
            <h2 className="text-3xl font-bold">About</h2>
            <p className="my-5 font-light font-serif text-justify">
                Hello there! I'm Esla Dankuje Josiah, a versatile and dedicated software developer. With a wide range of skills encompassing backend and frontend development, Shopify development, AI development, data analysis, and video editing, I bring a diverse set of expertise to the table.
                Passionate about building valuable products, I embarked on a programming journey to create meaningful solutions. {!showMore &&<span onClick={() => setShowMore(!showMore)} className="text-blue-300 cursor-pointer text-right w-full -mt-5">
                {showMore ? "Show Less ▲" : "Read More ▼"}  
            </span>}
                {showMore ? (
                    <>
                    

                <span className="block mt-3 ">
                    Currently, I'm engaged in exciting personal projects, while also gaining valuable experience by working with clients and organizations.
                    Driven by my love for gaming, coding, and exploring new things, I approach each project with enthusiasm and a commitment to delivering exceptional results. As a clear communicator and detail-oriented professional, I strive to exceed client expectations and ensure their vision comes to life.
                    With a strong foundation in backend and frontend development, I possess the technical expertise to create robust and user-friendly applications. Additionally, my proficiency in Shopify development enables me to build engaging and seamless e-commerce experiences.
                    Moreover, my skills in AI development and data analysis allow me to unlock valuable insights and drive innovation in various domains. I'm also adept at video editing, adding a creative touch to multimedia projects.
                    I am excited about collaborating with clients who share a passion for creating impactful solutions. If you're looking for a dedicated software developer who can bring your ideas to fruition, let's connect and work together to build something amazing! 
                {showMore && <span onClick={() => setShowMore(!showMore)} className="text-blue-300 cursor-pointer text-right w-full -mt-5">
                {showMore ? " Show Less ▲" : " Read More ▼"}  
            </span>}
                </span>
                    </>
                ) : null}
            </p>
           
        </div>
    );
}

export default About;