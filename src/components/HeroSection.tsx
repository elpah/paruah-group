import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      <motion.div
        style={{
          y: y1,
          opacity,
        }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950 z-10" />
        <img
          src="/cover_image.webp"
          className="w-full h-full object-cover opacity-60 scale-105"
          alt="Modern Architecture"
        />
      </motion.div>

      <div className="relative z-20 mx-auto px-6 ">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <p className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Establishing Excellence
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight mb-8">
            Building Businesses <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-700">
              That Drive Growth.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
            A strategic holding company with interests in technology, real estate, and global
            advisory services, focused on creating long-term value for a new Africa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-8 py-4 bg-amber-500 text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Explore Portfolio{' '}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
            <button className="px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold rounded-full transition-all">
              Corporate Overview
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-amber-500 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
