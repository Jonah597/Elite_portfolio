import { motion } from 'framer-motion';
import { Globe, Award, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#030303]">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Glassmorphic Identity Card */}
          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-[40px] p-2 bg-white/5 border border-white/10 backdrop-blur-xl group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Inner Container */}
            <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center">
              {/* Gradient Aura */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-amber-500/20 group-hover:scale-110 transition-transform duration-700" />
              
              {/* Decorative Orbs */}
              <motion.div
                className="absolute top-0 right-0 w-48 h-48 bg-violet-500/20 rounded-full blur-3xl mix-blend-screen"
                animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl mix-blend-screen"
                animate={{ scale: [1.2, 1, 1.2], x: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center p-8">
                <motion.div
                  className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-violet-400 to-amber-300 mb-6 relative"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Jonathan Ablorh</h3>
                <p className="text-violet-400 text-sm uppercase tracking-widest font-medium mb-1">Elite Web Designer</p>
                <p className="text-white/50 text-sm">Based in Ghana</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="text-xs uppercase tracking-widest text-violet-300 font-medium">The Architect</span>
            </div>

            <h2 className="text-[3rem] md:text-[4rem] font-bold text-white mb-8 leading-[1.1] tracking-tighter">
              Young Creative Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-200">Globally</span>
            </h2>

            <p className="text-xl text-white/60 mb-6 leading-relaxed font-light">
              I am a young, elite web designer and creative developer based in Ghana, helping ambitious brands compete globally through world-class digital experiences.
            </p>

            <p className="text-lg text-white/50 mb-10 leading-relaxed font-light">
              My mission is simple: build websites so good that they sell before you speak. I combine strategic thinking, premium design, and cutting-edge development to create digital masterpieces.
            </p>

            {/* Key Points */}
            <div className="space-y-6">
              {[
                { icon: Globe, text: 'Building for global brands from Ghana' },
                { icon: Award, text: 'Premium quality on every project' },
                { icon: Zap, text: 'Results-driven approach to design' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex items-center gap-5 group"
                    whileHover={{ x: 8 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/10 group-hover:border-violet-500/30 transition-all">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-white/80 text-lg font-light">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="mt-12 inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Work Together</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
