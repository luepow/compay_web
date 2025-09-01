import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Products from './components/Products';
import WorldwidePayments from './components/WorldwidePayments';
import Compliance from './components/Compliance';
import ForBusinesses from './components/ForBusinesses';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Licenses from './components/Licenses';
import Footer from './components/Footer';
import LeadModal from './components/LeadModal';
import FloatingContact from './components/FloatingContact';

function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    console.log('Dark mode state changed:', isDarkMode);
  }, [isDarkMode]);

  // Debug: Log initial state
  useEffect(() => {
    console.log('Initial dark mode state:', isDarkMode);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Debug info - remove this later */}
      <div className="fixed top-20 right-4 z-50 bg-red-500 text-white p-2 rounded text-xs">
        Dark Mode: {isDarkMode ? 'ON' : 'OFF'}
      </div>
      {/* Test component to verify dark mode */}
      <div className="fixed top-32 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded text-xs">
        <p className="text-gray-900 dark:text-white">Test: This should change color</p>
        <p className="text-gray-600 dark:text-gray-300">Secondary text</p>
      </div>
      <div className="bg-[#F7F9FB] dark:bg-gray-900 transition-colors duration-300">
        <Header 
          onOpenAccount={() => setIsLeadModalOpen(true)}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <Hero onOpenAccount={() => setIsLeadModalOpen(true)} />
        <HowItWorks />
        <Products />
        <WorldwidePayments />
        <Compliance />
        <ForBusinesses />
        <Testimonials />
        <FAQ />
        <Licenses />
        <Footer />
        
        <LeadModal 
          isOpen={isLeadModalOpen} 
          onClose={() => setIsLeadModalOpen(false)} 
        />
        <FloatingContact />
      </div>
    </div>
  );
}

export default App;