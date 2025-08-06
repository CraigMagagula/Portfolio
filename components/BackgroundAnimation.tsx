import React, { useRef, useEffect } from 'react';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    class Ball {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      wander: number;
      theta: number;

      constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
        this.wander = 0.5;
        this.theta = Math.random() * Math.PI * 2;
        
        const side = Math.floor(Math.random() * 4);
        switch(side) {
            case 0: // top
                this.x = Math.random() * width;
                this.y = -this.radius;
                break;
            case 1: // right
                this.x = width + this.radius;
                this.y = Math.random() * height;
                break;
            case 2: // bottom
                this.x = Math.random() * width;
                this.y = height + this.radius;
                break;
            default: // left
                this.x = -this.radius;
                this.y = Math.random() * height;
                break;
        }

        const speed = 0.8;
        this.vx = Math.cos(this.theta) * speed;
        this.vy = Math.sin(this.theta) * speed;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
      }

      update() {
        this.theta += (Math.random() - 0.5) * this.wander;
        const speed = 0.5;
        this.vx = Math.cos(this.theta) * speed;
        this.vy = Math.sin(this.theta) * speed;
        
        this.x += this.vx;
        this.y += this.vy;

        if (this.x - this.radius > width) {
            this.x = -this.radius;
            this.y = Math.random() * height;
        }
        if (this.x + this.radius < 0) {
            this.x = width + this.radius;
            this.y = Math.random() * height;
        }
        if (this.y - this.radius > height) {
            this.y = -this.radius;
            this.x = Math.random() * width;
        }
        if (this.y + this.radius < 0) {
            this.y = height + this.radius;
            this.x = Math.random() * width;
        }
      }
    }

    const balls = [
      new Ball(120, 'rgba(248, 82, 122, 0.7)'),
      new Ball(150, 'rgba(193, 101, 221, 0.7)'),
      new Ball(100, 'rgba(0, 150, 255, 0.7)'),
      new Ball(130, 'rgba(100, 220, 200, 0.7)'),
      new Ball(90, 'rgba(255, 159, 64, 0.7)'),
    ];

    let animationFrameId: number;

    const animate = () => {
      if(!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);
      balls.forEach(ball => {
        ball.update();
        ball.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <canvas ref={canvasRef} className="w-full h-full filter blur-3xl contrast-125" />
    </div>
  );
};

export default BackgroundAnimation;