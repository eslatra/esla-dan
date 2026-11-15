import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0E1A]/80 backdrop-blur-md border-b border-[#29344C]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition">
          esla dan<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#work"
            className="text-sm font-medium text-slate-300 hover:text-white transition"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium text-slate-300 hover:text-white transition"
          >
            About
          </Link>
          <Link
            href="/#expertise"
            className="text-sm font-medium text-slate-300 hover:text-white transition"
          >
            Expertise
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition shadow-sm shadow-blue-500/20"
          >
            Let&apos;s talk
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-md transition"
          >
            Let&apos;s talk
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1220] border-b border-[#29344C] px-6 py-5 space-y-4">
          <Link
            href="/#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-blue-400 py-1"
          >
            Work
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-blue-400 py-1"
          >
            About
          </Link>
          <Link
            href="/#expertise"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-200 hover:text-blue-400 py-1"
          >
            Expertise
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-1.5 text-base font-medium text-blue-400 hover:text-blue-300 py-1"
          >
            Contact / Let&apos;s talk
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
