// components/ParticleBackground.tsx
'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });

  useEffect(() => {
    console.log('🎆 ParticleBackground component mounted!');
    
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('❌ No canvas found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.log('❌ No canvas context found');
      return;
    }

    console.log('✅ Canvas and context ready');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(`📐 Canvas resized to ${canvas.width}x${canvas.height}`);
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      size: Math.random() * 6 + 3, // Much larger particles (3-9px)
      opacity: Math.random() * 0.6 + 0.7, // Higher opacity (0.7-1.3)
    });

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = 150; // Increased particle count
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(createParticle());
      }
      console.log(`✨ Created ${particleCount} particles`);
    };

    const updateParticles = () => {
      const mouse = mouseRef.current;
      
      particlesRef.current.forEach((p) => {
        // Mouse interaction
        if (mouse.isMoving) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          
          if (dist < 100) {
            const force = (100 - dist) / 100;
            p.vx += (dx / dist) * force * 0.05;
            p.vy += (dy / dist) * force * 0.05;
          }
        }
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Slow down particles over time
        p.vx *= 0.99;
        p.vy *= 0.99;
        
        // Reset velocity if too slow
        if (Math.abs(p.vx) < 0.1 && Math.abs(p.vy) < 0.1) {
          p.vx = (Math.random() - 0.5) * 1;
          p.vy = (Math.random() - 0.5) * 1;
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Get current scroll position for color changes
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.floor(scrollY / windowHeight);
      
      // Simple color variations based on section
      const colors = [
        'rgba(59, 130, 246, ', // Blue
        'rgba(79, 70, 229, ',  // Indigo
        'rgba(139, 92, 246, ', // Purple
        'rgba(59, 130, 246, ', // Blue
        'rgba(168, 85, 247, ', // Purple
      ];
      
      const currentColor = colors[currentSection] || colors[0];
      
      // Draw particles with subtle glow effect
      particlesRef.current.forEach((p) => {
        // Add subtle glow effect
        ctx.shadowColor = currentColor + '0.6)';
        ctx.shadowBlur = 4; // Much less blur for crisp particles
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = currentColor + Math.min(p.opacity, 1) + ')';
        ctx.fill();
        
        // Reset shadow for other drawings
        ctx.shadowBlur = 0;
      });

      // Draw connections with better visibility
      particlesRef.current.forEach((p, i) => {
        particlesRef.current.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) { // Increased connection distance
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            const alpha = (1 - d / 120) * 0.6; // Increased line opacity
            ctx.strokeStyle = currentColor + alpha + ')';
            ctx.lineWidth = 2; // Thicker lines
            ctx.stroke();
          }
        });
      });

      // Draw subtle mouse interaction
      if (mouseRef.current.isMoving) {
        const mouse = mouseRef.current;
        
        // Very subtle outer ring
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
        ctx.strokeStyle = currentColor + '0.15)'; // Much more transparent
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Subtle inner ring without glow
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
        ctx.strokeStyle = currentColor + '0.25)'; // More transparent
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
      mouseRef.current.isMoving = true;
      
      // Reset mouse moving state after 1 second
      setTimeout(() => {
        mouseRef.current.isMoving = false;
      }, 1000);
    };

    resizeCanvas();
    initParticles();
    animate();
    console.log('🚀 Animation started');

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      console.log('🧹 Cleaning up ParticleBackground');
      window.removeEventListener('resize', () => {
        resizeCanvas();
        initParticles();
      });
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  console.log('🎨 ParticleBackground rendering...');

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ background: 'transparent', opacity: 1 }}
    />
  );
}
