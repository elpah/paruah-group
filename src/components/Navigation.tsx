import { NAV_LINKS } from '@/data/navlinks.data';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    {
      label: 'Home',
      href: '#',
    },
    ...NAV_LINKS,
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (!mobileMenuOpen) {
        setScrolled(window.scrollY > 20);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-500',
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl m-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-700 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
            <span className="text-slate-950 font-black text-xl">P</span>
          </div>

          <div className="flex flex-col">
            <span className="text-white font-bold tracking-widest text-lg leading-tight">
              PARUAH
            </span>
            <span className="text-amber-500/80 text-[10px] uppercase tracking-[0.3em] font-medium">
              Group
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={e => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-slate-300 hover:text-white text-sm font-medium tracking-wide transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full text-sm font-semibold transition-all hover:border-amber-500/50">
            Corporate Portal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative z-[60]"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed left-0 right-0 h-screen bottom-0 top-20 z-40 bg-slate-950 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {[...NAV_LINKS].map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={e => {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="text-3xl font-bold text-white hover:text-amber-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
