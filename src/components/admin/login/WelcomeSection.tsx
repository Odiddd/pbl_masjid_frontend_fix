// components/WelcomeSection.tsx
import React from 'react';

const WelcomeSection: React.FC = () => {
  return (
    <div className="max-w-lg text-center space-y-8">
      {/* Main Heading */}
      <div className="space-y-4">
        <h1 className="text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                    ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
        </h1>
        <p className="text-indigo-800 font-serif font-semibold text-lg leading-relaxed max-w-md mx-auto ">
          Selamat datang, Administrator! 
        </p>
        <p className="text-teal-800 font-serif font-semibold text-lg leading-relaxed max-w-md mx-auto ">
          Silakan login menggunakan akun Anda untuk mengakses fitur-fitur pengelolaan
           website dan melakukan konfigurasi yang diperlukan.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="relative">
        {/* Floating Cards */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl rotate-12 backdrop-blur-sm border border-white/10"></div>
        <div className="absolute -top-16 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg -rotate-12 backdrop-blur-sm border border-white/10"></div>
        <div className="absolute top-20 -right-8 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full backdrop-blur-sm border border-white/10"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="w-80 h-80 mx-auto opacity-30">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="welcomeGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#welcomeGrid)" />
          </svg>
        </div>
      </div>

      {/* Features List */}
      {/* <div className="space-y-4 text-left max-w-sm mx-auto">
        {[
          { icon: '🚀', text: 'Fast and secure authentication' },
          { icon: '🎨', text: 'Beautiful and modern interface' },
          { icon: '📱', text: 'Responsive design for all devices' }
        ].map((feature, index) => (
          <div key={index} className="flex items-center space-x-3 text-slate-300">
            <span className="text-2xl">{feature.icon}</span>
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </div> */}

      {/* Bottom Decorative Line */}
      {/* <div className="flex justify-center">
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div> */}
    </div>
  );
};

export default WelcomeSection;