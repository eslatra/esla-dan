import Head from "next/head";
import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import SelectedWork from "@/components/projects/SelectedWork";
import AboutExpertise from "@/components/about/AboutExpertise";
import Approach from "@/components/approach/Approach";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Esla Dan — Software Engineer &amp; Product Builder</title>
        <meta
          name="description"
          content="Portfolio of Esla Dankuje Josiah. I design and build web, mobile, and AI-powered solutions, combining engineering, creativity and business thinking to turn complex ideas into useful digital products."
        />
        <meta property="og:title" content="Esla Dan — Software Engineer & Product Builder" />
        <meta
          property="og:description"
          content="Thoughtful code. Meaningful products. Explore software engineering, AI, and digital solutions."
        />
        <meta property="og:image" content="/imgs/esla.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen overflow-hidden bg-[#080B14] text-slate-100 selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <SelectedWork />
          <AboutExpertise />
          <Approach />
          <Contact />
        </main>
        <Footer />
      </div>


    </>
  );
}
