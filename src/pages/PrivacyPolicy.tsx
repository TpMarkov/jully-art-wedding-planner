import React from 'react';
import { motion } from 'framer-motion';
import { JULLY_ART_DATA } from '../constants';

export const PrivacyPolicy = () => {
  return (
    <main className="pt-32 pb-20">
      <section className="bg-inverted/5 py-20 px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-heading-xlarge font-serif italic mb-4">Политика за поверителност</h1>
            <p className="text-xs font-mono text-secondary uppercase tracking-widest flex items-center justify-center gap-2">
              <span>Начало</span>
              <span className="opacity-30">•</span>
              <span>Политика за поверителност</span>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-12 text-secondary leading-relaxed"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">1. Въведение</h2>
              <p>
                Настоящата Политика за защита на личните данни има за цел да информира клиентите и посетителите на уебсайта jullyart.com относно начина, по който се събират, обработват и защитават личните им данни.
              </p>
              <p>
                {JULLY_ART_DATA.name} спазва изискванията на Регламент (ЕС) 2016/679 (GDPR) и действащото българско законодателство.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">2. Администратор на лични данни</h2>
              <ul className="space-y-2 list-none p-0">
                <li><strong>Наименование:</strong> ДЖУЛИ АРТ – ЮЛИАНА БЛИЗНАКОВА ЕТ</li>
                <li><strong>ЕИК:</strong> 200650142</li>
                <li><strong>ДДС №:</strong> BG200650142</li>
                <li><strong>Адрес:</strong> гр. Ловеч, ул. Тома Давидов №4</li>
                <li><strong>Имейл:</strong> {JULLY_ART_DATA.email}</li>
                <li><strong>Телефон:</strong> {JULLY_ART_DATA.phone}</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">3. Видове събирани лични данни</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Име и фамилия</li>
                <li>Телефонен номер</li>
                <li>Имейл адрес</li>
                <li>Информация от контактната форма</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">4. Цели на обработване</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Отговор на запитвания</li>
                <li>Организиране и планиране на събития</li>
                <li>Комуникация с клиенти</li>
                <li>Изпълнение на законови задължения</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">5. Права на субектите на данни</h2>
              <p>Вие разполагате със следните права по отношение на вашите лични данни:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Право на достъп</li>
                <li>Право на корекция</li>
                <li>Право на изтриване</li>
                <li>Право на ограничаване</li>
                <li>Право на възражение</li>
              </ul>
              <p>
                За упражняване на правата си можете да се свържете с нас на <strong>{JULLY_ART_DATA.email}</strong>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">6. Промени в политиката</h2>
              <p>
                JullyArt си запазва правото да актуализира настоящата политика. Актуалната версия е винаги достъпна на нашия уебсайт.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
