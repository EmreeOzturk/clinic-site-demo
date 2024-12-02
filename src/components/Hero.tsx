import React from 'react';
import { motion } from 'framer-motion';
import { statistics } from '../data/statistics';
import { images } from '../data/images';
import { FiPhone } from 'react-icons/fi';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      <div className="container relative mx-auto px-6 pt-20 pb-24 sm:pt-32 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Premium Healthcare{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                in Turkey
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience world-class medical care at international standards with cutting-edge technology and expert healthcare professionals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:+17755499348"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-blue-500/25"
              >
                <FiPhone className="w-5 h-5 animate-pulse" />
                <span>Call Now</span>
              </a>
              <button className="bg-gray-800 text-gray-100 hover:bg-gray-700 px-8 py-3 rounded-full font-semibold transition-all border border-gray-700 hover:border-gray-600">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={images.hero}
                alt="Modern Medical Facility"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] border border-gray-800"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/50 to-transparent" />
            </div>
            
            {/* Floating stats cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {statistics.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-700/50"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};