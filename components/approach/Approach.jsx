import Reveal from "@/components/ui/Reveal";

const Approach = () => {
  return (
    <section className="py-24 border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <Reveal className="space-y-3">
          <p className="text-xs font-semibold tracking-widest text-[#8EAFFF] uppercase">
            03 / My Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I approach building products.
          </h2>
        </Reveal>

        {/* 3 Principles Grid */}
        <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          
          {/* Principle 1 */}
          <div className="space-y-4 border-t border-blue-400/30 pt-6">
            <span className="text-xs font-mono font-bold text-blue-300">01</span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Understand before building
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every good product starts with understanding the problem. I focus on requirements,
              user needs and business objectives before deciding how to implement a solution.
            </p>
          </div>
          {/* Principle 2 */}
          <div className="space-y-4 border-t border-cyan-400/30 pt-6">
            <span className="text-xs font-mono font-bold text-cyan-300">02</span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Engineer for reliability
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Good software should do more than work. It should be maintainable, scalable where
              necessary, secure and dependable.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="space-y-4 border-t border-violet-400/30 pt-6">
            <span className="text-xs font-mono font-bold text-violet-300">03</span>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Build, learn and improve
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Product development is iterative. I believe in testing ideas, learning from
              feedback and continuously improving the experience.
            </p>
          </div>

        </Reveal>

      </div>
    </section>
  );
};

export default Approach;
