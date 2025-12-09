"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);

        const rainDrops: number[] = [];
        for (let i = 0; i < columns; i++) {
            rainDrops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00FF00';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
            animationFrameId = window.requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const glitchCSS = `
      .glitch {
        position: relative;
      }
      .glitch:before,
      .glitch:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          overflow: hidden;
      }
      .glitch:before {
          left: 2px;
          text-shadow: -1px 0 #00ff00;
          animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
      }
      .glitch:after {
          left: -2px;
          text-shadow: -1px 0 #00ff00, 1px 1px #00ff00;
          animation: glitch-anim-2 1.5s infinite linear alternate-reverse;
      }
      @keyframes glitch-anim-1 {
        0% { clip-path: inset(34% 0 62% 0); }
        5% { clip-path: inset(55% 0 10% 0); }
        10% { clip-path: inset(84% 0 4% 0); }
        15% { clip-path: inset(58% 0 31% 0); }
        20% { clip-path: inset(93% 0 4% 0); }
        25% { clip-path: inset(11% 0 85% 0); }
        30% { clip-path: inset(99% 0 1% 0); }
        35% { clip-path: inset(78% 0 10% 0); }
        40% { clip-path: inset(12% 0 84% 0); }
        45% { clip-path: inset(99% 0 1% 0); }
        50% { clip-path: inset(57% 0 38% 0); }
        55% { clip-path: inset(97% 0 2% 0); }
        60% { clip-path: inset(15% 0 79% 0); }
        65% { clip-path: inset(69% 0 17% 0); }
        70% { clip-path: inset(89% 0 3% 0); }
        75% { clip-path: inset(42% 0 53% 0); }
        80% { clip-path: inset(95% 0 5% 0); }
        85% { clip-path: inset(23% 0 76% 0); }
        90% { clip-path: inset(100% 0 1% 0); }
        95% { clip-path: inset(45% 0 45% 0); }
        100% { clip-path: inset(82% 0 7% 0); }
      }
      @keyframes glitch-anim-2 {
        0% { clip-path: inset(99% 0 1% 0); }
        5% { clip-path: inset(34% 0 54% 0); }
        10% { clip-path: inset(1% 0 95% 0); }
        15% { clip-path: inset(78% 0 4% 0); }
        20% { clip-path: inset(20% 0 79% 0); }
        25% { clip-path: inset(92% 0 5% 0); }
        30% { clip-path: inset(41% 0 53% 0); }
        35% { clip-path: inset(4% 0 95% 0); }
        40% { clip-path: inset(84% 0 10% 0); }
        45% { clip-path: inset(21% 0 74% 0); }
        50% { clip-path: inset(4% 0 95% 0); }
        55% { clip-path: inset(81% 0 14% 0); }
        60% { clip-path: inset(36% 0 56% 0); }
        65% { clip-path: inset(100% 0 1% 0); }
        70% { clip-path: inset(79% 0 11% 0); }
        75% { clip-path: inset(4% 0 91% 0); }
        80% { clip-path: inset(62% 0 32% 0); }
        85% { clip-path: inset(88% 0 1% 0); }
        90% { clip-path: inset(34% 0 65% 0); }
        95% { clip-path: inset(90% 0 5% 0); }
        100% { clip-path: inset(1% 0 99% 0); }
      }
    `;

    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            <style>{glitchCSS}</style>
            <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
            <div className="relative z-10">
                <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div 
                              className="space-y-8"
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8 }}
                            >
                                <div className="space-y-4">
                                    <motion.h1 
                                      className="text-6xl md:text-8xl font-black leading-tight"
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.2, duration: 0.8 }}
                                    >
                                        ACHRAF<br />
                                        <span className="glitch" data-text="DEVELOPER">RAFIQ</span>
                                    </motion.h1>
                                    <motion.p 
                                      className="text-xl md:text-2xl text-green-400 font-body"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: 0.4, duration: 0.8 }}
                                    >
                                      Building digital experiences that matter.
                                    </motion.p>
                                </div>
                                <motion.div 
                                  className="space-y-4"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.6, duration: 0.8 }}
                                >
                                    <p className="text-lg font-body leading-relaxed text-gray-200">
                                        Full-stack developer specializing in modern web technologies. I create innovative solutions that blend cutting-edge design with powerful functionality.
                                    </p>
                                    <p className="text-lg font-body leading-relaxed text-green-300">
                                        Passionate about turning complex problems into elegant, user-friendly applications.
                                    </p>
                                </motion.div>
                                <motion.div 
                                  className="flex flex-col sm:flex-row gap-4"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.8, duration: 0.8 }}
                                >
                                    <a href="#projects" className="matrix-button px-8 py-4 text-lg font-semibold text-center">
                                        VIEW PROJECTS
                                    </a>
                                    <a href="#contact" className="matrix-button px-8 py-4 text-lg font-semibold text-center">
                                        GET IN TOUCH
                                    </a>
                                </motion.div>
                            </motion.div>
                            <motion.div 
                              className="relative"
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <div className="relative">
                                    <Image
                                        src="/achraf.png"
                                        alt="Developer"
                                        width={448}
                                        height={448}
                                        className="w-full max-w-md mx-auto h-auto object-contain filter drop-shadow-2xl"
                                    />
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-1/4 left-0 w-full h-px bg-green-500 opacity-30 animate-pulse"></div>
                                        <div className="absolute top-1/2 left-0 w-full h-px bg-green-400 opacity-40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="absolute top-3/4 left-0 w-full h-px bg-green-300 opacity-20 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                    <div className="absolute top-0 right-0 font-body text-xs text-green-500 opacity-20 animate-pulse">
                                        01000011 01101111 01100100<br />
                                        01100101 00100000 01101001<br />
                                        01110011 00100000 01010000<br />
                                        01101111 01100101 01110100
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div 
                      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
                    >
                        <div className="matrix-border w-8 h-12 rounded-full p-2" style={{ boxShadow: 'rgb(0, 255, 0) 0px 0px 5px 0px' }}>
                            <div className="w-1 h-3 bg-green-500 rounded-full mx-auto animate-pulse"></div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Hero;