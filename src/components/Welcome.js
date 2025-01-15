import React, { useState, useEffect } from 'react';
import { Volume2, ShieldCheck, Sparkles, Menu, X ,MessageCircle, Heart, Navigation, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const features = [
    {
      Icon: Bell,
      title: "Smart Alert System",
      description: "Advanced alert system for doorbells, fire alarms, and sirens through intuitive vibrations and visual cues.",
      details: ["Real-time sound detection", "Customizable vibration patterns", "Emergency alert prioritization"]
    },
    {
      Icon: MessageCircle,
      title: "Communication Assistant",
      description: "Bridge communication gaps with real-time speech-to-text and text-to-speech capabilities.",
      details: ["AI-powered speech recognition", "Real-time transcription", "Natural text-to-speech conversion"]
    },
    {
      Icon: Heart,
      title: "Health Monitoring",
      description: "Continuous health tracking with emergency alerts for peace of mind.",
      details: ["Vital signs monitoring", "Emergency contact system", "24/7 health tracking"]
    },
    {
      Icon: Navigation,
      title: "Navigation Support",
      description: "Safe and intuitive navigation through public spaces with sensory feedback.",
      details: ["Street crossing assistance", "Public space navigation", "Haptic feedback system"]
    }
  ];
  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
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

      {/* Navbar with glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-lg z-50 border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group">
              <Volume2 className="h-8 w-8 text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />
              <span className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300">QUIETAURA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="hover:text-purple-400 transition-all duration-300 text-sm font-medium relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
              </a>
              <a href="/about" className="hover:text-purple-400 transition-all duration-300 text-sm font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
              </a>
              <a href="/contact" className="hover:text-purple-400 transition-all duration-300 text-sm font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
              </a>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-purple-900/20 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-purple-900/50 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 rounded-md hover:bg-purple-900/20 transition-colors text-sm font-medium">Features</a>
              <a href="#about" className="block px-3 py-2 rounded-md hover:bg-purple-900/20 transition-colors text-sm font-medium">About</a>
              <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-purple-900/20 transition-colors text-sm font-medium">Contact</a>
              <div className="px-3 py-2">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 relative">
        <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-8 relative">
            Where{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-gradient">
              Silence
            </span>{' '}
            Meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-gradient">
              Safety
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 mb-12">
            Experience the perfect harmony of tranquility and security. QuietAura creates your personal zone of peace in any environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/about"><button className="group px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg transition-all duration-300 text-lg font-semibold relative overflow-hidden hover:shadow-lg hover:shadow-purple-500/25">
            <span className="relative z-10">QuietAura</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 transform transition-transform group-hover:scale-x-[2] group-hover:scale-y-[2.5]" />
            </button></Link>
            <button className="px-8 py-4 border border-purple-500 rounded-lg hover:bg-purple-900/30 transition-all duration-300 text-lg font-semibold hover:border-purple-400">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-black/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { Icon: Volume2, title: "Detection of Sounds and giving feedback", description: "Advanced acoustic technology for hearing impaired people." },
              { Icon: ShieldCheck, title: "Safety First", description: "State-of-the-art security features to keep you protected in your quiet space." },
              { Icon: Sparkles, title: "Ambient Comfort", description: "Customize your environment with soothing ambient features and controls." }
            ].map(({ Icon, title, description }, index) => (
              <div 
                key={title}
                className="group flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-b from-purple-900/20 to-black hover:from-purple-900/30 hover:to-black transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <Icon className="h-12 w-12 text-purple-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Enhanced Features Section */}
      <div className="py-24 bg-black/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            Empowering Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ Icon, title, description, details }, index) => (
              <div 
                key={title}
                className="group relative flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-b from-purple-900/20 to-black hover:from-purple-900/30 hover:to-black transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="relative">
                  <Icon className="h-12 w-12 text-purple-400 mb-6 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <ul className="space-y-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {details.map((detail, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Showcase Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Advanced Sound Recognition
              </h2>
              <p className="text-gray-300 text-lg">
                Our AI-powered sound recognition system identifies and translates various sounds in real-time:
              </p>
              <ul className="space-y-4">
                {[
                  "Emergency sirens and alarms",
                  "Doorbell and phone rings",
                  "Vehicle horns and traffic signals",
                  "Human speech and conversations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <ShieldCheck className="h-6 w-6 text-purple-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about"><button className="px-8 py-2 mt-2 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 text-lg font-semibold">
                Learn About Our Technology
              </button></Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-purple-500/20 to-purple-900/20 animate-pulse" />
              <Volume2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 text-purple-400" />
            </div>
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

export default LandingPage;