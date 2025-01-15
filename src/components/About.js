import React, { useState, useEffect } from 'react';
import { Volume2, Users, Target, Lightbulb, Award, TrendingUp, X, Menu } from 'lucide-react';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[2px] h-96 bg-gradient-to-b from-transparent via-purple-600/40 to-transparent left-1/4 animate-slide-up" />
        <div className="absolute w-[2px] h-96 bg-gradient-to-b from-transparent via-purple-600/40 to-transparent left-2/4 animate-slide-down delay-300" />
        <div className="absolute w-[2px] h-96 bg-gradient-to-b from-transparent via-purple-600/40 to-transparent left-3/4 animate-slide-up delay-700" />
        
        {/* Radial gradient that follows mouse */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-40"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.2), transparent 80%)`
          }}
        />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Volume2 className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                QUIETAURA
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-purple-400 transition-colors text-sm font-medium">Features</a>
              <a href="/about" className="hover:text-purple-400 transition-colors text-sm font-medium">About</a>
              <a href="/contact" className="hover:text-purple-400 transition-colors text-sm font-medium">Contact</a>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 text-sm font-medium shadow-lg shadow-purple-900/50">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-purple-900/20"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-900/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 rounded-md hover:bg-purple-900/20 text-sm font-medium">Features</a>
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-purple-900/20 text-sm font-medium">About</a>
              <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-purple-900/20 text-sm font-medium">Contact</a>
              <div className="px-3 py-2">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 text-sm font-medium shadow-lg shadow-purple-900/50">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded in 2024, QuietAura emerged from a simple vision: where silence meets safety .
            </p>
          </div>
        </div>
      </div>
 
               
        
      
      {/* Mission Section */}
      <div className="bg-gradient-to-b from-purple-950/20 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              To revolutionize personal space management through innovative technology that creates perfect harmony between silence and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Vision",
                description: "Creating a world where everyone can experience perfect tranquility without compromising on safety."
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Pioneering breakthrough technologies in acoustic management and personal security systems."
              },
              {
                icon: Users,
                title: "Community",
                description: "Building a global community of users who value both peace and protection in their daily lives."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-purple-950/30 to-black p-8 rounded-xl border border-purple-900/20 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300">
                <item.icon className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Journey</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-b from-purple-950/30 to-black p-8 rounded-xl border border-purple-900/20 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <Award className="h-12 w-12 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">The Beginning</h3>
                  <p className="text-gray-300">
                    Started by a team of acoustic engineers and security experts, QuietAura was born from the realization that the world should be audible for hard to hear and hearing impaired people.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-purple-950/30 to-black p-8 rounded-xl border border-purple-900/20 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <TrendingUp className="h-12 w-12 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Growth & Innovation</h3>
                  <p className="text-gray-300">
                    As our technology evolved, we expanded our reach globally, partnering with leading tech companies and security firms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-b from-purple-950/20 to-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Innovation", description: "Pushing boundaries in acoustic and security technology" },
              { title: "Integrity", description: "Maintaining the highest standards of trust and transparency" },
              { title: "Impact", description: "Creating meaningful change in people's daily lives" },
              { title: "Inclusion", description: "Building solutions that work for hard to hear and hearing impaired people" }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-b from-purple-950/30 to-black p-6 rounded-xl border border-purple-900/20 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes slide-up {
          0%, 100% { transform: translateY(100vh); }
          50% { transform: translateY(-100vh); }
        }
        
        @keyframes slide-down {
          0%, 100% { transform: translateY(-100vh); }
          50% { transform: translateY(100vh); }
        }
        
        .animate-slide-up {
          animation: slide-up 15s linear infinite;
        }
        
        .animate-slide-down {
          animation: slide-down 15s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;