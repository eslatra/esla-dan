import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-16 lg:pb-20 border-b border-[#29344C]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.9 }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3.5 py-2 text-[11px] font-semibold tracking-[0.16em] text-blue-200 uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Software Engineer &amp; Product Builder
              </p>

              <h1 className="max-w-4xl text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem] font-extrabold text-white tracking-[-0.055em] leading-[1.02]">
                Understanding needs
                <br />
                <span className="text-blue-300">
                  Building solutions.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              I&apos;m Esla Dankuje. I design and build web, mobile, and AI-powered
              solutions, combining engineering, creativity and business thinking
              to turn complex ideas into useful digital products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Explore my work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.03] hover:bg-white/[0.07] text-white border border-white/10 hover:border-white/25 font-medium text-sm rounded-xl transition"
              >
                Let&apos;s talk
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Sub-tags */}
            <p className="text-xs text-slate-400 font-medium pt-1">
              Full-stack development · AI · Product engineering
            </p>
          </motion.div>

          {/* Right Image Card Column */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.9, delay: shouldReduceMotion ? 0 : 0.25 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[430px] aspect-[0.92] rounded-[2rem] p-2 border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/40">
              <div className="relative h-full w-full rounded-[1.55rem] overflow-hidden bg-[#111C20]">
                <Image
                  src="/imgs/esla.png"
                  alt="Esla Dankuje Josiah"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between gap-3 border-t border-white/10 bg-[#080B14]/70 p-5 backdrop-blur-xl">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] text-blue-200 uppercase">The person behind the products</p>
                    <p className="mt-1 text-lg font-bold tracking-tight text-white">Esla Dankuje Josiah</p>
                  </div>
                  <span className="mb-1 shrink-0 rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[10px] font-medium text-slate-100 backdrop-blur-md">
                    Engineer &amp; builder
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Bar */}
        <Reveal className="mt-16 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <p className="tracking-widest uppercase text-slate-500">
            From the first idea to the final interaction
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/esladan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition"
            >
              GitHub
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/esladan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition"
            >
              LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
