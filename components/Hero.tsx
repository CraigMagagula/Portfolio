import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { PERSONAL_INFO, SOCIALS, TYPING_TITLES } from '../constants';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const animatedText = useTypingEffect(TYPING_TITLES);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="min-h-screen flex items-center">
      <div className={`container mx-auto grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-400">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mt-2 mb-4">{PERSONAL_INFO.name}</h1>
          <h2 className="text-2xl md:text-3xl text-teal-400 font-semibold mb-6">
            <span className="typing-cursor">{animatedText}</span>
            <span className="inline-block w-1 h-7 bg-teal-400 animate-pulse ml-1"></span>
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            I'm a passionate and creative developer with a knack for building beautiful, functional, and user-centric web applications. Welcome to my digital space.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 p-2 rounded-full border-2 border-transparent hover:border-teal-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-teal-400 rounded-full blur-2xl opacity-30"></div>
            <img 
              src="https://avatars.githubusercontent.com/u/7403279?v=4" 
              alt="Craig Magagula" 
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;