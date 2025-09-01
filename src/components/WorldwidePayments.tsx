import React from 'react';

const regions = [
  { name: 'North America', time: '1-2 hours', coverage: '99.9%' },
  { name: 'Europe', time: '2-4 hours', coverage: '99.5%' },
  { name: 'Asia Pacific', time: '4-6 hours', coverage: '98.8%' },
  { name: 'Latin America', time: '2-6 hours', coverage: '97.2%' },
  { name: 'Africa', time: '6-12 hours', coverage: '95.1%' },
  { name: 'Middle East', time: '4-8 hours', coverage: '96.7%' }
];

const WorldwidePayments: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1B1B1B] dark:text-white mb-6">
            Payments Everywhere
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            International liquidity and coverage with certified banking partners and processors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Interactive World Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#F7F9FB] to-white dark:from-gray-700 dark:to-gray-600 p-8 rounded-3xl shadow-xl">
              <svg className="w-full h-80" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B6DF5A" />
                    <stop offset="50%" stopColor="#2BB3E4" />
                    <stop offset="100%" stopColor="#2F80ED" />
                  </linearGradient>
                </defs>
                
                {/* Simplified world continents */}
                <g fill="url(#mapGradient)" opacity="0.2">
                  {/* North America */}
                  <ellipse cx="200" cy="150" rx="80" ry="60" />
                  {/* Europe */}
                  <ellipse cx="400" cy="120" rx="60" ry="40" />
                  {/* Asia */}
                  <ellipse cx="600" cy="140" rx="100" ry="70" />
                  {/* South America */}
                  <ellipse cx="250" cy="280" rx="50" ry="80" />
                  {/* Africa */}
                  <ellipse cx="420" cy="220" rx="60" ry="90" />
                  {/* Australia */}
                  <ellipse cx="650" cy="300" rx="40" ry="25" />
                </g>

                {/* Animated connection arcs */}
                <g className="animate-pulse">
                  <path d="M200 150 Q400 50 600 140" fill="none" stroke="#2BB3E4" strokeWidth="2" opacity="0.6"/>
                  <path d="M250 280 Q450 180 650 300" fill="none" stroke="#B6DF5A" strokeWidth="2" opacity="0.6"/>
                  <path d="M200 150 Q320 220 420 220" fill="none" stroke="#2F80ED" strokeWidth="2" opacity="0.6"/>
                </g>

                {/* Pulsing points */}
                <g>
                  <circle cx="200" cy="150" r="6" fill="#2BB3E4" className="animate-ping" />
                  <circle cx="400" cy="120" r="6" fill="#B6DF5A" className="animate-ping" style={{animationDelay: '0.5s'}} />
                  <circle cx="600" cy="140" r="6" fill="#2F80ED" className="animate-ping" style={{animationDelay: '1s'}} />
                  <circle cx="250" cy="280" r="6" fill="#2BB3E4" className="animate-ping" style={{animationDelay: '1.5s'}} />
                  <circle cx="420" cy="220" r="6" fill="#B6DF5A" className="animate-ping" style={{animationDelay: '2s'}} />
                  <circle cx="650" cy="300" r="6" fill="#2F80ED" className="animate-ping" style={{animationDelay: '2.5s'}} />
                </g>
              </svg>
            </div>
          </div>

          {/* Regions List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1B1B1B] dark:text-white mb-8">
              Global Coverage & Speed
            </h3>
            
            <div className="space-y-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-[#F7F9FB] dark:bg-gray-700 rounded-2xl hover:shadow-lg transition-all duration-200"
                >
                  <div>
                    <h4 className="font-semibold text-[#1B1B1B] dark:text-white">{region.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Coverage: {region.coverage}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[#2BB3E4] font-medium">{region.time}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">Avg. delivery</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldwidePayments;