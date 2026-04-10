import About from "@/components/about/About";
import SkillsTools from "@/components/skills_tools";
import Index from "@/components/hero/Index";
import Top from "@/components/nav/Top";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Project";
import Link from "next/link";
import Head from 'next/head'
import { motion } from "framer-motion";


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
      <div className="absolute w-full h-full left-0 bg-[url('/imgs/bg-icons.svg')]  bg-blend-multiply -z-10 bg-[#00000065] opacity-50 pixel-image bg-repeat bg-center ">
      </div>
      <Top/>
      <Index/>
    </div>
    
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="px-2  sm:px-5 md:px-10 lg:px-[20%]  md:border-t-2 border-b-2 border-cyan-500 bg-black bg-opacity-40">
      <About/>
    </motion.div>
    
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="border-y-2 border-cyan-500">
      <SkillsTools/>
    </motion.div>
    
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="px-2 pt-6 md:pt-0 sm:px-5 md:px-10 lg:px-[20%] border-b-2 border-cyan-500" id="experience">
      <Experience/> 
    </motion.div>

    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="px-2 pt-6 md:pt-0 sm:px-5 md:px-10 lg:px-[20%]" id="project">
      <Projects/>
    </motion.div>

    <footer className="bg-black border-t-2 border-cyan-500 p-8 mt-0 text-center text-cyan-100 font-mono">
      <p className="text-sm md:text-base">
        This is not the end of transmission, but the beginning of our journey together.
        <br />
        <Link href={'#contacts'} className="text-cyan-400 hover:text-cyan-200 transition">[INITIATE_CONTACT]</Link>
      </p>
    </footer>
 
  </div>
   );
}
 
export default index;

