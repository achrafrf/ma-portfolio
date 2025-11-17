"use client";

import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const characters = katakana + latin + nums;
    
    const fontSize = 16;
    let columns: number;
    let drops: number[];

    const setup = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        // Initialize drops at random y-positions to start
        drops = Array(columns).fill(1).map(() => Math.floor(Math.random() * (canvas.height / fontSize)));
    };
    
    // Initial setup and add resize listener
    setup();
    window.addEventListener('resize', setup);

    const draw = () => {
        // Black BG for the canvas
        // translucent BG to show trail
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Neon green text
        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;

        // Looping over drops
        for (let i = 0; i < drops.length; i++) {
            // A random character to print
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            // x = i * fontSize, y = value of drops[i] * fontSize
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Sending the drop back to the top randomly after it has crossed the screen
            // This gives the scrolling effect of columns at different speeds
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Incrementing Y coordinate
            drops[i]++;
        }
    };

    let animationId: number;
    const animate = () => {
        draw();
        animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        window.removeEventListener('resize', setup);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-black"
    />
  );
};

export default MatrixRain;