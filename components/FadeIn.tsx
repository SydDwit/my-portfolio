"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FadeIn({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number 
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}