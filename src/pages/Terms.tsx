import React from 'react';
import { motion } from 'framer-motion';
import { JULLY_ART_DATA } from '../constants';

export const Terms = () => {
  return (
    <main className="pt-32 pb-20">
      <section className="bg-inverted/5 py-20 px-6 md:px-12 mb-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-heading-xlarge font-serif italic mb-4">Общи условия</h1>
            <p className="text-xs font-mono text-secondary uppercase tracking-widest flex items-center justify-center gap-2">
              <span>Начало</span>
              <span className="opacity-30">•</span>
              <span>Общи условия</span>
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
              <h2 className="text-2xl font-serif italic text-inverted">Въведение</h2>
              <p className="text-xs text-secondary/60">Дата на актуализация: 20.11.2024 г.</p>
              <p>
                Моля, прочетете внимателно настоящите Общи условия преди да използвате уебсайта jullyart.com. С използването на сайта Вие се съгласявате с настоящите Общи условия.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">I. Предмет</h2>
              <p>
                Настоящите Общи условия уреждат взаимоотношенията между JullyArt и потребителите на уебсайта jullyart.com при предоставяне на информация, консултации и услуги, свързани с организиране на събития.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">II. Данни за търговеца</h2>
              <ul className="space-y-2 list-none p-0">
                <li><strong>Наименование:</strong> ДЖУЛИ АРТ – ЮЛИАНА БЛИЗНАКОВА ЕТ</li>
                <li><strong>ЕИК:</strong> 200650142</li>
                <li><strong>ДДС №:</strong> BG200650142</li>
                <li><strong>Адрес:</strong> гр. Ловеч, ул. Тома Давидов №4</li>
                <li><strong>Имейл:</strong> {JULLY_ART_DATA.email}</li>
                <li><strong>Телефон:</strong> {JULLY_ART_DATA.phone}</li>
                <li><strong>Уебсайт:</strong> <a href="https://jullyart.com" className="underline hover:text-inverted">https://jullyart.com</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">III. Условия за ползване</h2>
              <p>
                Потребителите се задължават да използват уебсайта добросъвестно, без да нарушават действащото законодателство и правата на JullyArt или трети лица.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">IV. Сключване на договори</h2>
              <p>
                Договори за услуги се сключват след индивидуално договаряне, потвърждение от страна на JullyArt и приемане на настоящите Общи условия.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">V. Права и задължения</h2>
              <p>
                JullyArt се задължава да предоставя договорените услуги с грижа и професионализъм. Потребителят носи отговорност за коректността на предоставената информация.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">VI. Лични данни</h2>
              <p>
                Личните данни се обработват съгласно Политиката за поверителност, публикувана на сайта, и в съответствие с Регламент (ЕС) 2016/679 (GDPR).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">VII. Промени в Общите условия</h2>
              <p>
                JullyArt си запазва правото да актуализира настоящите Общи условия. Промените влизат в сила от датата на публикуването им.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">VIII. Заключителни разпоредби</h2>
              <p>
                Всички спорове се решават по взаимно съгласие, а при невъзможност – от компетентния съд в Република България.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-serif italic text-inverted">Контакт с нас</h2>
              <p>
                При въпроси относно настоящите Общи условия, можете да се свържете с нас на <strong>{JULLY_ART_DATA.email}</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
