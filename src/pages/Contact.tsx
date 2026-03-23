import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Send, Twitter, Pin } from 'lucide-react';
import { JULLY_ART_DATA } from '../constants';

export const Contact = () => {
  return (
    <main className="pt-32 pb-20">
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-xs font-mono text-secondary uppercase tracking-widest mb-4 block">Контакти</span>
              <h1 className="text-heading-xlarge font-serif italic mb-8">
                Нека планираме <br /> вашето събитие
              </h1>
              <p className="text-secondary mb-12 leading-relaxed text-lg">
                Готови ли сте да създадем незабравими спомени заедно? 
                Свържете се с нас днес за безплатна консултация.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-full bg-inverted/5">
                    <Mail className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-secondary uppercase tracking-widest">Имейл</p>
                    <a href={`mailto:${JULLY_ART_DATA.email}`} className="text-xl hover:text-secondary transition-colors">{JULLY_ART_DATA.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-full bg-inverted/5">
                    <Phone className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-secondary uppercase tracking-widest">Телефон</p>
                    <a href={`tel:${JULLY_ART_DATA.phone.replace(/\s/g, '')}`} className="text-xl hover:text-secondary transition-colors">{JULLY_ART_DATA.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-full bg-inverted/5">
                    <MapPin className="size-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-secondary uppercase tracking-widest">Локация</p>
                    <p className="text-xl">{JULLY_ART_DATA.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href={JULLY_ART_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-inverted/10 hover:bg-inverted hover:text-primary transition-all" aria-label="Instagram">
                  <Instagram className="size-5" />
                </a>
                <a href={JULLY_ART_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-inverted/10 hover:bg-inverted hover:text-primary transition-all" aria-label="Facebook">
                  <Facebook className="size-5" />
                </a>
                <a href={JULLY_ART_DATA.socials.pinterest} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-inverted/10 hover:bg-inverted hover:text-primary transition-all" aria-label="Pinterest">
                  <Pin className="size-5" />
                </a>
                <a href={JULLY_ART_DATA.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-inverted/10 hover:bg-inverted hover:text-primary transition-all" aria-label="Twitter">
                  <Twitter className="size-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="glass-morphism p-10 rounded-3xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-secondary uppercase tracking-widest">Име</label>
                    <input type="text" className="w-full bg-inverted/5 border border-inverted/10 rounded-xl px-4 py-3 outline-none focus:border-inverted/30 transition-all" placeholder="Вашето име" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-secondary uppercase tracking-widest">Имейл</label>
                    <input type="email" className="w-full bg-inverted/5 border border-inverted/10 rounded-xl px-4 py-3 outline-none focus:border-inverted/30 transition-all" placeholder="email@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-secondary uppercase tracking-widest">Тип събитие</label>
                  <select className="w-full bg-inverted/5 border border-inverted/10 rounded-xl px-4 py-3 outline-none focus:border-inverted/30 transition-all appearance-none">
                    <option className="bg-primary">Сватба</option>
                    <option className="bg-primary">Корпоративно събитие</option>
                    <option className="bg-primary">Личен празник</option>
                    <option className="bg-primary">Друго</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-secondary uppercase tracking-widest">Съобщение</label>
                  <textarea rows={5} className="w-full bg-inverted/5 border border-inverted/10 rounded-xl px-4 py-3 outline-none focus:border-inverted/30 transition-all" placeholder="Разкажете ни за вашата мечта..." />
                </div>
                <button aria-label="Изпрати запитване за събитие" className="w-full py-4 rounded-full bg-inverted text-primary font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  Изпрати запитване <Send className="size-4" aria-hidden="true" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};
