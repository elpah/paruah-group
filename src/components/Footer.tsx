import { NAV_LINKS } from '@/data/navlinks.data';
import { ExternalLink, Globe2 } from 'lucide-react';

const subsidiaries = [
  { label: 'PARUAH Systems', href: '#' },
  { label: 'ELPA Travel Consult', href: '#' },
  { label: 'EL-Gate Properties', href: '#' },
];

const company = [...NAV_LINKS, { label: 'Governance', href: '#' }, { label: 'Careers', href: '#' }];

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

const footerSections = [
  { title: 'Subsidiaries', links: subsidiaries },
  { title: 'Company', links: company },
  { title: 'Legal', links: legal },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 text-sm text-slate-500">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-slate-950 font-black text-sm">P</span>
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold tracking-widest">PARUAH</span>
                <span className="text-amber-500/80 text-[8px] uppercase tracking-[0.3em] font-medium">
                  Group
                </span>
              </div>
            </a>

            <p className="max-w-xs leading-relaxed">
              Building professionally managed businesses that create long-term value for clients,
              partners, and communities.
            </p>
          </div>

          {/* Navigation sections */}
          {footerSections.map(section => (
            <nav key={section.title} aria-labelledby={`${section.title}-heading`}>
              <h2
                id={`${section.title}-heading`}
                className="text-white font-bold mb-6 text-sm uppercase tracking-widest"
              >
                {section.title}
              </h2>

              <ul className="space-y-3">
                {section.links.map(link => (
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
                      className="hover:text-amber-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <small className="text-slate-600">
            &copy; {new Date().getFullYear()} PARUAH Group. All rights reserved.
          </small>

          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="External link"
              className="text-slate-600 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
            </a>

            <a
              href="#"
              aria-label="Website"
              className="text-slate-600 hover:text-white transition-colors"
            >
              <Globe2 size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
