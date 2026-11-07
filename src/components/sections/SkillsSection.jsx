import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';


const SKILLS_DATA = [
  { name: 'React', category: 'Frontend', level: 'Advanced' },
  { name: 'Next.js', category: 'Frontend', level: 'Intermediate' },
  { name: 'TypeScript', category: 'Languages', level: 'Intermediate' },
  { name: 'JavaScript', category: 'Languages', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced' },
  { name: 'Node.js', category: 'Backend', level: 'Intermediate' },
  { name: 'Express.js', category: 'Backend', level: 'Intermediate' },
  { name: 'MongoDB', category: 'Backend', level: 'Intermediate' },
  { name: 'PostgreSQL', category: 'Backend', level: 'Beginner' },
  { name: 'Git & GitHub', category: 'Tools', level: 'Advanced' },
  { name: 'Framer Motion', category: 'Frontend', level: 'Intermediate' },
  { name: 'Docker', category: 'Tools', level: 'Beginner' },
];

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Languages', 'Tools'];

// Framer Motion Variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড সূক্ষ্ম গ্র্যাডিয়েন্ট গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies & Tools I work with daily"
        />

        {/* Dynamic Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'text-primary-content'
                  : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-base-200/60 backdrop-blur-md border border-base-300 hover:border-primary/50 p-4 rounded-xl shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-base-content group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                </div>
                
                <div className="mt-3 flex items-center justify-between text-xs text-base-content/60">
                  <span>{skill.category}</span>
                  <span className="px-2 py-0.5 rounded bg-base-300 text-[10px] uppercase font-semibold">
                    {skill.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}