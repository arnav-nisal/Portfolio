import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  User, 
  FolderGit2, 
  Code2, 
  Briefcase, 
  Mail,
  Copy,
  Check
} from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'About', href: '#about', id: 'about', icon: User },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FolderGit2 },
    { name: 'Skills', href: '#skills', id: 'skills', icon: Code2 },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'glass-nav border-b border-white/[0.08] py-3 shadow-lg shadow-black/20' 
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Personal Brand */}
            <a 
              href="#" 
              className="flex items-center gap-2 group interactive-tap py-1"
              aria-label="Back to top"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-white group-hover:border-zinc-500 transition-colors">
                AN
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                  Arnav Nisal
                </span>
                <span className="text-zinc-600 hidden xs:inline">/</span>
                <span className="text-xs text-zinc-400 font-mono hidden xs:inline">
                  Portfolio
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 ${
                      isActive 
                        ? 'text-white font-medium bg-zinc-800 shadow-sm' 
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-medium transition-all shadow-sm flex items-center gap-1.5 interactive-tap"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle (Generous 44x44 touch target) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white interactive-tap active:scale-95"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-drawer animate-drawer border-t border-white/[0.06] mt-3 px-5 py-5 space-y-4 shadow-2xl">
            
            {/* Quick Navigation Links */}
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-3 pb-1">
                Navigation
              </span>
              {navLinks.map((link, idx) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ animationDelay: `${idx * 40}ms` }}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all interactive-tap ${
                      isActive 
                        ? 'bg-zinc-800/80 text-white font-medium border border-white/10' 
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-blue-400' : 'text-zinc-400'}`} />
                      <span>{link.name}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="pt-3 border-t border-white/[0.08] space-y-2.5">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-xs flex items-center justify-center gap-2 interactive-tap"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="py-2.5 px-3.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white text-xs font-mono flex items-center justify-center gap-1.5 interactive-tap"
                  title="Copy email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social links row */}
              <div className="flex items-center justify-between pt-1 px-1 text-xs font-mono text-zinc-500">
                <a 
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors py-1 flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span>•</span>
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors py-1 flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span>•</span>
                <span className="text-zinc-400">{personalInfo.location}</span>
              </div>
            </div>

          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu when open */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden transition-opacity duration-200"
          aria-hidden="true"
        />
      )}
    </>
  );
}
