import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiCalendar, FiDollarSign, FiCheck } from 'react-icons/fi';
import { services } from '../data/services';

export const Services: React.FC = () => {
  const dentalServices = services.filter(service => service.category === 'dental');
  const aestheticServices = services.filter(service => service.category === 'aesthetic');

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive range of medical procedures delivered with the highest standards of care
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Dental Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </span>
              Dental Procedures
            </h3>
            <div className="space-y-6">
              {dentalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all group"
                >
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <FiClock className="mr-2 text-blue-400" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FiCalendar className="mr-2 text-blue-400" />
                      <span className="text-sm">{service.recovery}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6 text-gray-300">
                    <FiDollarSign className="mr-2 text-blue-400" />
                    <span className="text-sm">{service.priceRange}</span>
                  </div>

                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors"
                      >
                        <FiCheck className="mr-2 text-blue-400" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <a
                      href="tel:+17755499348"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="mr-2">Book Consultation</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Aesthetic Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </span>
              Aesthetic Procedures
            </h3>
            <div className="space-y-6">
              {aestheticServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all group"
                >
                  <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <FiClock className="mr-2 text-blue-400" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FiCalendar className="mr-2 text-blue-400" />
                      <span className="text-sm">{service.recovery}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6 text-gray-300">
                    <FiDollarSign className="mr-2 text-blue-400" />
                    <span className="text-sm">{service.priceRange}</span>
                  </div>

                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors"
                      >
                        <FiCheck className="mr-2 text-blue-400" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <a
                      href="tel:+17755499348"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="mr-2">Book Consultation</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
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