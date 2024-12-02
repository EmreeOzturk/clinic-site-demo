import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="tel:+17755499348" 
                className="flex items-center hover:text-blue-400 transition-colors group"
              >
                <FiPhone className="mr-2 group-hover:animate-pulse" />
                <span>+1 (775) 549-9348</span>
              </a>
              <a href="mailto:contact@clinicemre.com" className="flex items-center hover:text-blue-400 transition-colors">
                <FiMail className="mr-2" />
                <span>contact@clinicemre.com</span>
              </a>
              <div className="flex items-center">
                <FiMapPin className="mr-2" />
                <span>Antalya, Turkey</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Certifications</h3>
            <div className="flex space-x-4">
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <img 
                  src="/logos/jci-logo.png" 
                  alt="JCI Accredited" 
                  className="h-12 w-auto opacity-90"
                />
              </div>
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <img 
                  src="/logos/iso-logo.png" 
                  alt="ISO Certified" 
                  className="h-12 w-auto opacity-90"
                />
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-sm">
              Stay updated with our latest treatments and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FiFacebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FiInstagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FiTwitter size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Clinic Emre. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 