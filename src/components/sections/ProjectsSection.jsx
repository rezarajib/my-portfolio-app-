import React from 'react';
import { motion } from 'framer-motion';
import { useGithubProjects } from '../../hooks/useGithubProjects'; // 👈 হুকটি এখানে ইমপোর্ট করা হলো

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

const ProjectsSection = () => {
  const { data: projects, isPending, isError, error, refetch } = useGithubProjects();

  // 1. Loading Skeleton UI
  if (isPending) {
    return (
      <section id="work" className="py-20 bg-base-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-base-content">Recent Projects</h2>
            <p className="text-sm text-base-content/60 mt-2">Fetching repositories from GitHub...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="p-6 border border-base-300 rounded-2xl bg-base-200/50 animate-pulse flex flex-col gap-4">
                <div className="h-6 bg-base-300 rounded w-2/3" />
                <div className="h-4 bg-base-300 rounded w-full" />
                <div className="h-4 bg-base-300 rounded w-4/5" />
                <div className="flex gap-3 mt-4">
                  <div className="h-8 bg-base-300 rounded-xl w-1/2" />
                  <div className="h-8 bg-base-300 rounded-xl w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 2. Error UI
  if (isError) {
    return (
      <section id="work" className="py-20 bg-base-100 flex justify-center items-center">
        <div className="text-center p-8 bg-error/10 border border-error/30 rounded-2xl max-w-md mx-auto backdrop-blur-md">
          <h3 className="text-xl font-bold text-error mb-2">Failed to Load Projects</h3>
          <p className="text-sm text-base-content/70 mb-6">{error?.message || 'Something went wrong.'}</p>
          <button
            onClick={() => refetch()}
            className="btn btn-error btn-outline btn-sm rounded-xl font-semibold"
          >
            Retry Loading
          </button>
        </div>
      </section>
    );
  }

  // 3. Projects Grid Render
  return (
    <section id="work" className="py-20 bg-base-100 relative overflow-hidden">
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base text-base-content/70 mt-3">
            Real-time repositories synced directly with GitHub API
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects?.slice(0, 6).map((repo) => (
            <motion.div
              key={repo.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-base-200/50 backdrop-blur-md border border-base-300 hover:border-primary/40 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors line-clamp-1">
                    {repo.name}
                  </h3>
                  {repo.language && (
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
                      {repo.language}
                    </span>
                  )}
                </div>

                <p className="text-sm text-base-content/75 line-clamp-3 mb-6 leading-relaxed font-normal">
                  {repo.description || 'No description provided for this repository.'}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-base-300/60 mt-auto">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn btn-sm btn-outline border-base-300 hover:bg-base-300 hover:text-base-content gap-2 rounded-xl text-xs font-semibold transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Repository
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn btn-sm btn-primary text-primary-content gap-1.5 rounded-xl text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all"
                  >
                    <span>Live Demo</span>
                    <svg className="w-3.5 h-3.5 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;