'use client';

// components/StackingCards.jsx
import { useState, useEffect } from 'react';

const StackingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const cards = [
    {
      title: "Project Management",
      description: "Streamline your projects with our intuitive tools. Track progress, assign tasks, and collaborate in real-time.",
      color: "bg-gradient-to-r from-blue-500 to-indigo-600"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with powerful analytics. Visualize trends and make data-driven decisions.",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      title: "Team Collaboration",
      description: "Bring your team together with seamless communication tools. Share files, chat, and coordinate effortlessly.",
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    },
    {
      title: "Cloud Storage",
      description: "Secure, scalable cloud storage for all your files. Access your data anywhere, anytime.",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500"
    },
    {
      title: "Customer Support",
      description: "Deliver exceptional customer experiences with our integrated support tools and ticketing system.",
      color: "bg-gradient-to-r from-red-500 to-rose-500"
    }
  ];

  const goToNext = () => {
    if (isAnimating || activeIndex === cards.length - 1) return;
    
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(prev => prev + 1);
      setIsAnimating(false);
    }, 300);
  };

  const goToPrev = () => {
    if (isAnimating || activeIndex === 0) return;
    
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(prev => prev - 1);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < cards.length - 1) {
        goToNext();
      } else {
        setActiveIndex(0);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full">
        <div className="relative h-[500px]">
          {cards.map((card, index) => {
            const position = index - activeIndex;
            const isActive = index === activeIndex;
            const isPrev = index < activeIndex;
            const isNext = index > activeIndex;
            
            // Calculate styles based on position
            let transform = '';
            let zIndex = 0;
            let opacity = 1;
            let scale = 1;
            
            if (isActive) {
              zIndex = 30;
              transform = 'translateX(0)';
            } else if (isPrev) {
              zIndex = 20 - Math.abs(position);
              transform = `translateX(${-100 + position * 10}%)`;
              opacity = 0.7 - Math.abs(position) * 0.2;
              scale = 0.9 - Math.abs(position) * 0.1;
            } else if (isNext) {
              zIndex = 20 - Math.abs(position);
              transform = `translateX(${100 - position * 10}%)`;
              opacity = 0.7 - Math.abs(position) * 0.2;
              scale = 0.9 - Math.abs(position) * 0.1;
            }
            
            // Apply animation classes
            let transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            if (isAnimating && (isActive || isPrev || isNext)) {
              transition = 'all 0.3s ease-out';
            }
            
            return (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full rounded-3xl shadow-xl p-8 flex flex-col justify-center ${card.color} text-white`}
                style={{
                  transform: `${transform} scale(${scale})`,
                  zIndex,
                  opacity,
                  transition,
                }}
              >
                <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
                <p className="text-xl mb-6">{card.description}</p>
                <button className="mt-4 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold w-fit hover:bg-opacity-90 transition-all">
                  Learn More
                </button>
              </div>
            );
          })}
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrev}
            disabled={activeIndex === 0}
            className="absolute left-4 top-1/2 z-40 bg-white p-3 rounded-full shadow-lg transform -translate-y-1/2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all"
            aria-label="Previous card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            disabled={activeIndex === cards.length - 1}
            className="absolute right-4 top-1/2 z-40 bg-white p-3 rounded-full shadow-lg transform -translate-y-1/2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-all"
            aria-label="Next card"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-indigo-600 scale-125' : 'bg-gray-300'
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