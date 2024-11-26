import React from 'react';
import { Menu, X, Search, User, ShoppingCart, UserPlus, LogIn } from 'lucide-react';
import Logo from './Logo';
import LanguageSelector from './LanguageSelector';

export default function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-8">
            <div onClick={() => onNavigate('home')} className="cursor-pointer">
              <Logo />
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => onNavigate('index')}
                className="text-gray-700 font-medium hover:text-orange transition-colors duration-200 flex items-center"
              >
                <Search className="h-4 w-4 mr-1.5" />
                Índice
              </button>
              
              <button 
                onClick={() => onNavigate('public-profile')}
                className="text-gray-700 font-medium hover:text-orange transition-colors duration-200"
              >
                Hazte Perfil Público
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('pricing')}
              className="text-gray-700 font-medium hover:text-orange transition-colors duration-200 flex items-center"
            >
              <ShoppingCart className="h-4 w-4 mr-1.5" />
              Comprar Tempos
            </button>
            
            <div className="relative">
              <button 
                className="flex items-center px-4 py-2 text-white font-medium bg-orange hover:bg-orange-dark rounded-md transition-colors duration-200"
                onMouseEnter={() => setShowDropdown(true)}
                onClick={() => onNavigate('login')}
              >
                <User className="h-4 w-4 mr-1.5" />
                Acceso
              </button>
              
              <div 
                className={`absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  showDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="py-1">
                  <button
                    onClick={() => {
                      onNavigate('signup');
                      setShowDropdown(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 w-full"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Regístrate
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('login');
                      setShowDropdown(false);
                    }}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 w-full"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Identifícate
                  </button>
                </div>
              </div>
            </div>

            <div className="border-l border-gray-200 pl-6">
              <LanguageSelector />
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => {
                onNavigate('index');
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-base text-gray-700 font-medium hover:text-orange transition-colors w-full text-left"
            >
              Índice
            </button>
            <button 
              onClick={() => {
                onNavigate('public-profile');
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-base text-gray-700 font-medium hover:text-orange transition-colors w-full text-left"
            >
              Hazte Perfil Público
            </button>
            <button 
              onClick={() => {
                onNavigate('pricing');
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-base text-gray-700 font-medium hover:text-orange transition-colors w-full text-left"
            >
              Comprar Tempos
            </button>
            <div className="px-4 py-2">
              <button 
                onClick={() => {
                  onNavigate('login');
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center px-4 py-2 text-white font-medium bg-orange hover:bg-orange-dark rounded-md transition-colors"
              >
                <User className="h-4 w-4 mr-2" />
                Acceso
              </button>
            </div>
            <div className="px-4 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}