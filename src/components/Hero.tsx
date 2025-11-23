import { motion } from 'framer-motion';
import { Wrench, Cpu, Monitor, HardDrive, CircuitBoard, Battery, Wifi, Server } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onBookRepair: () => void;
}

export default function Hero({ onBookRepair }: HeroProps) {
  const [currentTech, setCurrentTech] = useState(0);
  
  const techTerms = [
    { text: 'Chip-Level Repairs', icon: Cpu, color: 'text-blue-400' },
    { text: 'Screen Replacements', icon: Monitor, color: 'text-green-400' },
    { text: 'Motherboard Repairs', icon: CircuitBoard, color: 'text-purple-400' },
    { text: 'Data Recovery', icon: HardDrive, color: 'text-yellow-400' },
    { text: 'Battery Issues', icon: Battery, color: 'text-orange-400' },
    { text: 'WiFi Problems', icon: Wifi, color: 'text-cyan-400' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techTerms.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [techTerms.length]);

  const CurrentIcon = techTerms[currentTech].icon;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Circuit Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
        {/* Animated Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Main Circuit Paths */}
            <motion.path
              d="M10,10 L40,10 L40,40 L70,40 L70,70 L90,70"
              stroke="url(#circuitGradient1)"
              strokeWidth="0.3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M90,10 L60,10 L60,30 L30,30 L30,60 L10,60"
              stroke="url(#circuitGradient2)"
              strokeWidth="0.3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
            />
            <motion.path
              d="M20,80 L50,80 L50,50 L80,50 L80,20"
              stroke="url(#circuitGradient3)"
              strokeWidth="0.3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
            />
            
            {/* Circuit Nodes */}
            {[...Array(15)].map((_, i) => (
              <motion.circle
                key={i}
                cx={10 + (i * 6)}
                cy={15 + (i % 3) * 25}
                r="0.8"
                fill="currentColor"
                className="text-orange-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}

            <defs>
              <linearGradient id="circuitGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="circuitGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating Circuit Components */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <CircuitBoard className="w-16 h-16 text-orange-400/30" />
        </motion.div>

        <motion.div
          className="absolute top-3/4 right-1/4"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Cpu className="w-12 h-12 text-blue-400/30" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/2"
          animate={{
            x: [0, 20, 0],
            y: [0, 25, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Server className="w-14 h-14 text-green-400/30" />
        </motion.div>

        {/* Animated Connection Dots */}
        <div className="absolute inset-0">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full"
              style={{
                left: `${10 + (i * 2.5) % 80}%`,
                top: `${15 + (i * 3) % 70}%`
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                boxShadow: [
                  '0 0 0px rgba(249, 115, 22, 0)',
                  '0 0 10px rgba(249, 115, 22, 0.8)',
                  '0 0 0px rgba(249, 115, 22, 0)'
                ]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Binary Code Rain Animation - Enhanced */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="text-green-400 text-sm font-mono absolute top-0 font-bold"
              style={{ 
                left: `${Math.random() * 100}%`,
                textShadow: '0 0 8px rgba(34, 197, 94, 0.8)'
              }}
              animate={{
                y: [-100, 1200],
                opacity: [0, 1, 0.8, 0]
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
              {Math.random() > 0.5 ? '1' : '0'}
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>

        {/* Circuit Grid Overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Horizontal Lines */}
            {[...Array(20)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 5}
                x2="100"
                y2={i * 5}
                stroke="currentColor"
                strokeWidth="0.1"
                className="text-white"
              />
            ))}
            {/* Vertical Lines */}
            {[...Array(20)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 5}
                y1="0"
                x2={i * 5}
                y2="100"
                stroke="currentColor"
                strokeWidth="0.1"
                className="text-white"
              />
            ))}
          </svg>
        </div>

        {/* Animated Glow Spots */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full blur-3xl"
              style={{
                left: `${20 + (i * 10) % 60}%`,
                top: `${15 + (i * 12) % 60}%`,
                background: i % 3 === 0 ? 'rgba(249, 115, 22, 0.1)' : 
                           i % 3 === 1 ? 'rgba(59, 130, 246, 0.1)' : 
                           'rgba(16, 185, 129, 0.1)'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Animated Wrench Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 200,
              rotate: { duration: 1, ease: "easeOut" }
            }}
            className="inline-block p-4 bg-orange-500/10 rounded-full mb-4 backdrop-blur-sm border border-orange-500/20"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Wrench className="w-16 h-16 text-orange-500 drop-shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Main Heading with Character Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
          >
            Your Laptop's{' '}
            <motion.span
              className="text-orange-500 inline-block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
              animate={{ 
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 0px rgba(249, 115, 22, 0)",
                  "0 0 30px rgba(249, 115, 22, 0.8)",
                  "0 0 0px rgba(249, 115, 22, 0)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Doctor
            </motion.span>
          </motion.h1>

          {/* Company Name with Glow Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl sm:text-3xl text-gray-300 font-light"
          >
            <motion.span
              className="drop-shadow-lg"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255, 255, 255, 0)",
                  "0 0 15px rgba(255, 255, 255, 0.5)",
                  "0 0 0px rgba(255, 255, 255, 0)"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              IT LOGIC LABS
            </motion.span>
          </motion.div>

          {/* Rotating Technology Terms */}
          <motion.div
            key={currentTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[60px] flex items-center justify-center"
          >
            <div className="flex items-center space-x-3 bg-slate-800/60 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50 shadow-lg">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <CurrentIcon className={`w-6 h-6 ${techTerms[currentTech].color} drop-shadow-md`} />
              </motion.div>
              <span className="text-lg sm:text-xl text-white font-medium">
                {techTerms[currentTech].text}
              </span>
            </div>
          </motion.div>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-lg"
          >
            Expert chip-level repairs, screen replacements, and complete laptop solutions
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="pt-8"
          >
            <motion.button
              onClick={onBookRepair}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-orange-700 shadow-2xl relative overflow-hidden border border-orange-400/30"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Button Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <span className="relative z-10 drop-shadow-md">Book a Repair</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer drop-shadow-lg"
        >
          <motion.svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}