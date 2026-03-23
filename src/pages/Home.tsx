import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Camera, MapPin, ChevronRight, Star, Quote, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { JULLY_ART_DATA } from '../constants';

export const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.jullyart.com/common/hero-img.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/60 to-primary" />
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-inverted/10 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md">
              {JULLY_ART_DATA.location}
            </span>
            <h1 className="text-heading-xxlarge font-serif italic mb-6">
              {JULLY_ART_DATA.tagline}
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              {JULLY_ART_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/kontakti" className="w-full sm:w-auto px-10 py-4 rounded-full bg-inverted text-primary font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
                Започнете планирането <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/galeriq" className="w-full sm:w-auto px-10 py-4 rounded-full border border-inverted/20 font-medium hover:bg-inverted/5 transition-all">
                Вижте галерията
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6 md:px-12 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-heading-xlarge font-serif italic mb-12">
              "Вкусът не се ражда. Той се изгражда. <br />
              Детайл по детайл."
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div className="space-y-4">
                <span className="text-xs font-mono text-secondary">01 / ВИЗИЯ</span>
                <p className="text-sm text-secondary leading-relaxed">
                  {JULLY_ART_DATA.manifesto.vision}
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-xs font-mono text-secondary">02 / ПРЕЦИЗНОСТ</span>
                <p className="text-sm text-secondary leading-relaxed">
                  {JULLY_ART_DATA.manifesto.precision}
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-xs font-mono text-secondary">03 / ЕМОЦИЯ</span>
                <p className="text-sm text-secondary leading-relaxed">
                  {JULLY_ART_DATA.manifesto.emotion}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-secondary uppercase tracking-widest mb-4 block">Нашият опит</span>
              <h2 className="text-heading-xlarge font-serif italic">Курирани услуги</h2>
            </div>
            <Link to="/uslugi" className="text-inverted hover:underline flex items-center gap-2">
              Вижте всички услуги <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {JULLY_ART_DATA.services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif italic mb-2">{service.title}</h3>
                  <p className="text-xs text-secondary leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-inverted text-inverted" />)}
            </div>
            <h2 className="text-heading-xlarge font-serif italic">Мнения на клиенти</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {JULLY_ART_DATA.testimonials.map((t, idx) => (
              <div key={idx} className="glass-morphism p-12 rounded-3xl space-y-6">
                <p className="text-xl font-serif italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full overflow-hidden">
                    <img src={t.image} alt={t.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-xs text-secondary font-mono">{t.date} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-32 px-6 md:px-12 border-t border-inverted/5">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-xs font-mono text-secondary uppercase tracking-widest mb-12 block">Нашите партньори</span>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50">
            {JULLY_ART_DATA.partners.map((partner, idx) => (
              <a 
                key={idx} 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-serif italic hover:text-inverted hover:opacity-100 transition-all"
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
