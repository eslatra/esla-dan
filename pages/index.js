import About from "@/components/about/About";
import SkillsTools from "@/components/skills_tools";
import Index from "@/components/hero/Index";
import Top from "@/components/nav/Top";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Project";
import Link from "next/link";
import Head from 'next/head'


const index = () => { 
  
  return ( 
    <div>
       <Head>
        <title>Esla Dan.</title>
        <meta property="og:description" content="The awsome developer" key="title" />
        <meta property="og:image" content="https://esladan.eslatra.com/imgs/me.svg" key="title" />
        <link rel="icon" href="./favicon.ico" sizes="any" />

      </Head>

    <div className="px-2 sm:px-5 md:px-10 lg:px-[20%] relative">
      <div className="absolute w-full h-full left-0  bg-[url('/imgs/bg-icons.svg')] bg-blend-multiply  -z-10 bg-[#00000065]"></div>
      <Top/>
      <Index/>
    </div>
    <div className="px-2 sm:px-5 md:px-10 lg:px-[20%] rounded bg-[#2b2b2b4d] ">
    <About/>
  </div>
<SkillsTools/>
  <div className="" id="experience">
  <Experience/> 
  </div>

  <div className="project" id="project">
  <Projects/>
  </div>

  <footer className="bg-gray-300 p-8 mt-10 text-center text-black rounded-tl-xl rounded-tr-xl">
    <p>This is not the end but the beginning of our Journey  together. 
Make sure you <Link href={'#contacts'} className="text-blue-600">contact me</Link>    </p>
  </footer>
 
  </div>
   );
}
 
export default index;

