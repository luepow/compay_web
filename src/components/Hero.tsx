import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

interface HeroProps {
  onOpenAccount: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAccount }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background SVG World */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="worldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B6DF5A" />
              <stop offset="50%" stopColor="#2BB3E4" />
              <stop offset="100%" stopColor="#2F80ED" />
            </linearGradient>
          </defs>
          
          {/* World outline */}
          <circle cx="600" cy="400" r="200" fill="none" stroke="url(#worldGradient)" strokeWidth="2" opacity="0.3"/>
          
          {/* Connection lines */}
          <g className="animate-pulse">
            <path d="M400 300 Q600 200 800 350" fill="none" stroke="url(#worldGradient)" strokeWidth="1" opacity="0.6"/>
            <path d="M300 500 Q600 400 900 450" fill="none" stroke="url(#worldGradient)" strokeWidth="1" opacity="0.6"/>
            <path d="M200 400 Q600 300 1000 400" fill="none" stroke="url(#worldGradient)" strokeWidth="1" opacity="0.6"/>
          </g>
          
          {/* City points */}
          <g className="animate-ping">
            <circle cx="400" cy="300" r="4" fill="#2BB3E4" opacity="0.8"/>
            <circle cx="800" cy="350" r="4" fill="#B6DF5A" opacity="0.8"/>
            <circle cx="300" cy="500" r="4" fill="#2F80ED" opacity="0.8"/>
            <circle cx="900" cy="450" r="4" fill="#2BB3E4" opacity="0.8"/>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* MSB Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#2BB3E4]/20 shadow-lg">
            <Shield className="w-4 h-4 text-[#2F80ED]" />
            <span className="text-sm font-medium text-[#2F80ED]">MSB — Florida Licensed</span>
          </div>

          {/* Main Headlines */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1B1B1B] dark:text-white leading-tight">
              Global payments,{' '}
              <span className="bg-gradient-to-r from-[#B6DF5A] via-[#2BB3E4] to-[#2F80ED] bg-clip-text text-transparent">
                no borders
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ComPay is a licensed Money Services Business in Florida. Send and receive money anywhere in the world, 
              with full AML/KYC compliance.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onOpenAccount}
              className="group bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Open Account</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="https://secure.compay.net"
              className="group bg-white dark:bg-gray-800 text-[#2F80ED] dark:text-[#2BB3E4] px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-[#2F80ED]/20 dark:border-[#2BB3E4]/20 hover:border-[#2F80ED] dark:hover:border-[#2BB3E4] hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <span>Secure Portal</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;