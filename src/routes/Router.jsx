import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoot from './MainRoot';

import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

// Single Page Home Wrapper
const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutSection /> },
      { path: 'projects', element: <ProjectsSection /> },
      { path: 'contact', element: <ContactSection /> },
      { 
        path: '*', 
        element: (
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-4xl font-bold text-error">404 - Page Not Found</h1>
          </div>
        ) 
      },
    ],
  },
]);