import { motion } from 'framer-motion';
import { Globe2, Target } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section
      id="vision"
      className="container mx-auto px-6 relative max-w-7xl py-24 lg:py-32 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute top-20 right-0 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] bg-gradient-to-bl from-amber-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >
            <div className="relative">
              <div className="hidden sm:block absolute -top-10 right-0 p-8 text-amber-500/10">
                <Target size={120} />
              </div>

              <div className="inline-block px-4 py-1.5 bg-slate-900/50 border border-amber-500/30 backdrop-blur-sm rounded-full">
                <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-amber-400">
                  The Outlook
                </span>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                To be a{' '}
                <span className="font-bold italic bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
                  trusted African group
                </span>{' '}
                recognized for innovation, integrity, and sustainable value
                creation.
              </h2>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:pt-12 relative"
          >
            <div className="relative">
              <div className="hidden sm:block absolute -top-10 right-0 p-8 text-emerald-500/10">
                <Globe2 size={120} />
              </div>

              <div className="inline-block px-4 py-1.5 bg-slate-900/50 border border-emerald-500/30 backdrop-blur-sm rounded-full">
                <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-emerald-400">
                  The Purpose
                </span>
              </div>

              <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
                To build and manage diversified businesses that deliver
                professional services, leverage innovation, and contribute
                positively to economic development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;