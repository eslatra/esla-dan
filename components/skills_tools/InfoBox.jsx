const InfoBox = ({skill, setSkill, skills}) => {
    console.log(skill)
    return ( 
        <div className="py-5 ">
            <h4 className="mb-2 text-cyan-300">{skill}</h4>
            <p className="font-serif" >
            {skills[skill]}
            </p>
        </div>
     );
}
 
export default InfoBox;