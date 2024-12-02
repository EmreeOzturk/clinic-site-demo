import React from 'react';
import { FiPhone } from 'react-icons/fi';

export const CallButton: React.FC = () => {
  return (
    <a
      href="tel:+17755499348"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors group"
      aria-label="Call us"
    >
      <FiPhone className="w-6 h-6 group-hover:animate-pulse" />
    </a>
  );
}; 