import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/projectsData";
import Reveal from "@/components/ui/Reveal";

const SelectedWork = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -580 : 580;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="py-24 border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <Reveal className="space-y-3 mb-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#8EAFFF] uppercase">
            01 / Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ideas turned into experiences.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A selection of products across technology, business, community, and everyday life.
          </p>
        </Reveal>

        {/* Horizontal Scrollable Container */}
        <Reveal className="mb-6">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-[310px] sm:w-[460px] md:w-[540px] flex-shrink-0 snap-start bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-blue-400/40 transition-all duration-300 group shadow-xl shadow-black/30 hover:-translate-y-1"
              >
                <div>
                {/* Image Banner */}
                <div
                  className="relative w-full h-56 sm:h-72 p-4 flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: project.bgPattern || "#D5DCDF" }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition duration-500"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-[11px] font-semibold tracking-wider text-[#8EAFFF] uppercase">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.name}
                  </h3>

                  <p className="text-sm font-medium text-slate-200">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="pt-1">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition"
                    >
                      {project.externalLinkText}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0D1220] hover:bg-[#151F38] border border-[#29344C] hover:border-slate-500 text-white text-xs sm:text-sm font-medium rounded-lg transition"
                    >
                      Project overview
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                </div>

                {/* Card Footer with Index & Arrow Controls */}
                <div className="px-6 sm:px-8 py-4 border-t border-white/[0.07] flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono font-medium">
                  {project.id} / 06
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scroll("left")}
                    className="p-1.5 rounded-md hover:bg-[#151F38] text-slate-400 hover:text-white transition border border-transparent hover:border-[#29344C]"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="p-1.5 rounded-md hover:bg-[#151F38] text-slate-400 hover:text-white transition border border-transparent hover:border-[#29344C]"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Carousel Bottom Info Bar */}
        <Reveal className="mt-4 flex items-center justify-between text-xs text-slate-500 font-medium" delay={0.1}>
          <div className="inline-flex items-center gap-1.5">
            <span className="hidden sm:inline">Scroll horizontally to explore</span>
            <span className="sm:hidden">Swipe to explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
          <span>6 projects</span>
        </Reveal>

      </div>
    </section>
  );
};

export default SelectedWork;
