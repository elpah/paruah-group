import { VALUES } from '@/data/values.data';
import { motion } from 'framer-motion';

const ValueSection = () => {
  return (
    <section id="values" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 bg-slate-800 border border-emerald-500/30 rounded-full mb-6">
            <span className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-emerald-400">
              Our Ethics
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">Core Values</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {VALUES.map((value, i) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 text-slate-950 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-bold text-lg mb-3 text-center text-white">{value.title}</h3>

                <p className="text-sm text-slate-400 leading-relaxed text-center">{value.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
