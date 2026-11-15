import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Large Connect Card */}
        <Reveal className="relative overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-blue-300/20 rounded-[1.75rem] p-8 sm:p-12 lg:p-14 space-y-10 shadow-2xl shadow-black/40">
          <div className="relative space-y-10">

            <p className="text-xs font-semibold tracking-widest text-[#8EAFFF] uppercase">
              04 / Let&apos;s Connect
            </p>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Have an idea?
                  <br />
                  Let&apos;s make it useful.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Building a new product, solving a tricky technical problem, or exploring an
                  opportunity? I&apos;d love to hear what you&apos;re working on.
                </p>
              </div>

              <div>
                <a
                  href="mailto:esladan4@gmail.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg transition shadow-md shadow-blue-600/30 whitespace-nowrap"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-[#29344C]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-sm text-slate-300">
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="mailto:esladan4@gmail.com"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  esladan4@gmail.com
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                {/* <span className="text-slate-400">+234 915 475 4448</span> */}
              </div>

              <div className="flex items-center gap-6 text-slate-400">
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
