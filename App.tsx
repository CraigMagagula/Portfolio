import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Works from './components/Works';
import { PERSONAL_INFO } from './constants';
import BackgroundAnimation from './components/BackgroundAnimation';
import Cursor from './components/Cursor';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const mainContentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    jobs: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    educations: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: mainContentRef.current, rootMargin: '-40% 0px -60% 0px', threshold: 0 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavigate = (id: string) => {
    const section = sectionRefs[id as keyof typeof sectionRefs];
    if (section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <Cursor />
      <BackgroundAnimation />
      <div className="relative z-10 w-full max-w-7xl h-[90vh] max-h-[1000px] bg-[#2a2a3c]/50 backdrop-blur-2xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-700/50">
        {/* Title Bar */}
        <div className="flex-shrink-0 h-10 bg-slate-800/50 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 bg-red-500 rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-sm text-slate-400">{PERSONAL_INFO.name}'s Portfolio</div>
          <div className="flex items-center space-x-2">
            <img src="https://avatars.githubusercontent.com/u/211483551?v=4" alt="Profile" className="w-7 h-7 rounded-full border-2 border-slate-600"/>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
          <main ref={mainContentRef} className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
            <div className="p-6 md:p-10 space-y-12">
              <div ref={sectionRefs.about} id="about"><About /></div>
              <Resume refs={{ skills: sectionRefs.skills, jobs: sectionRefs.jobs, educations: sectionRefs.educations }}/>
              <div ref={sectionRefs.projects} id="projects"><Works /></div>
            </div>
          </main>
        </div>
         <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #4a4a6a;
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #5a5a7a;
          }
        `}</style>
      </div>
    </>
  );
};

export default App;