import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BarChart, Bot, Cloud, Home, ShoppingCart, Tractor, DollarSign, UserPlus, LogIn, Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'Accueil', path: '/', icon: Home },
  { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
  { name: 'AgriBot', path: '/agribot', icon: Bot },
  { name: 'Météo', path: '/weather', icon: Cloud },
  { name: 'Équipements', path: '/equipment', icon: Tractor },
  { name: 'Investissement', path: '/investment', icon: DollarSign },
  { name: 'Analytics', path: '/analytics', icon: BarChart },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all ${
                    isActive 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`
                }
              >
                <link.icon className="h-4 w-4" />
                <span className="text-sm">{link.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="flex items-center gap-2 text-gray-600 hover:text-green-700 font-medium px-4 py-2 rounded-lg transition-colors">
              <LogIn className="h-4 w-4"/>
              <span>Se connecter</span>
            </button>
            <button className="flex items-center gap-2 bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all shadow-sm hover:shadow-md">
              <UserPlus className="h-4 w-4"/>
              <span>S'inscrire</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg font-medium transition-all ${
                      isActive 
                        ? 'text-green-600 bg-green-50' 
                        : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                    }`
                  }
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <button className="w-full flex items-center justify-center gap-2 text-gray-600 font-medium px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                <LogIn className="h-4 w-4"/>
                <span>Se connecter</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700">
                <UserPlus className="h-4 w-4"/>
                <span>S'inscrire</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
