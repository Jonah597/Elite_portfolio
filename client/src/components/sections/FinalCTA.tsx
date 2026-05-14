import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * Final CTA Section
 * 
 * Design: Cinematic Elegance
 * - Dramatic emotional close
 * - Cinematic background
 * - Powerful headline
 * - Strong call-to-action
 */
export default function FinalCTA() {
  const ctaImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663566717661/KEQyyjhRDmkHhZAp5e62Vj/cta-final-bg-YFrqjFmzVTJEthPvsVstrB.webp';

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] w-full flex items-center justify-center overflow-hidden py-20 md:py-32">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${ctaImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] } as any}
        transition={{ duration: 20, repeat: Infinity } as any}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Your Business Deserves Better Than an Average Website
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's build something extraordinary together. A website that doesn't just look premium—it generates results.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          id="contact"
          href="mailto:hello@elite.dev"
          className="inline-block px-10 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-accent/90 transition-colors premium-shadow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.08, boxShadow: '0 20px 50px rgba(212, 175, 55, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Project
          <ArrowRight size={20} />
        </motion.a>

        {/* Subtext */}
        <motion.p
          className="mt-8 text-foreground/60 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Available for new projects. Let's discuss your vision.
        </motion.p>
      </motion.div>
    </section>
  );
}
