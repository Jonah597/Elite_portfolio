import { motion } from 'framer-motion';

/**
 * Trust Strip Section
 * 
 * Design: Cinematic Elegance
 * - Scrolling marquee with client categories
 * - Subtle background with premium styling
 * - Infinite loop animation
 */
export default function TrustStrip() {
  const categories = [
    'Restaurants',
    'Real Estate',
    'Healthcare',
    'Beauty',
    'Construction',
    'Finance',
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-r from-background via-card to-background border-y border-border">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 md:gap-12 whitespace-nowrap"
          animate={{ x: [0, -1000] } as any}
          transition={{
            duration: 20,
            repeat: Infinity,
          } as any}
        >
          {/* First set */}
          {categories.map((category, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12">
              <span className="text-foreground/60 text-sm md:text-base font-medium">
                Trusted by ambitious brands in:
              </span>
              <span className="text-foreground font-semibold text-sm md:text-base">
                {category}
              </span>
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {categories.map((category, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-8 md:gap-12">
              <span className="text-foreground/60 text-sm md:text-base font-medium">
                Trusted by ambitious brands in:
              </span>
              <span className="text-foreground font-semibold text-sm md:text-base">
                {category}
              </span>
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
