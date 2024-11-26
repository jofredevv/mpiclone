import React, { useState, useEffect } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileMatcher from './ProfileMatcher';

const phrases = [
  "a nuevos contactos",
  "a nuevas oportunidades",
  "a nuevos empleos",
  "a nuevas conexiones"
];

interface HeroProps {
  onSearch: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMatcherOpen, setIsMatcherOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setIsAnimating(true);
      }, 200);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const containerVariants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      width: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-accent via-white to-white pt-32 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent via-white to-white opacity-90" />
        <div className="absolute inset-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CC5500' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.1, 0.9, 1],
              opacity: [0, 0.2, 0.1, 0.15]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 bg-gradient-radial from-orange/5 via-transparent to-transparent"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(204, 85, 0, 0.1) 0%, rgba(204, 85, 0, 0) 70%)',
            }}
          />
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ 
              scale: [1.2, 0.9, 1.1, 1],
              opacity: [0, 0.15, 0.1, 0.12]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 70%, rgba(204, 85, 0, 0.08) 0%, rgba(204, 85, 0, 0) 60%)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-12">
            <motion.img
              src="https://i.imgur.com/iNJNAnm.png"
              alt="Hero Illustration"
              className="w-full max-w-md mx-auto h-auto"
              style={{ maxHeight: '120px', objectFit: 'contain' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          
          <h1 className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl">
            <span className="block text-wine">Democratizando tu acceso</span>
            <span className="block h-[1.5em] relative">
              <AnimatePresence mode="wait">
                {isAnimating && (
                  <div className="absolute w-full flex justify-center">
                    <motion.div
                      className="relative overflow-hidden"
                      variants={containerVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <motion.span
                        className="block text-orange whitespace-nowrap"
                        variants={textVariants}
                      >
                        {phrases[currentPhrase]}
                      </motion.span>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Contacta con perfiles relevantes de tu sector en menos de un minuto.
          </p>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-lg shadow-md p-2">
              <Search className="h-5 w-5 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Busca a la persona perfecta para tí"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 text-gray-700 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-orange hover:bg-orange-dark text-white px-6 py-2 rounded-md transition-colors flex items-center"
              >
                Buscar
              </button>
            </form>
          </div>

          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <button 
                onClick={() => setIsMatcherOpen(true)}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange hover:bg-orange-dark transition-colors md:py-4 md:text-lg md:px-10"
              >
                O te encontramos tu perfil perfecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProfileMatcher 
        isOpen={isMatcherOpen}
        onClose={() => setIsMatcherOpen(false)}
      />
    </div>
  );
}