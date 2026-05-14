import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

/**
 * Featured Work Section
 * 
 * Design: Cinematic Elegance
 * - Immersive project showcase cards
 * - Hover motion and parallax effects
 * - Image previews with overlay
 * - Results-focused copy
 */
export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: 'Barber Website',
      tag: 'Modern Grooming Brand Experience',
      url: 'https://natebarber-odyddfek.manus.space',
      industry: 'Beauty & Grooming',
      services: 'Web Design, Development, Branding',
      result: 'Increased bookings by 45%',
      color: 'from-amber-900 to-amber-700',
    },
    {
      id: 2,
      title: 'Real Estate Platform',
      tag: 'Luxury Property Conversion Platform',
      url: 'https://luxrealty-ymjavcsk.manus.space',
      industry: 'Real Estate',
      services: 'Web Design, Development, CMS',
      result: 'Generated 200+ qualified leads',
      color: 'from-slate-800 to-slate-600',
    },
    {
      id: 3,
      title: 'Construction Company',
      tag: 'Corporate Industrial Presence',
      url: 'https://firstonebuild-xuhyoalk.manus.space',
      industry: 'Construction',
      services: 'Web Design, Development, SEO',
      result: 'Ranked #1 for local keywords',
      color: 'from-orange-900 to-orange-700',
    },
    {
      id: 4,
      title: 'Trading Platform',
      tag: 'Trust-Driven Financial Interface',
      url: 'https://byntrading-zxyaoitl.manus.space',
      industry: 'Finance',
      services: 'UI/UX Design, Development',
      result: 'User retention up 60%',
      color: 'from-blue-900 to-blue-700',
    },
    {
      id: 5,
      title: 'Restaurant Website',
      tag: 'Food Brand with Appetite Appeal',
      url: 'https://cocoeatsgh-wncbs5hg.manus.space',
      industry: 'Food & Beverage',
      services: 'Web Design, Development, Marketing',
      result: 'Online orders increased 3x',
      color: 'from-red-900 to-red-700',
    },
    {
      id: 6,
      title: 'Dental Clinic',
      tag: 'Premium Healthcare Booking Experience',
      url: 'https://labone-dental-clinic.vercel.app/',
      industry: 'Healthcare',
      services: 'Web Design, Development, Booking System',
      result: 'Appointment bookings up 80%',
      color: 'from-teal-900 to-teal-700',
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
    <section id="work" className="relative py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Projects that generated real results for ambitious brands across industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg premium-shadow hover:premium-shadow transition-all duration-500 h-96"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Background Image Placeholder */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                {/* Top Content */}
                <div>
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>

                {/* Bottom Content - Revealed on Hover */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-white/90">
                    <p className="font-semibold">{project.industry}</p>
                    <p className="text-white/70">{project.services}</p>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <p className="text-accent font-semibold text-sm">{project.result}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    View Case Study
                    <ArrowUpRight size={16} />
                  </div>
                </motion.div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
