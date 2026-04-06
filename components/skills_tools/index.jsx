import React, { useState } from 'react'
import SkillsTools from './SkillsTools'
import InfoBox from './InfoBox'

export default function Index() {

    const [skill, setSkill] =  useState('JavaScript')

    const skills = {
        "JavaScript": "I use JavaScript to breathe life into websites and applications, making them dynamic and interactive. Whether it’s handling user input, animations, or real-time updates, I ensure users get a seamless experience.",
        "Node.js": "With Node.js, I build the backend infrastructure that powers applications, ensuring they’re scalable and efficient. It allows me to handle server-side operations, database interactions, and APIs in real-time.",
        "Python": "Python is my go-to for developing powerful applications and automation scripts. I also use it to dive into data science and machine learning, where I build models to help applications make smart decisions.",
        "React": "I use React to create fast, responsive user interfaces that are not only functional but also visually appealing. Its component-based structure lets me reuse code and deliver consistent, high-quality UIs.",
        "MongoDB": "When working with large and flexible data sets, I rely on MongoDB to handle complex, unstructured information. It helps me design systems that scale easily and meet the demands of modern applications.",
        "Machine Learning": "I apply machine learning to allow applications to learn from data and make intelligent predictions or decisions, helping systems evolve and improve over time.",
        "REST API": "I design and implement REST APIs to ensure different systems can communicate seamlessly. These APIs form the backbone of smooth data exchange between web and mobile applications."
    }


  return (
    <div>
  <div className="px-2 pt-4 md:pt-0 sm:px-5 md:px-10 lg:px-[20%] mt-10  " id="skill_and_tools">
  <SkillsTools setSkill={setSkill} skill={skill}/>

  </div>
  <div className="px-2 sm:px-5 md:px-10 lg:px-[20%] mb-20 rounded bg-[#2b2b2b4d59] text-cyan-100">
    <InfoBox setSkill={setSkill} skill={skill} skills={skills}/>
  </div>
    </div>
  )
}
