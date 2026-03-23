import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Camera, MapPin, Facebook } from 'lucide-react';
import { JULLY_ART_DATA } from '../constants';

export const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 border-t border-inverted/10 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" aria-label="Jully Art Начало">
              <img src="https://www.jullyart.com/common/logo2.png" alt="Jully Art Logo" className="h-12 w-auto brightness-0" />
            </Link>
            <p className="text-secondary max-w-sm leading-relaxed text-sm">
              {JULLY_ART_DATA.description}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jullsart/" target="_blank" className="p-2 rounded-full border border-inverted/10 hover:bg-inverted hover:text-primary transition-all">
                <Instagram className="size-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100063264818347" target="_blank" className="p-2 rounded-full border border-inverted/10 hover:bg-inverted hover:text-primary transition-all">
                <Facebook className="size-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest mb-6 opacity-50">Навигация</h5>
            <ul className="space-y-4 text-xs text-secondary uppercase tracking-wider">
              <li><Link to="/uslugi" className="hover:text-inverted transition-colors">Услуги</Link></li>
              <li><Link to="/galeriq" className="hover:text-inverted transition-colors">Галерия</Link></li>
              <li><Link to="/za-jullyart" className="hover:text-inverted transition-colors">За нас</Link></li>
              <li><Link to="/kontakti" className="hover:text-inverted transition-colors">Контакти</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[10px] uppercase tracking-widest mb-6 opacity-50">Контакти</h5>
            <ul className="space-y-4 text-xs text-secondary uppercase tracking-wider">
              <li><a href={`mailto:${JULLY_ART_DATA.email}`} className="hover:text-inverted transition-colors">{JULLY_ART_DATA.email}</a></li>
              <li><a href={`tel:${JULLY_ART_DATA.phone.replace(/\s/g, '')}`} className="hover:text-inverted transition-colors">{JULLY_ART_DATA.phone}</a></li>
              <li className="flex items-center gap-2">
                <MapPin className="size-3" />
                <span>{JULLY_ART_DATA.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-inverted/5 gap-6">
          <p className="text-[10px] text-secondary font-mono uppercase tracking-widest">
            © 2026 {JULLY_ART_DATA.name.toUpperCase()}. ВСИЧКИ ПРАВА ЗАПАЗЕНИ.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-mono text-secondary uppercase tracking-widest">
            <Link to="#" className="hover:text-inverted">Политика за поверителност</Link>
            <Link to="#" className="hover:text-inverted">Общи условия</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
