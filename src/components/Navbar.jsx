import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled 
        ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-[#222227] py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Name */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors"
          >
            <span className="font-semibold text-base tracking-tight text-white">
              Arnav Nisal
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs text-zinc-400 font-mono">
              Portfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-3.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-1.5"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-md text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e11] border-b border-[#222227] px-6 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-zinc-400 hover:text-white py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-800">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-200 font-mono"
            >
              <span>{personalInfo.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
