import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-[48px] overflow-hidden shadow-2xl border border-emerald-500/20"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-[100px]" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-tr-[100px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 p-6 md:p-12 lg:p-20">
            <div className="space-y-10">
              <div>
                <span className=" text-[8px] md:text-xs  px-4 py-1.5 bg-emerald-950/50 border border-emerald-500/30 backdrop-blur-sm rounded-full mb-6 font-bold  uppercase tracking-widest text-emerald-400">
                  Get In Touch
                </span>
                {/* </div> */}
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 mt-4 leading-tight">
                  Ready to build the future with us?
                </h2>
                <p className="text-md md:text-lg text-slate-300">
                  Connect with us to explore opportunities for partnership and collaboration.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    label: 'Email Address',
                    value: 'info@elpagroup.com',
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    label: 'Phone Number',
                    value: '+233 XXX XXX XXX',
                  },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    label: 'Location',
                    value: 'Ghana, West Africa',
                  },
                ].map((contact, i) => (
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
                    className="flex items-center gap-3 md:gap-5 text-slate-300 group"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 backdrop-blur-sm rounded-md flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-xs md:text-md uppercase font-bold text-slate-500 mb-1">
                        {contact.label}
                      </div>
                      <div className="text-xs md:text-lg font-semibold text-white">
                        {contact.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              className="bg-slate-950 p-6 md:p-10 rounded-3xl shadow-xl border border-slate-800"
            >
              <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4 ">
                  <div className="space-y-2">
                    <label className="text-xs font-bold mb-2 uppercase text-slate-500">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full md-4 bg-slate-900 border border-slate-700 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-100"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-900 border border-slate-700 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-100"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-900 border border-slate-700 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-slate-100"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-slate-900 border border-slate-700 px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-slate-100"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 font-bold py-4 rounded-xl hover:from-amber-500 hover:to-amber-600 transition-all shadow-lg hover:shadow-emerald-500/50">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
