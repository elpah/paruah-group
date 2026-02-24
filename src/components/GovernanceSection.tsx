import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Target, Users } from 'lucide-react';

const GovernanceSection = () => {
  return (
    <section id="governance" className="py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-block px-4 py-1  bg-amber-500/10 border border-amber-500/30 rounded-full mb-4 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Corporate Standards
            </span>
          </div>
          <h3 className="text-4xl font-bold mb-8">Governance & Strategy</h3>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            Paruah Group operates under a structured governance framework that ensures strategic
            alignment, financial accountability, and risk management. We emphasize compliance,
            ethical conduct, and responsible leadership across all subsidiaries.
          </p>

          <div className="space-y-4">
            {[
              'Centralized strategic planning and oversight',
              'Independent subsidiary management structures',
              'Strong financial controls and reporting',
              'Focus on scalable and sustainable growth',
              'Commitment to regulatory compliance',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 w-5 h-5 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <ChevronRight className="w-3 h-3 text-slate-950" />
                </div>
                <span className="text-slate-500 font-medium leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-emerald-500 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white">Structured Governance</h4>
            </div>
            <p className="text-sm text-slate-400">
              Ensuring high ethical conduct and accountability across all business units.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 md:translate-x-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white">Strategic Alignment</h4>
            </div>
            <p className="text-sm text-slate-400">
              Aligning all operations with the group's long-term vision of sustainable growth.
            </p>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-800 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-white">Operational Excellence</h4>
            </div>
            <p className="text-sm text-slate-400">
              Independent management teams empowered to deliver market-leading solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
