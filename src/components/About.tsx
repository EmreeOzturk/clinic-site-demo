import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Our Clinic</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Story</h3>
              <p className="text-gray-600">
                Founded in 2003, our clinic has grown to become a leading healthcare provider in Turkey, 
                serving thousands of international patients with world-class medical care.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Medical Excellence</h3>
              <p className="text-gray-600">
                We combine cutting-edge technology with experienced healthcare professionals to deliver 
                exceptional patient outcomes that meet international standards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">
                Located in the heart of Antalya, our facility offers easy access to both premium 
                healthcare and world-renowned tourist destinations.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-blue-600">
              Our Mission: Delivering excellence in healthcare while ensuring patient comfort and satisfaction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};