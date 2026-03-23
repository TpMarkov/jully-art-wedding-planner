import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JULLY_ART_DATA } from '../constants';
import { X } from 'lucide-react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="pt-32 pb-20">
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-mono text-secondary uppercase tracking-widest mb-4 block">Портфолио</span>
            <h1 className="text-heading-xlarge font-serif italic mb-8">Галерия</h1>
            <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
              Разгледайте моменти от нашите най-красиви събития. Всяка снимка разказва история за любов, стил и внимание към детайла.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {JULLY_ART_DATA.gallery.map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${idx}`} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-xs font-mono uppercase tracking-widest border border-inverted/50 px-4 py-2 rounded-full">Виж детайли</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 p-2 text-inverted hover:bg-inverted/10 rounded-full transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X className="size-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
