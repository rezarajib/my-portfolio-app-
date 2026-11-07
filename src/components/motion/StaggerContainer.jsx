import React from 'react';
import { motion } from 'framer-motion';

export default function StaggerContainer({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      {children}
    </motion.div>
  );
}