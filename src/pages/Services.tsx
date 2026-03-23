import React from 'react';
import { motion } from 'framer-motion';
import { JULLY_ART_DATA } from '../constants';
import { ChevronRight } from 'lucide-react';

export const Services = () => {
  return (
    <main className="pt-32 pb-20">
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-mono text-secondary uppercase tracking-widest mb-4 block">Какво предлагаме</span>
            <h1 className="text-heading-xlarge font-serif italic mb-8">Нашите Услуги</h1>
            <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
              Ние предлагаме пълен спектър от услуги за организиране на събития, 
              съобразени с вашите индивидуални нужди и бюджет.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-32">
          {JULLY_ART_DATA.services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="flex-1 space-y-6">
                <span className="text-xs font-mono text-secondary">0{idx + 1} / SERVICE</span>
                <h2 className="text-4xl font-serif italic">{service.title}</h2>
                <p className="text-secondary leading-relaxed text-lg">
                  {service.description}
                </p>
                <ul className="space-y-4 pt-6">
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <ChevronRight className="size-4 text-inverted" /> Индивидуален подход към всеки детайл
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <ChevronRight className="size-4 text-inverted" /> Професионална координация и логистика
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <ChevronRight className="size-4 text-inverted" /> Креативни решения и уникален дизайн
                  </li>
                </ul>
                <button aria-label={`Запитване за услуга ${service.title}`} className="mt-8 px-8 py-3 rounded-full border border-inverted/20 hover:bg-inverted hover:text-primary transition-all">
                  Запитване за услуга
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden transition-all duration-700">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};
