import { ABOUT_DATA } from '@/data/about.data';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className=" relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl md:py-32 ">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div className="inline-block mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[8px] md:text-xs font-bold uppercase tracking-[0.3em] ">
                Corporate Overview
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight leading-[1.1]">
              About <span className="text-amber-400">Paruah Group</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                ELPA Group was founded to develop, own, and manage a portfolio of businesses in
                high-growth sectors of the economy. Through disciplined leadership, strong
                governance, and operational excellence, the Group delivers integrated solutions that
                meet evolving market needs.
              </p>
              <p>
                Our subsidiaries operate independently with dedicated management teams while
                benefiting from centralized strategic oversight, financial discipline, and shared
                corporate standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="grid md:grid-cols-2 gap-6"
          >
            {ABOUT_DATA.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700/60 hover:border-emerald-500/50 hover:shadow-l hover:shadow-emerald-500/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-slate-950 rounded-xl shadow-sm flex items-center justify-center mb-4 text-emerald-400 group-hover:text-amber-400 group-hover:shadow-md transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">
                    {item.label}
                  </div>

                  <div className="text-base font-bold text-slate-200 leading-snug">
                    {item.value}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
