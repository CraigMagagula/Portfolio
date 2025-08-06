import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, FileText } from 'lucide-react';

const Works: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = useMemo(() => ['All', ...new Set(PROJECTS.map(p => p.category))], []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const FilterButton: React.FC<{ filter: string }> = ({ filter }) => (
    <button
      onClick={() => setActiveFilter(filter)}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
        activeFilter === filter
          ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md'
          : 'bg-black/20 text-slate-300 hover:bg-black/40 hover:text-white border border-slate-100/10'
      }`}
    >
      {filter}
    </button>
  );

  return (
    <>
      <h2 className="text-2xl font-bold text-white mb-6">My Projects</h2>
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {filters.map(filter => <FilterButton key={filter} filter={filter} />)}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg bg-black/20 border border-slate-100/10">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 group-hover:backdrop-blur-sm transition-all duration-500 flex flex-col items-center justify-center p-4 text-center">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-2">{project.category}</p>
                {project.description && (
                  <p className="text-slate-200 text-xs mb-4 leading-relaxed">
                    {project.description}
                  </p>
                )}
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {project.url && (
                     <a href={project.url} target="_blank" rel="noopener noreferrer" title="Live Demo" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-800 rounded-md text-xs font-semibold hover:bg-slate-200 transition-colors">
                       <ExternalLink size={14} />
                       <span>Live Demo</span>
                     </a>
                  )}
                  {project.repoUrl && (
                     <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" title="Source Code" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 text-white rounded-md text-xs font-semibold hover:bg-slate-600 transition-colors">
                       <Github size={14} />
                       <span>Source</span>
                     </a>
                  )}
                  {project.documentationUrl && (
                     <a href={project.documentationUrl} target="_blank" rel="noopener noreferrer" title="Documentation" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700 text-white rounded-md text-xs font-semibold hover:bg-slate-600 transition-colors">
                       <FileText size={14} />
                       <span>Docs</span>
                     </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Works;