
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id={id} className={`py-16 md:py-20 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-teal-400"></span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">{subtitle}</p>
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;