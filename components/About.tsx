
import React from 'react';
import { PERSONAL_INFO, TYPING_TITLES } from '../constants';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { Download } from 'lucide-react';

const DeveloperIllustration = () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g>
            <rect fill="#1A202C" width="200" height="200" rx="10"></rect>
            <path fill="#2D3748" d="M0,150 L200,150 L200,190 C200,195.523 195.523,200 190,200 L10,200 C4.477,200 0,195.523 0,190 L0,150 Z"></path>
            <circle cx="100" cy="85" r="20" fill="#4A5568"></circle>
            <path d="M80,110 C80,100 120,100 120,110 L120,150 L80,150 Z" fill="#4A5568"></path>
            <rect x="50" y="120" width="100" height="30" rx="5" fill="#4A5568"></rect>
            <rect x="40" y="140" width="120" height="10" rx="5" fill="#718096"></rect>
            <rect x="60" y="90" width="80" height="50" rx="5" fill="#000000" stroke="#718096" stroke-width="2"></rect>
            <text x="65" y="105" fill="#38A169" font-family="monospace" font-size="8px">&gt; developer</text>
            <text x="65" y="115" fill="#38A169" font-family="monospace" font-size="8px">&gt; coder</text>
            <text x="65" y="125" fill="#38A169" font-family="monospace" font-size="8px">&gt; builder</text>
        </g>
    </svg>
);


const About: React.FC = () => {
  const animatedText = useTypingEffect(TYPING_TITLES);

  return (
    <div className="bg-gradient-to-br from-[#f8527a] to-[#c165dd] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-lg">
      <div className="flex-1 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{PERSONAL_INFO.name}</h1>
        <h2 className="text-2xl md:text-3xl text-slate-100 font-semibold mb-6 h-10">
          <span className="font-bold text-white">{animatedText}</span>
          <span className="inline-block w-1 h-7 bg-white animate-pulse ml-1 align-middle"></span>
        </h2>
        <p className="text-base md:text-lg text-slate-100/90 leading-relaxed mb-8">
          {PERSONAL_INFO.about}
        </p>
        <a
          href={PERSONAL_INFO.cvUrl}
          download
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105"
        >
          <Download size={20} />
          Download Resume
        </a>
      </div>
      <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
        <DeveloperIllustration />
      </div>
    </div>
  );
};

export default About;
