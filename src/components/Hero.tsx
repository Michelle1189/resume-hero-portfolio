
import React from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 pb-0 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block animate-fade-in text-sm md:text-base font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-6">
            Information Systems & Mathematics Graduate
          </span>
          
          <h1 className="animate-slide-down text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Michelle Zhang
          </h1>
          
          <p className="animate-fade-in-delay text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Data Analyst & Machine Learning Specialist
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-delay">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="px-8 py-3 rounded-full bg-secondary text-foreground font-medium transition-all hover:bg-secondary/80"
            >
              View Experience
            </a>
          </div>
          
          <div className="mt-16 animate-fade-in-delay">
            <div className="flex justify-center space-x-6">
              {[
                { name: 'Seattle, WA', icon: 'map-pin' },
                { name: 'michelle.zhang1189@gmail.com', icon: 'mail' },
                { name: 'LinkedIn', icon: 'linkedin' }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className={cn("w-5 h-5 mr-2", `icon-${item.icon}`)}>
                    {item.icon === 'map-pin' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    )}
                    {item.icon === 'mail' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    )}
                    {item.icon === 'linkedin' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    )}
                  </span>
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-xs mb-2">Scroll Down</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
