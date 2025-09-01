import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onOpenAccount: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAccount, isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-full.svg" 
              alt="ComPay" 
              className="h-12 w-auto filter dark:brightness-0 dark:invert"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 dark:text-gray-300 hover:text-[#2BB3E4] transition-colors">Products</a>
            <a href="#business" className="text-gray-700 dark:text-gray-300 hover:text-[#2BB3E4] transition-colors">For Business</a>
            <a href="#compliance" className="text-gray-700 dark:text-gray-300 hover:text-[#2BB3E4] transition-colors">Security</a>
            <a href="mailto:support@compay.net" className="text-gray-700 dark:text-gray-300 hover:text-[#2BB3E4] transition-colors">Contact</a>
            
            <button
              onClick={() => {
                console.log('Theme button clicked, current isDarkMode:', isDarkMode);
                setIsDarkMode(!isDarkMode);
              }}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
            </button>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://secure.compay.net"
              className="text-[#2F80ED] hover:text-[#2BB3E4] font-medium transition-colors"
            >
              Secure Portal
            </a>
            <button
              onClick={onOpenAccount}
              className="bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Open Account
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <a href="#products" className="block text-gray-700 dark:text-gray-300 hover:text-[#2BB3E4] transition-colors">Products</a>
              <a href="#business" className="block text-gray-700 dark:text-gray-300 hover:text-[#2BB3E4] transition-colors">For Business</a>
              <a href="#compliance" className="block text-gray-700 dark:text-gray-300 hover:text-[#2BB3E4] transition-colors">Security</a>
              <a href="mailto:support@compay.net" className="block text-gray-700 dark:text-gray-300 hover:text-[#2BB3E4] transition-colors">Contact</a>
              
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={() => {
                    console.log('Mobile theme button clicked, current isDarkMode:', isDarkMode);
                    setIsDarkMode(!isDarkMode);
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {isDarkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
                </button>
                <a
                  href="https://secure.compay.net"
                  className="flex-1 text-center text-[#2F80ED] hover:text-[#2BB3E4] font-medium py-2 px-4 border border-[#2F80ED] rounded-xl transition-colors"
                >
                  Secure Portal
                </a>
                <button
                  onClick={onOpenAccount}
                  className="flex-1 bg-gradient-to-r from-[#B6DF5A] to-[#2BB3E4] text-white py-2 px-4 rounded-xl font-medium"
                >
                  Open Account
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;