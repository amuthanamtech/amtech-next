'use client';

// components/StackingCards.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StackingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const autoRotateRef = useRef(null);
  
  const cards = [
    {
      title: "Project Management",
      description: "Streamline your projects with intuitive tools. Track progress, assign tasks, and collaborate in real-time.",
      color: "from-blue-600 to-indigo-700",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with powerful analytics. Visualize trends and make data-driven decisions.",
      color: "from-purple-600 to-pink-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Team Collaboration",
      description: "Bring your team together with seamless communication tools. Share files, chat, and coordinate effortlessly.",
      color: "from-emerald-600 to-teal-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Cloud Storage",
      description: "Secure, scalable cloud storage for all your files. Access your data anywhere, anytime with enterprise-grade security.",
      color: "from-amber-600 to-orange-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Customer Support",
      description: "Deliver exceptional customer experiences with our integrated support tools and ticketing system.",
      color: "from-rose-600 to-red-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    }
  ];

  const goToNext = () => {
    if (activeIndex === cards.length - 1) return;
    setDirection('next');
    setActiveIndex(prev => prev + 1);
  };

  const goToPrev = () => {
    if (activeIndex === 0) return;
    setDirection('prev');
    setActiveIndex(prev => prev - 1);
  };

  const goToCard = (index) => {
    setDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
  };

  // Auto-rotation logic with pause on hover
  useEffect(() => {
    if (isHovered) return;
    
    autoRotateRef.current = setTimeout(() => {
      if (activeIndex < cards.length - 1) {
        goToNext();
      } else {
        setActiveIndex(0);
      }
    }, 5000);
    
    return () => clearTimeout(autoRotateRef.current);
  }, [activeIndex, isHovered]);

  // Animation variants for framer motion
  const cardVariants = {
    initial: (direction) => ({
      x: direction === 'next' ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    },
    exit: (direction) => ({
      x: direction === 'next' ? '-100%' : '100%',
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    })
  };

  return (
    <div 
      className="w-full py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our suite of enterprise-grade tools designed to streamline your workflow
          </p>
        </div>
        
        <div className="relative flex justify-center items-center h-[550px]">
          {/* Background decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl"></div>
          </div>
          
          {/* Stacking cards container */}
          <div className="relative w-full max-w-3xl h-[450px]">
            {cards.map((card, index) => {
              const position = index - activeIndex;
              const isActive = index === activeIndex;
              const isPrev = index < activeIndex;
              const isNext = index > activeIndex;
              
              // Calculate styles for stacked cards
              let transform = '';
              let zIndex = 0;
              let opacity = 0.7;
              let scale = 0.9;
              let rotate = 0;
              
              if (isActive) {
                zIndex = 30;
                transform = 'translateX(0)';
                opacity = 1;
                scale = 1;
              } else if (isPrev) {
                zIndex = 20 - Math.abs(position);
                transform = `translateX(${-50 + position * 15}%)`;
                opacity = 0.7 - Math.abs(position) * 0.2;
                scale = 0.9 - Math.abs(position) * 0.1;
                rotate = -2;
              } else if (isNext) {
                zIndex = 20 - Math.abs(position);
                transform = `translateX(${50 - position * 15}%)`;
                opacity = 0.7 - Math.abs(position) * 0.2;
                scale = 0.9 - Math.abs(position) * 0.1;
                rotate = 2;
              }
              
              return (
                <motion.div
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br ${card.color} text-white overflow-hidden`}
                  style={{
                    zIndex,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    cursor: 'pointer',
                  }}
                  initial={false}
                  animate={{
                    x: transform,
                    opacity,
                    scale,
                    rotate,
                  }}
                  transition={{
                    type: 'spring',
                    damping: 25,
                    stiffness: 300,
                    mass: 0.5
                  }}
                  onClick={() => goToCard(index)}
                  whileHover={isActive ? { 
                    scale: 1.02,
                    boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.6)'
                  } : {}}
                  whileTap={isActive ? { scale: 0.98 } : {}}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full"></div>
                  
                  {/* Card content */}
                  <div className="z-10">
                    <div className="mb-6">
                      {card.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                    <p className="text-lg opacity-90">{card.description}</p>
                  </div>
                  
                  <div className="z-10 mt-8">
                    <button className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all border border-white/20">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrev}
            disabled={activeIndex === 0}
            className="absolute left-4 md:left-8 top-1/2 z-40 bg-black/50 backdrop-blur-sm p-3 rounded-full transform -translate-y-1/2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 transition-all border border-white/10"
            aria-label="Previous card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            disabled={activeIndex === cards.length - 1}
            className="absolute right-4 md:right-8 top-1/2 z-40 bg-black/50 backdrop-blur-sm p-3 rounded-full transform -translate-y-1/2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 transition-all border border-white/10"
            aria-label="Next card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '0%' : `${((activeIndex + 1) / cards.length) * 100}%` }}
              transition={{ 
                duration: 5,
                ease: "linear"
              }}
              key={activeIndex}
            />
          </div>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackingCards;