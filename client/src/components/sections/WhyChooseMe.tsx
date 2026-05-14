import { motion } from 'framer-motion';
import { TrendingUp, Zap, Smartphone, Search, Users, Target } from 'lucide-react';

/**
 * Why Choose Me Section
 * 
 * Design: Cinematic Elegance
 * - Elegant feature cards with icons
 * - Staggered reveal animation
 * - Hover depth effects
 * - Premium styling with glass effect
 */
export default function WhyChooseMe() {
  const features = [
    {
      icon: Target,
      title: 'High-Converting Strategy',
      description: 'Data-driven approach that turns visitors into paying clients.',
    },
    {
      icon: Zap,
      title: 'Premium UI/UX',
      description: 'Pixel-perfect design that feels expensive and intentional.',
    },
    {
      icon: TrendingUp,
      title: 'Fast Performance',
      description: 'Lightning-quick load times that keep visitors engaged.',
    },
    {
      icon: Search,
      title: 'SEO-Ready Builds',
      description: 'Optimized for search engines to drive organic traffic.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Excellence',
      description: 'Fully responsive design that works flawlessly on all devices.',
    },
    {
      icon: Users,
      title: 'Revenue-Generating Systems',
      description: 'Websites built to generate leads and drive business growth.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Why Clients Choose Me
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Every project is built with premium quality, strategic thinking, and a focus on results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 rounded-lg glass-effect premium-border hover:border-accent/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.1)' }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-6 inline-block p-3 rounded-lg bg-accent/10 text-accent"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Accent Line */}
                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-accent to-accent/0 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
