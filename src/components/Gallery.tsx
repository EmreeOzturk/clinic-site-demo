import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/images';
import { Image } from './ui/Image';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our State-of-the-Art Facility</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Experience world-class care in our modern medical facility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="aspect-w-16 aspect-h-12">
                <Image
                  src={image}
                  alt={`Clinic Emre Facility ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  fallback="/images/placeholder-clinic.jpg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">Modern Medical Facility</h3>
                  <p className="text-sm opacity-90">State-of-the-art equipment and comfortable environment</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {Object.entries(images.facility).map(([key, image], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-12">
                <Image
                  src={image}
                  alt={key}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallback="/images/placeholder-facility.jpg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold capitalize mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experience comfort and luxury in our modern {key.toLowerCase()} area.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 