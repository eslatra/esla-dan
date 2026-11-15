import { ArrowUp, ArrowUpRight } from "lucide-react";
import Script from "next/script";
import Reveal from "@/components/ui/Reveal";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#0A0E1A]">
      <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-8 text-xs text-slate-400">

        {/* Left Branding */}
        <div className="space-y-1">
          <p className="font-bold text-white text-sm">Esla Dankuje</p>
          <p className="text-slate-400">Built with intention. Always evolving.</p>
          <p className="text-slate-500 pt-1">© 2026 Esla Dankuje</p>
        </div>

        {/* Right Links & Back to Top */}
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
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-white transition text-slate-300"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </Reveal>
      <Script async src="https://www.googletagmanager.com/gtm.js?id=GTM-WM8XG6TW" />
      <Script id="gtm-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>
    </footer>
  );
};

export default Footer;
