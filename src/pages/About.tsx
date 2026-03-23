import React from 'react';
import { motion } from 'framer-motion';
import { JULLY_ART_DATA } from '../constants';

export const About = () => {
  return (
    <main className="pt-32 pb-20">
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-xs font-mono text-secondary uppercase tracking-widest mb-4 block">За нас</span>
              <h1 className="text-heading-xlarge font-serif italic mb-8">
                Историята на <br /> {JULLY_ART_DATA.name}
              </h1>
              <div className="space-y-6 text-secondary leading-relaxed">
                <p>
                  {JULLY_ART_DATA.description}
                </p>
                <p>
                  Водена от страстта към красивото и вниманието към детайла, {JULLY_ART_DATA.owner} създава агенцията с една цел: 
                  да превърне всеки личен празник в произведение на изкуството.
                </p>
                <p>
                  Ние вярваме, че всяко събитие е уникална история, която заслужава да бъде разказана по най-елегантния начин. 
                  Нашият екип съчетава креативност с безупречна логистика, за да гарантира, че вие и вашите гости ще се насладите на всеки момент.
                </p>
              </div>
              
              <div className="mt-12 pt-12 border-t border-inverted/10">
                <div className="flex items-center gap-6">
                  <div className="size-20 rounded-full overflow-hidden grayscale">
                    <img src="https://www.jullyart.com/common/introimg.jpg" alt={JULLY_ART_DATA.owner} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xl font-serif italic">{JULLY_ART_DATA.owner}</p>
                    <p className="text-xs text-secondary font-mono uppercase tracking-widest">Основател и управител</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <img 
                src="https://www.jullyart.com/common/introimg1.jpg" 
                alt="About Jully Art" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 px-6 md:px-12 border-t border-inverted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-mono text-secondary uppercase tracking-widest mb-4 block">Доверие и качество</span>
            <h2 className="text-heading-xlarge font-serif italic">Нашите Партньори</h2>
            <p className="text-secondary mt-6 max-w-2xl mx-auto">
              Работим с най-добрите професионалисти в бранша, за да гарантираме безупречното изпълнение на всяко събитие.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {JULLY_ART_DATA.partners.map((partner, idx) => (
              <a 
                key={idx} 
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 glass-morphism rounded-2xl flex items-center justify-center text-center group hover:bg-inverted hover:text-primary transition-all duration-500"
              >
                <span className="text-sm font-medium uppercase tracking-wider">{partner.name}</span>
              </a>
            ))}
          </div>

          <div className="mt-20 text-center text-xs text-secondary leading-relaxed max-w-3xl mx-auto opacity-60">
            Jully Art благодари на фотографите Милен Маринов, Воймир Василев, Христина Ханджиева, Александър Няголов, Владимир Балевски, Александър Илиев (Sanndo), Йордан Чакъров за съгласието в общата визия на сайта да бъдат използвани техни фотоси.
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-6 md:px-12 bg-inverted text-primary mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-serif italic mb-2">500+</p>
            <p className="text-xs font-mono uppercase tracking-widest opacity-60">Събития</p>
          </div>
          <div>
            <p className="text-5xl font-serif italic mb-2">1000+</p>
            <p className="text-xs font-mono uppercase tracking-widest opacity-60">Усмивки</p>
          </div>
          <div>
            <p className="text-5xl font-serif italic mb-2">10+</p>
            <p className="text-xs font-mono uppercase tracking-widest opacity-60">Години опит</p>
          </div>
          <div>
            <p className="text-5xl font-serif italic mb-2">100%</p>
            <p className="text-xs font-mono uppercase tracking-widest opacity-60">Отдаденост</p>
          </div>
        </div>
      </section>
    </main>
  );
};
