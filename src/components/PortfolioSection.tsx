import { BUSINESS_UNITS } from '@/data/business.data';
import { cn } from '@/lib/utils';
import { BusinessUnit } from '@/types/business.type';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const BusinessCard = ({ business }: { business: BusinessUnit }) => {
  const Icon = business.icon;
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -5 },
      }}
      className="relative bg-slate-900 border border-white/5 rounded-3xl overflow-hidden flex flex-col shadow-lg"
    >
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
        className={`
          absolute inset-0 rounded-3xl
          bg-gradient-to-br ${business.gradient}
          pointer-events-none
          z-0
        `}
      />
      <div className="relative z-10 p-6 flex-1 flex flex-col">
        <motion.div
          variants={{
            rest: { scale: 1, boxShadow: '0 1px 2px rgba(0,0,0,0.1)' },
            hover: { scale: 1.1, boxShadow: '0 10px 30px rgba(16,185,129,0.3)' },
          }}
          transition={{ duration: 0.3 }}
          className={`w-12 h-12 ${business.iconBg} rounded-lg flex items-center justify-center mb-4 text-slate-950`}
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-2">{business.name}</h3>
        <p className="text-amber-500/80 text-xs font-semibold uppercase tracking-wider mb-4">
          {business.title}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{business.description}</p>

        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
            Key Services
          </div>
          {business.features.map((service, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div
                className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${business.iconBg}`}
              >
                <CheckCircle2 className="w-3 h-3 text-slate-950" />
              </div>
              <span className="text-sm font-medium text-slate-300">{service}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800">
          <button className="flex items-center gap-2 text-white font-bold group/btn text-sm">
            Learn More{' '}
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <motion.div
        variants={{
          rest: { width: 0 },
          hover: { width: '100%' },
        }}
        transition={{ duration: 0.5 }}
        className={cn('absolute bottom-0 left-0 h-1 bg-gradient-to-r', business.color)}
      />
    </motion.div>
  );
};
const PortfolioSection = () => {
  return (
    <section id="portfolio" className=" bg-slate-900/50 relative">
      <div className="container mx-auto px-6 max-w-7xl py-32">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6 shadow-sm">
            <span className="text-amber-500 font-bold uppercase tracking-widest  text-[8px] md:text-xs  block">
              Our Subsidiaries
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Diversified Business Portfolio
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400">
            Explore our independent subsidiaries that deliver specialized services under the PARUAH
            Group standard of excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_UNITS.map(biz => (
            <BusinessCard key={biz.id} business={biz} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
