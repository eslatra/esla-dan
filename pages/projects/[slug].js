import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/projectsData";
import Footer from "@/components/footer/Footer";
import Reveal from "@/components/ui/Reveal";

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <div className="min-h-screen bg-[#080B14] text-white flex items-center justify-center">
        <Reveal className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link href="/#work" className="text-blue-400 hover:underline">
            Return to selected work
          </Link>
        </Reveal>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.name} — Esla Dan</title>
        <meta name="description" content={project.shortDescription} />
      </Head>

      <div className="min-h-screen bg-[#080B14] text-white selection:bg-blue-600 selection:text-white">

        {/* Top Bar Navigation */}
        <header className="sticky top-0 z-50 bg-[#080B14]/75 backdrop-blur-xl border-b border-white/[0.08]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition">
              esla dan<span className="text-blue-500">.</span>
            </Link>

            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to work
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-20">

          {/* Project Header */}
          <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-2xl shadow-black/20 space-y-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#8EAFFF] uppercase">
              Project Overview / {project.category}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {project.name}
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-slate-200">
              {project.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="pt-2">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition shadow-md shadow-blue-600/20"
              >
                {project.externalLinkText}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Case Study Callout Box */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 sm:p-5 text-xs text-slate-300 leading-relaxed mt-6 backdrop-blur-md">
              <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Case Study Overview
              </span>
              {project.caseStudyDraft}
            </div>
          </Reveal>

          {/* Large Hero Mockup Display */}
          <Reveal className="space-y-3">
            <div
              className="relative w-full rounded-3xl overflow-hidden p-3 sm:p-6 md:p-8 shadow-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl"
            >
              <div
                className="relative w-full aspect-[16/9] max-h-[640px] rounded-xl overflow-hidden shadow-2xl"
                style={{ backgroundColor: project.bgPattern || "#D5DCDF" }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-xs text-slate-500 italic">
              Production portfolio preview · Interface snapshot for {project.name}.
            </p>
          </Reveal>

          {/* Section 01: Context & Solution */}
          <Reveal className="border-t border-[#29344C]/60 pt-12 space-y-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#8EAFFF] uppercase">
              01 / Context &amp; Solution
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {/* Problem */}
              <div className="space-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 sm:p-8 backdrop-blur-md">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  The problem
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  Context: Identifying key market gaps and user friction points.
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 sm:p-8 backdrop-blur-md">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  The solution
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  Platform live source: {project.website}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 02: Engineering Detail */}
          <Reveal className="border-t border-white/[0.08] pt-12 space-y-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-widest text-[#8EAFFF] uppercase">
                02 / Engineering Detail
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                The work behind the interface.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* My Contribution Card */}
              <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg shadow-black/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    My contribution
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 bg-white/[0.05] border border-white/10 px-2 py-1 rounded-full">
                    Role &amp; Ownership
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.contribution}
                </p>
              </div>

              {/* Technical Implementation Card */}
              <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg shadow-black/30">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Technical implementation
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-200 bg-blue-400/10 border border-blue-300/15 px-2 py-1 rounded-full">
                    Stack &amp; Architecture
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.technicalImplementation}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-white/[0.05] text-slate-300 border border-white/10 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 03: Decisions & Outcomes */}
          <Reveal className="border-t border-white/[0.08] pt-12 space-y-8">
            <p className="text-xs font-semibold tracking-widest text-[#8EAFFF] uppercase">
              03 / Decisions &amp; Outcomes
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {/* Challenges and Decisions */}
              <div className="space-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 sm:p-8 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Challenges and decisions
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.challengesDecisions}
                </p>
              </div>

              {/* Results */}
              <div className="space-y-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 sm:p-8 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Results
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 pt-4 border-t border-white/[0.08]">
              Reliable delivery metrics and engineering architectures verified in production environments.
            </p>
          </Reveal>

          {/* Bottom Call to Action Card */}
          <Reveal className="bg-white/[0.04] backdrop-blur-xl border border-blue-300/15 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl shadow-black/40">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have something similar in mind?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Let&apos;s talk about the problem you&apos;re trying to solve and turn it into a dependable solution.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="mailto:esladan4@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-lg transition shadow-md shadow-blue-600/30"
              >
                Let&apos;s talk
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/#work"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to work
              </Link>
            </div>
          </Reveal>

        </main>

        {/* Footer */}
        <Footer />


      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((p) => ({
    params: { slug: p.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  return {
    props: {
      project: project || null,
    },
  };
}
