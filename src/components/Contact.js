import React, { useState,useEffect } from 'react';
import { Volume2, Mail, MapPin, Phone, Send, Menu, X } from 'lucide-react';

const ContactPage = () => {
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
      {/* Navigation - Keeping consistent with AboutPage */}
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
              <a href="/" className="block px-3 py-2 rounded-md hover:bg-purple-900/20 text-sm font-medium">Features</a>
              <a href="/about" className="block px-3 py-2 rounded-md hover:bg-purple-900/20 text-sm font-medium">About</a>
              <a href="/contact" className="block px-3 py-2 rounded-md hover:bg-purple-900/20 text-sm font-medium">Contact</a>
              <div className="px-3 py-2">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 text-sm font-medium shadow-lg shadow-purple-900/50">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Hero Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Get in <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about QuietAura? We're here to help you create your perfect silent sanctuary.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-b from-purple-950/30 to-black p-8 rounded-xl border border-purple-900/20 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300">
              <Mail className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400">support@quietaura.com</p>
              <p className="text-gray-400">sales@quietaura.com</p>
            </div>

            <div className="bg-gradient-to-b from-purple-950/30 to-black p-8 rounded-xl border border-purple-900/20 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300">
              <MapPin className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-400">123 Innovation Drive</p>
              <p className="text-gray-400">Silicon Valley, CA 94025</p>
            </div>

            <div className="bg-gradient-to-b from-purple-950/30 to-black p-8 rounded-xl border border-purple-900/20 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300">
              <Phone className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <p className="text-gray-400">Mon - Fri, 9am - 6pm PST</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-purple-950/30 to-black p-8 rounded-xl border border-purple-900/20 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-black border border-purple-900/50 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-black border border-purple-900/50 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-black border border-purple-900/50 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 bg-black border border-purple-900/50 rounded-lg focus:outline-none focus:border-purple-500 transition-colors h-32"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg hover:from-purple-600 hover:to-purple-800 transition-all duration-300 font-medium shadow-lg shadow-purple-900/50 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-purple-950/30 to-black rounded-xl border border-purple-900/20 shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src="/api/placeholder/1200/400" 
                alt="Location map" 
                className="w-full h-full object-cover opacity-80"
              />
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
    </div>
  );
};

export default ContactPage;