import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Linkedin, ArrowUp } from 'lucide-react';

/**
 * Footer Section
 * 
 * Design: Cinematic Elegance
 * - Minimal elegant footer
 * - Contact information
 * - Social media links
 * - Back to top button
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@elite.dev', text: 'hello@elite.dev' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/1234567890', text: 'WhatsApp' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', text: '@elite.designs' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', text: 'LinkedIn' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-t from-card to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Branding */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold gradient-text mb-4">ELITE</h3>
            <p className="text-foreground/70 leading-relaxed max-w-sm">
              Crafting premium digital experiences for ambitious brands. Based in Ghana, building globally.
            </p>
          </motion.div>

          {/* Right: Contact Links */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 rounded-lg hover:bg-accent/10 transition-colors"
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                >
                  <Icon size={20} className="text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-xs text-foreground/60 uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-foreground font-semibold text-sm">
                      {link.text}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Copyright */}
          <p className="text-foreground/60 text-sm">
            © {currentYear} Elite Designs. All rights reserved. Based in Ghana.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
