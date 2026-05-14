import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Metrics Section
 * 
 * Design: Cinematic Elegance
 * - Animated counter cards
 * - Premium styling with glass effect
 * - Staggered reveal animation
 */
export default function Metrics() {
  const [counts, setCounts] = useState({ projects: 0, design: 0, delivery: 0, results: 0 });

  const metrics = [
    { label: '7+', value: 'Premium Projects', key: 'projects' },
    { label: '100%', value: 'Custom Design', key: 'design' },
    { label: 'Fast', value: 'Delivery', key: 'delivery' },
    { label: '∞', value: 'Client-Focused Results', key: 'results' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Animate counters
        const interval = setInterval(() => {
          setCounts((prev) => ({
            projects: Math.min(prev.projects + 1, 7),
            design: Math.min(prev.design + 1, 100),
            delivery: prev.delivery,
            results: prev.results,
          }));
        }, 30);

        return () => clearInterval(interval);
      }
    });

    const element = document.getElementById('metrics-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="metrics-section" className="relative py-20 md:py-32 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            By The Numbers
          </h2>
          <p className="text-lg text-foreground/70">
            Proven track record of delivering premium digital experiences.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="p-6 md:p-8 rounded-lg glass-effect premium-border text-center hover:border-accent/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <motion.div className="text-3xl md:text-5xl font-bold text-accent mb-2">
                {metric.label}
              </motion.div>
              <p className="text-foreground/70 text-sm md:text-base">
                {metric.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
