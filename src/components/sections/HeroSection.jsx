import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../utils/constants';
import profileImg from '../../assets/images/reza.png';

export default function HeroSection() {
  return (
    <div className="hero min-h-[80vh] bg-base-100 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 items-center text-center lg:text-left">
        
        {/* Profile Image Section - Unique Modern Soft Card & Glow */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center relative"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-tr from-primary to-secondary opacity-30 blur-3xl rounded-full -z-10 animate-pulse" />

          {/* Unique Squircle Shape Frame */}
          <div className="relative p-1.5 bg-gradient-to-tr from-primary via-secondary to-accent rounded-[2.5rem] shadow-2xl">
            <div className="w-64 h-80 lg:w-80 lg:h-[26rem] rounded-[2.2rem] overflow-hidden bg-base-200">
              <img 
                src={profileImg} 
                alt={PERSONAL_INFO?.name || "Rajib Reza"} 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content Section */}
        {/* Text Content Section */}
<div className="flex-1 max-w-xl">
  <motion.h1 
    className="text-4xl lg:text-5xl font-bold text-primary"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    Hi, I'm Rajib Reza
  </motion.h1>

  <motion.h2
    className="text-xl lg:text-2xl font-semibold text-secondary mt-2"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    Software Engineer
  </motion.h2>
  
  <motion.p 
    className="py-6 text-lg text-base-content/80 leading-relaxed"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    I am a passionate Software Engineer focused on building scalable, performant, and user-friendly web applications.
  </motion.p>
  
  <motion.div 
    className="flex gap-4 justify-center lg:justify-start"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 }}
  >
    <a href="#work" className="btn btn-primary">View Projects</a>
    <a href="/resume.pdf" download className="btn btn-outline">Download CV</a>
  </motion.div>
</div>

      </div>
    </div>
  );
}