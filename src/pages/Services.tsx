import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JULLY_ART_DATA } from '../constants';
import { ChevronRight, Plus, Minus, Check, Crown, Gem, Send, Star, Camera, Utensils } from 'lucide-react';

export const Services = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const gridServices = [
    {
      title: "Организиране на събития",
      description: "Да организираме празника ви е удоволствие и предизвикателство. Независимо дали е за двама или за двеста души, празникът трябва да има своята атмосфера и емоция.",
      icon: Crown
    },
    {
      title: "Консултиране и планиране",
      description: "Планирането е ключът към успешния празник. Заедно ще обсъдим всички идеи и детайли, за да сте спокойни в празничния ден.",
      icon: Gem
    },
    {
      title: "Координация и контрол",
      description: "Екипът на Jully Art координира всички участници, за да осигури гладкото протичане на празничния ден.",
      icon: Send
    },
    {
      title: "Декорация и дизайн",
      description: "Създаваме уникален дизайн и декорация, които отразяват вашия стил и същност.",
      icon: Star
    },
    {
      title: "Видеозаснемане и фотография",
      description: "Професионалните ни екипи ще запечатат всеки ценен момент, за да останат спомените живи завинаги.",
      icon: Camera
    },
    {
      title: "Избор на меню",
      description: "Подбираме и предлагаме меню, което ще очарова вашите гости и ще подхожда на стила на събитието.",
      icon: Utensils
    }
  ];

  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-mono text-secondary uppercase tracking-widest mb-4 block">Какво предлагаме</span>
            <h1 className="text-heading-xlarge font-serif italic mb-8">Нашите Услуги</h1>
            <p className="text-secondary max-w-2xl mx-auto leading-relaxed">
              Вашето събитие пише своя собствена история – изявление, което остава с вас дълго след края на празника. 
              Ние сме вашите опитни, вдъхновени и детайлно ориентирани консултанти.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="px-6 md:px-12 py-24 bg-inverted/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif italic mb-6">Как работим?</h2>
            <p className="text-secondary max-w-2xl mx-auto">
              Най-важното е, че винаги ще бъдем на разположение, за да ви подкрепим на всяка стъпка от пътя, 
              защото знаем, че личната грижа и внимание имат значение.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {JULLY_ART_DATA.howWeWork.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-inverted/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="text-xl font-serif italic mb-4">{step.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Services */}
      <section className="px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {gridServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="space-y-6"
              >
                <service.icon className="size-10 text-inverted/60" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif italic">{service.title}</h3>
                <p className="text-secondary leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="px-6 md:px-12 py-32 bg-inverted/5">
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
                    <Check className="size-4 text-inverted" /> Индивидуален подход към всеки детайл
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <Check className="size-4 text-inverted" /> Професионална координация и логистика
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <Check className="size-4 text-inverted" /> Креативни решения и уникален дизайн
                  </li>
                </ul>
                <button aria-label={`Запитване за услуга ${service.title}`} className="mt-8 px-8 py-3 rounded-full border border-inverted/20 hover:bg-inverted hover:text-primary transition-all">
                  Запитване за услуга
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Services Accordion */}
      <section className="px-6 md:px-12 py-32 bg-inverted text-primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif italic mb-6">Детайли на услугите</h2>
            <p className="opacity-70">
              Разгледайте какво точно включва всяка от нашите основни категории услуги.
            </p>
          </div>

          <div className="space-y-4">
            {JULLY_ART_DATA.detailedServices.map((service, idx) => (
              <div key={service.title} className="border-b border-primary/10">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <h3 className="text-2xl font-serif italic group-hover:translate-x-2 transition-transform">
                    {service.title}
                  </h3>
                  {activeAccordion === idx ? <Minus className="size-5" /> : <Plus className="size-5" />}
                </button>
                <AnimatePresence>
                  {activeAccordion === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 space-y-6">
                        <p className="text-lg opacity-80 italic">{service.description}</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.items.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm opacity-70">
                              <div className="size-1.5 rounded-full bg-primary/40" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
