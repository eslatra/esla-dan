const SkillsTools = ({skill, setSkill}) => {

    function onclick(params) {
        setSkill(params)
    }
    return (  
        <div className="relative h-fit py-10 pb-0 px-2 sm:px-5 md:px-10 lg:px-[20%]">
            <div className="mb-2 pb-2 tech-border-bottom">
                <h2 className="text-xl md:text-2xl font-bold glow-cyan font-mono tracking-widest">≈ SKILLS & TOOLS</h2>
            </div>
            <div className="relative md:w-[105%]">

          
            <div className="box  md:-ms-12 overflow-x-scroll  whitespace-nowrap scrollbar-hide h-fit ">
                
                <SkillsToolsBox skill={skill} name={"JavaScript"} onclick={onclick} filename={'Js.svg'} custom={'-left-14'}/>
                <SkillsToolsBox skill={skill} name={"Node.js"} onclick={onclick} filename={'Nodejs.svg'}/>
                <SkillsToolsBox skill={skill} name={"Python"} onclick={onclick} filename={'Python.svg'}/>
                <SkillsToolsBox skill={skill} name={"React"} onclick={onclick} filename={'React.svg'}/>
                <SkillsToolsBox skill={skill} name={"MongoDB"} onclick={onclick} filename={'Mongodb.svg'}/>
                <SkillsToolsBox skill={skill} name={"Machine Learning"} onclick={onclick} filename={'Machine-learning.svg'}/>
                <SkillsToolsBox skill={skill} name={"REST API"} onclick={onclick} filename={'Backend-development.svg'} custom={'-right-14'}/>

            </div>
             
            <div className="hidden md:block w-10 h-full bg-gradient-to-r from-[#000000] absolute top-0 md:-left-[60px] shadow-black"></div>
            <div className="hidden md:block w-10 h-full bg-gradient-to-l from-[#000000] absolute top-0 md:-right-[10px] shadow-black"></div>
 </div>
        </div>
    );
}
 
export default SkillsTools;

const SkillsToolsBox = ({filename, custom, onclick, name, skill}) => {

    return ( 
        <div onClick={()=>{onclick(name)}} style={{...custom}} className={`w-3/12 sm:w-3/12 md:w-2/12 lg:w-2/12 transition-all aspect-square mx-2 p-4 flex justify-center items-center cursor-pointer ${name==skill?"border-2 border-cyan-400 bg-cyan-900 bg-opacity-30 rounded p-1 glow-text":"border border-cyan-600 hover:border-cyan-400 bg-cyan-900 bg-opacity-10"} md:${custom? custom: ''}`}>
            <img src={`./imgs/skills_tools/${filename}`} width={"80%"}  alt="" className="hover:scale-110 transition"   />
        </div>
     );
}
