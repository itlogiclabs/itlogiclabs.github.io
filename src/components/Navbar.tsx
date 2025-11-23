import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import logoBrand from '../assets/logobrand.jpg'; 

interface NavbarProps {
  onNavigate: (section: string) => void;
  onCRMClick: () => void;
}

export default function Navbar({ onNavigate, onCRMClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Services', 'About Us', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src={logoBrand}
                alt="IT LOGIC LABS Logo"
                className="w-12 h-12 rounded-lg object-cover" // Removed border and increased size
              />
              <div className="text-2xl font-bold text-white">
                IT LOGIC <span className="text-orange-500">LABS</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase().replace(' ', '-'))}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
            <div className="relative group">
              <button
                onClick={onCRMClick}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg"
              >
                Enter CRM
              </button>
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                For Staff & Technicians Only
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-800 border-t border-slate-700"
        >
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item.toLowerCase().replace(' ', '-'));
                  setIsOpen(false);
                }}
                className="block w-full text-left text-gray-300 hover:text-orange-500 transition-colors duration-200 py-2"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                onCRMClick();
                setIsOpen(false);
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
            >
              Enter CRM
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}