import { useState } from "react";

const Experience = () => {

    const [experience, setExperience] =  useState('Learning')
    
    
        const experiences = {
          "Learning": "Throughout my career, I have embraced continuous learning, staying up-to-date with the latest technologies and frameworks like JavaScript, Node.js, Python, React, and MongoDB. I actively engage in online courses, tech forums, and industry events to sharpen my skills, especially in machine learning and RESTful API development. This approach helps me adapt to evolving trends and tackle diverse challenges in software development.",
          "Work/Projects": "I’ve worked on a wide range of projects, from building full-stack web applications using Node.js and React to integrating machine learning models in Python. I have experience with data-driven applications, REST API design, and large-scale database management with MongoDB. My projects often involve collaboration with cross-functional teams, and I strive to deliver solutions that are both scalable and user-friendly.",
          "Team": "Collaboration is at the heart of my work. I thrive in team environments, where I contribute to brainstorming sessions, code reviews, and paired programming. Whether working with designers, product managers, or other developers, I aim to foster open communication, ensuring everyone is aligned on project goals and outcomes. I also enjoy mentoring junior developers and sharing knowledge within the team.",
          "Process": "I follow agile methodologies to ensure projects are delivered efficiently and with a focus on quality. From sprint planning to iterative development, I value structured processes that provide clear objectives while allowing flexibility. I rely on version control systems, automated testing, and continuous integration to maintain code quality and ensure smooth deployments. Documentation and feedback loops are integral to refining both the process and the final product."
        }
      
      

    return (
        <div className="py-8">
            <div className="px-2 sm:px-5 md:px-10 lg:px-[20%] rounded">
                <div className="mb-6 pb-4 tech-border-bottom">
                    <h2 className="text-xl md:text-2xl font-bold glow-cyan font-mono tracking-widest">≈ EXPERIENCE</h2>
                </div>
                <div className="flex mt-5 gap-2 md:gap-4 overflow-x-auto pb-2 font-mono">
                    <ExperienceBox name={'Learning'} setExperience={setExperience} experience={experience} />
                    <ExperienceBox name={'Work/Projects'} setExperience={setExperience} experience={experience} />
                    <ExperienceBox name={'Team'} setExperience={setExperience} experience={experience} />
                    <ExperienceBox name={'Process'} setExperience={setExperience} experience={experience} />
                </div>
            </div>

            <div className="px-2 sm:px-5 md:px-10 lg:px-[20%] mb-20 rounded py-8 font-mono text-cyan-100 border-t-2 border-b-2 border-cyan-500 my-8">
                <p className="text-sm md:text-base leading-relaxed text-justify">
                    {experiences[experience]}
                </p>

               {/*  <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error alias placeat debitis esse, numquam temporibus, eaque sed, magni itaque porro veniam modi officia aut nemo corrupti quaerat culpa aspernatur! Nostrum.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error alias placeat debitis esse, numquam temporibus, eaque sed, magni itaque porro veniam modi officia aut nemo corrupti quaerat culpa aspernatur! Nostrum.
                </p> */}
            </div>
        </div>
    );
}

export default Experience;


function ExperienceBox({name, setExperience, experience}) {
    return(
        <div onClick={()=>{setExperience(name)}} className={`px-3 md:px-6 py-3 cursor-pointer transition text-sm md:text-base whitespace-nowrap ${name==experience?"border-b-2 border-cyan-400 text-cyan-300 glow-text":"text-cyan-500 hover:text-cyan-300"}`}>
            <p>{name}</p>
        </div>
    )
}
