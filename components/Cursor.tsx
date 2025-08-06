import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });
  
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Move dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
      }

      // Move trailing circle
      if (circleRef.current) {
        const deltaX = mousePos.current.x - circlePos.current.x;
        const deltaY = mousePos.current.y - circlePos.current.y;
        
        circlePos.current.x += deltaX * 0.15;
        circlePos.current.y += deltaY * 0.15;

        circleRef.current.style.transform = `translate(${circlePos.current.x}px, ${circlePos.current.y}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    // Hover effects
    const handleMouseOver = (e: Event) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        circleRef.current?.classList.add('hover');
        dotRef.current?.classList.add('hidden-dot');
      }
    };

    const handleMouseOut = (e: Event) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        circleRef.current?.classList.remove('hover');
        dotRef.current?.classList.remove('hidden-dot');
      }
    };
    
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={circleRef} className="cursor-circle"></div>
    </>
  );
};

export default Cursor;