// components/ParticleBackground.tsx
'use client';

import { useEffect, useRef, useCallback } from 'react';

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
  const isInitializedRef = useRef(false);

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.5, // Reduced velocity for smoother movement
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 3 + 1, // Smaller particles (1-4px)
    opacity: Math.random() * 0.5 + 0.5, // Increased opacity (0.5-1.0)
  }), []);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    particlesRef.current = [];
    const particleCount = 80; // Reduced particle count for better performance
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(createParticle(canvas));
    }
  }, [createParticle]);

  const updateParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mouse = mouseRef.current;
    
    particlesRef.current.forEach((p) => {
      // Gentle mouse interaction
      if (mouse.isMoving) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 80) {
          const force = (80 - dist) / 80;
          p.vx += (dx / dist) * force * 0.02; // Reduced force
          p.vy += (dy / dist) * force * 0.02;
        }
      }
      
      // Update position
      p.x += p.vx;
      p.y += p.vy;
      
      // Bounce off edges instead of wrapping
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      
      // Keep particles within bounds
      p.x = Math.max(0, Math.min(canvas.width, p.x));
      p.y = Math.max(0, Math.min(canvas.height, p.y));
      
      // Gentle damping
      p.vx *= 0.995;
      p.vy *= 0.995;
      
      // Reset velocity if too slow
      if (Math.abs(p.vx) < 0.1 && Math.abs(p.vy) < 0.1) {
        p.vx = (Math.random() - 0.5) * 0.5;
        p.vy = (Math.random() - 0.5) * 0.5;
      }
    });
  }, []);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fixed color scheme - no more color changes on scroll
    const baseColor = 'rgba(59, 130, 246, '; // Consistent blue
    
    // Draw particles with minimal glow
    particlesRef.current.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = baseColor + Math.min(p.opacity, 0.8) + ')'; // Increased max opacity
      ctx.fill();
    });

    // Draw connections with reduced complexity
    particlesRef.current.forEach((p, i) => {
      // Only check every 3rd particle to reduce calculations
      if (i % 3 !== 0) return;
      
      particlesRef.current.slice(i + 1).forEach((q, j) => {
        // Skip some connections to reduce drawing overhead
        if (j % 2 !== 0) return;
        
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d = Math.hypot(dx, dy);
        if (d < 100) { // Reduced connection distance
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          const alpha = (1 - d / 100) * 0.5; // Increased connection opacity
          ctx.strokeStyle = baseColor + alpha + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    // Minimal mouse interaction effect
    if (mouseRef.current.isMoving) {
      const mouse = mouseRef.current;
      
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
      ctx.strokeStyle = baseColor + '0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }, []);

  const animate = useCallback(() => {
    updateParticles();
    drawParticles();
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    mouseRef.current.x = event.clientX;
    mouseRef.current.y = event.clientY;
    mouseRef.current.isMoving = true;
    
    // Reset mouse moving state after shorter time
    setTimeout(() => {
      mouseRef.current.isMoving = false;
    }, 500);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  useEffect(() => {
    if (isInitializedRef.current) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    resizeCanvas();
    initParticles();
    animate();
    
    isInitializedRef.current = true;

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      isInitializedRef.current = false;
    };
  }, [resizeCanvas, initParticles, animate, handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ 
        background: 'transparent', 
        opacity: 0.9, // Increased overall canvas opacity
        willChange: 'auto' // Better performance hint
      }}
    />
  );
}
