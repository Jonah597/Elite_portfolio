import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, Dribbble, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-24 pb-16">
      
      {/* --- BACKGROUND AURORA & NOISE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[130px] mix-blend-screen"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen"
        />
        
        {/* Subtle Grid Lines for structure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- SOCIAL STRIP (LEFT) --- */}
      <motion.div 
        className="hidden lg:flex absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-white/20 mb-4"></div>
        <a href="#" className="text-white/30 hover:text-white hover:-translate-y-1 transition-all duration-300"><Linkedin size={20} strokeWidth={1.5} /></a>
        <a href="#" className="text-white/30 hover:text-white hover:-translate-y-1 transition-all duration-300"><Github size={20} strokeWidth={1.5} /></a>
        <a href="#" className="text-white/30 hover:text-white hover:-translate-y-1 transition-all duration-300"><Dribbble size={20} strokeWidth={1.5} /></a>
        <a href="#" className="text-white/30 hover:text-white hover:-translate-y-1 transition-all duration-300"><Mail size={20} strokeWidth={1.5} /></a>
        <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-white/20 mt-4"></div>
      </motion.div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-24 h-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* LEFT COLUMN: TYPOGRAPHY & CTA */}
        <motion.div 
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full mt-10 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Availability Badge */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest text-white/80 font-medium">Available for work</span>
          </div>

          {/* Huge Headline */}
          <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] font-bold text-white leading-[0.85] tracking-tighter mb-6 uppercase flex flex-col">
            <span>Creative</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-200 py-2">Developer</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}>& Designer</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-lg font-light leading-relaxed mb-10">
            I am <span className="text-white font-medium">Jonathan Ablorh</span>. I build immersive, award-winning digital experiences that sit at the intersection of design, technology, and art.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#work" className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
              <span className="relative z-10 font-bold uppercase tracking-wider text-sm">View Projects</span>
              <div className="relative z-10 bg-black/10 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowDownRight size={16} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#contact" className="text-white/60 hover:text-white uppercase tracking-widest text-sm font-medium transition-colors border-b border-transparent hover:border-white pb-1">
              Let's Talk
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: ARCHED IMAGE */}
        <motion.div 
          className="flex-1 w-full flex justify-center lg:justify-end relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glassmorphic Image Frame */}
          <div className="relative w-full max-w-[400px] xl:max-w-[450px] aspect-[3/4] rounded-t-full rounded-b-[40px] p-2 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.15)] group">
            
            {/* Inner Image Mask */}
            <div className="relative w-full h-full rounded-t-full rounded-b-[32px] overflow-hidden bg-[#0a0a0a]">
              <img 
                src="/myown.jpg" 
                alt="Jonathan Ablorh" 
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              {/* Inner Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Glass Badge */}
            <motion.div 
              className="absolute -left-4 md:-left-12 bottom-12 md:bottom-20 px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-3xl font-bold text-white mb-1">Elite</div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-violet-300 font-medium">Digital Craft</div>
            </motion.div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
