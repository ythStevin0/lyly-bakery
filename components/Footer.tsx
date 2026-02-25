import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-stone-300 pt-16 pb-8 border-t border-earth-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold text-white">
              Tugu<span className="text-earth-500">Bakery</span>
            </h3>
            <p className="text-sm leading-relaxed text-earth-100/70">
              Menyajikan kehangatan melalui roti dan kue berkualitas sejak 2010. Kebanggaan kuliner Lamongan.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-earth-400 transition-colors bg-earth-800 p-2 rounded-full"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-earth-400 transition-colors bg-earth-800 p-2 rounded-full"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-earth-400 transition-colors bg-earth-800 p-2 rounded-full"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Menu Populer</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-earth-400 transition-colors">Roti Sisir</button></li>
              <li><button className="hover:text-earth-400 transition-colors">Tart Ulang Tahun</button></li>
              <li><button className="hover:text-earth-400 transition-colors">Snack Box</button></li>
              <li><button className="hover:text-earth-400 transition-colors">Donat Kentang</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hubungi Outlet</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-earth-500 flex-shrink-0" />
                <span>Jl. Raya Babat No. 666, Lamongan, Jawa Timur</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-earth-500 flex-shrink-0" />
                <span>+62 856 0486 7218</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-earth-500 flex-shrink-0" />
                <span>order@tugubakery.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Promo Spesial</h4>
            <p className="text-sm text-stone-400 mb-4">Dapatkan voucher diskon kue ulang tahun via email.</p>
            <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="bg-earth-800 border border-earth-700 rounded px-4 py-2 text-sm focus:ring-2 focus:ring-earth-500 text-white placeholder-stone-500"
              />
              <button className="bg-earth-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-earth-500 transition-colors">
                Gabung Member
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-earth-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Tugu Bakery Lamongan. Halal Certified.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;