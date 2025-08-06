import React, { RefObject } from 'react';
import { EDUCATIONS, JOBS, TECH_STACK } from '../constants';
import type { ResumeItem, TechSkill, ResumeRefs } from '../types';

const ResumeItemCard: React.FC<{ item: ResumeItem }> = ({ item }) => (
  <div className="bg-black/20 backdrop-blur-sm p-5 rounded-lg border-l-4 border-[#c165dd] border border-slate-100/10 shadow-md transition-transform transform hover:-translate-y-1 duration-300">
    <span className="text-xs bg-black/20 text-slate-300 px-3 py-1 rounded-full">{item.period}</span>
    <h3 className="text-lg font-bold text-white mt-4 mb-1">{item.title}</h3>
    <p className="text-[#c165dd] font-semibold text-sm">{item.institution}</p>
  </div>
);

const SkillCard: React.FC<{ skill: TechSkill }> = ({ skill }) => (
  <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center justify-center gap-2 border border-slate-100/10 shadow-md transition-transform transform hover:-translate-y-1 duration-300">
    <div className="w-16 h-16">{skill.icon}</div>
    <span className="text-sm font-medium text-slate-200 text-center">{skill.name}</span>
  </div>
);

interface ResumeProps {
  refs: ResumeRefs;
}

const Resume: React.FC<ResumeProps> = ({ refs }) => {
  return (
    <>
      <div ref={refs.skills} id="skills">
        <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
        <div className="space-y-8">
          {TECH_STACK.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-semibold text-[#c165dd] mb-4">{category.category}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div ref={refs.jobs} id="jobs">
        <h2 className="text-2xl font-bold text-white mb-6">My Jobs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {JOBS.map((item, index) => (
            <ResumeItemCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div ref={refs.educations} id="educations">
        <h2 className="text-2xl font-bold text-white mb-6">My Educations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATIONS.map((item, index) => (
            <ResumeItemCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Resume;