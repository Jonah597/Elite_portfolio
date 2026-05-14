import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

/**
 * Testimonials Section
 * 
 * Design: Cinematic Elegance
 * - Luxury floating cards
 * - Star ratings
 * - Staggered reveal animation
 * - Premium styling
 */
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Luxury Real Estate',
      text: 'The website transformed our business. We went from zero online presence to generating 200+ qualified leads monthly. Absolutely world-class work.',
      rating: 5,
    },
    {
      name: 'Marcus Chen',
      company: 'Tech Startup',
      text: 'Not just a website—a complete digital strategy. The design, performance, and conversion optimization exceeded all expectations. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Amara Okafor',
      company: 'Beauty Brand',
      text: 'Working with this team was seamless. They understood our vision and delivered something even better. Our sales increased 3x within the first month.',
      rating: 5,
    },
    {
      name: 'David Martinez',
      company: 'Construction Company',
      text: 'Professional, creative, and results-driven. They built us a website that actually generates business. Worth every penny.',
      rating: 5,
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
    <section className="relative py-20 md:py-32 bg-background">
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
            What Clients Say
          </h2>
          <p className="text-lg text-foreground/70">
            Real testimonials from businesses we have helped succeed.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg glass-effect premium-border hover:border-accent/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.1)' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-foreground/60 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
