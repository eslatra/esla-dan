import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const AboutExpertise = () => {
  return (
    <section id="about" className="py-24 border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        
        {/* Top 2-Column Intro */}
        <Reveal>
          <p className="text-xs font-semibold tracking-widest text-[#8EAFFF] uppercase mb-4">
            02 / About &amp; Expertise
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                An engineer&apos;s mindset.
                <br />
                A builder&apos;s curiosity.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I&apos;m Esla Dankuje Josiah, a software engineer and technology entrepreneur
                working across frontend, backend, mobile and AI.
              </p>
              <p>
                I enjoy turning complex ideas into practical digital products, combining thoughtful
                interfaces with reliable systems underneath.
              </p>
              <p>
                My work also spans data analysis, Shopify integrations, payment systems and
                multimedia production. Beyond writing code, I&apos;m interested in understanding the
                problems behind products and building solutions that deliver meaningful value.
              </p>

              <div className="pt-2">
                <a
                  href="mailto:esladan4@gmail.com?subject=Resume%20Request%20-%20Esla%20Dankuje"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#101728] hover:bg-[#151F38] border border-[#29344C] hover:border-slate-500 text-white text-xs sm:text-sm font-medium rounded-lg transition"
                >
                  Request résumé
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 3 Pillars / Expertise Cards */}
        <Reveal id="expertise" className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1 */}
            <div className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-6 sm:p-8 space-y-5 hover:border-blue-400/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/15 bg-blue-400/10 text-xs font-mono font-bold text-blue-200">01</span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Full-stack Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Frontend development, backend architecture, APIs and database-driven applications.
              </p>
              <div className="pt-4 border-t border-white/[0.08] space-y-1 text-xs font-medium text-slate-300">
                <p>JavaScript · React · Node.js</p>
                <p>Python · MongoDB · REST APIs</p>
              </div>

            </div>

            {/* Pillar 2 */}
            <div className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-6 sm:p-8 space-y-5 hover:border-cyan-300/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-400/10 text-xs font-mono font-bold text-cyan-200">02</span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                AI &amp; Intelligent Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                AI-powered applications, intelligent workflows, machine learning integrations and data analytics.
              </p>
              <div className="pt-4 border-t border-white/[0.08] space-y-1 text-xs font-medium text-slate-300">
                <p>Python · Machine learning</p>
                <p>Data analysis</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group relative overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-6 sm:p-8 space-y-5 hover:border-violet-300/30 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-400/10 text-xs font-mono font-bold text-violet-200">03</span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Commerce &amp; Digital Experiences
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                E-commerce development, Shopify applications, payment integrations and multimedia production.
              </p>
              <div className="pt-4 border-t border-white/[0.08] space-y-1 text-xs font-medium text-slate-300">
                <p>Shopify · Payment integrations</p>
                <p>Third-party integrations</p>
              </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default AboutExpertise;
