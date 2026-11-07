import React from 'react';
import FadeIn from '../motion/FadeIn';
import SectionTitle from '../common/SectionTitle';

export default function AboutSection() {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="About Me" subtitle="My Journey and Background" />
        <FadeIn>
          <div className="card bg-base-100 shadow-xl p-8 border border-base-300">
            <p className="text-lg md:text-xl text-base-content/90 dark:text-gray-300 leading-relaxed font-normal tracking-wide">
              I am Rajib Reza, a passionate Frontend Developer specializing in the React ecosystem with a strong technical foundation in HTML, CSS, modern CSS frameworks, and JavaScript. I excel at transforming complex problems into clean, visually striking, and intuitive user interfaces. Alongside core frontend skills, my versatility extends to Python for efficient problem-solving and Git for seamless version control and collaboration. Driven by continuous learning and precision, I am dedicated to crafting high-performance, accessible, and responsive web applications that deliver exceptional user experiences.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}