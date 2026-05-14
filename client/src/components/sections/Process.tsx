import { motion } from 'framer-motion';

/**
 * Process Section
 * 
 * Design: Cinematic Elegance
 * - Timeline layout with scroll-based animation
 * - Numbered steps with descriptions
 * - Elegant dividers and connectors
 * - Premium visual hierarchy
 */
export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into your business, goals, and target audience to understand what makes you unique.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Crafting a comprehensive digital strategy that aligns with your business objectives and market position.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Creating stunning, user-centered designs that communicate your brand story and drive conversions.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Building high-performance, fully responsive websites with cutting-edge technology and best practices.',
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Deploying your website with comprehensive testing, optimization, and a smooth go-live process.',
    },
    {
      number: '06',
      title: 'Growth Support',
      description: 'Ongoing support, analytics, and optimization to ensure your website continues to deliver results.',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="process" className="relative py-20 md:py-32 bg-background">
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663566717661/KEQyyjhRDmkHhZAp5e62Vj/process-timeline-bg-n9g839Q4rwoDiz4mFosoGG.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg text-foreground/70">
            A proven methodology that delivers exceptional results every time.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-12 top-24 w-1 h-12 bg-gradient-to-b from-accent to-accent/0" />
              )}

              {/* Step Content */}
              <div className="flex gap-6 md:gap-12">
                {/* Number Circle */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 md:w-24 h-16 md:h-24 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center premium-shadow">
                    <span className="text-2xl md:text-4xl font-bold text-background">
                      {step.number}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1 pt-2 md:pt-4"
                  whileHover={{ x: 8 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
