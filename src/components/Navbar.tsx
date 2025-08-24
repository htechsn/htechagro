import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sprout, 
  Menu, 
  X, 
  Home, 
  BarChart3, 
  Bot, 
  ShoppingCart, 
  Cloud, 
  Coins, 
  Truck, 
  TrendingUp 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Tableau de bord', href: '/dashboard', icon: BarChart3 },
    { name: 'AgriBot IA', href: '/agribot', icon: Bot },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Météo', href: '/weather', icon: Cloud },
    { name: 'Investissement', href: '/investment', icon: Coins },
    { name: 'Équipement', href: '/equipment', icon: Truck },
    { name: 'Analytics', href: '/analytics', icon: TrendingUp },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg group-hover:from-green-700 group-hover:to-emerald-700 transition-all duration-200">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-800">SenAGRI</span>
            <span className="text-sm text-green-600 font-medium">Pro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-green-100 text-green-800'
                      : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-green-700 font-medium">
              Se connecter
            </button>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              S'inscrire
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-green-700 hover:bg-green-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-green-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-green-100 text-green-800'
                      : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          <div className="px-4 py-3 border-t border-green-200 space-y-2">
            <button className="w-full text-left text-gray-600 hover:text-green-700 font-medium py-2">
              Se connecter
            </button>
            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-lg font-medium">
              S'inscrire
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};