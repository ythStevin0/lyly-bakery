import React, { useState } from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { api } from '../services/api';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await api.contact.submit(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">Kunjungi Kami</h1>
        <p className="text-stone-500 max-w-xl mx-auto">
          Ingin memesan kue ulang tahun custom atau snack box partai besar? Hubungi kami atau datang langsung ke outlet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-stone-900 mb-8 font-serif">Informasi Outlet</h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-earth-100 p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-earth-600" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Tugu Bakery Pusat</h3>
                <p className="text-stone-600">Jl. Sunan Drajat No. 45</p>
                <p className="text-stone-600">Lamongan, Jawa Timur 62211</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-earth-100 p-3 rounded-lg mr-4">
                <Phone className="w-6 h-6 text-earth-600" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Pemesanan (WhatsApp)</h3>
                <p className="text-stone-600">+62 856 0486 7218</p>
                <p className="text-stone-500 text-sm mt-1">Buka Setiap Hari: 07:00 - 21:00 WIB</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-earth-100 p-3 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-earth-600" />
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                <p className="text-stone-600">order@tugubakery.com</p>
                <p className="text-stone-600">Kerjasama & Grosir</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 h-64 bg-stone-200 rounded-xl overflow-hidden relative border border-stone-300">
            <img 
               src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop"
               className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
               alt="Map Background"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-semibold text-stone-800 bg-white/90 px-4 py-2 rounded shadow backdrop-blur-sm">Lihat di Google Maps</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 font-serif">Pesan Online / Tanya Info</h2>
          
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in-up">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Pesan Terkirim!</h3>
              <p className="text-stone-500 mb-6">Terima kasih. Pesanan Anda telah tersimpan di database kami. Admin akan segera menghubungi Anda.</p>
              <Button onClick={() => setStatus('idle')} variant="outline">Kirim Pesan Lain</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full rounded-lg border-stone-300 focus:border-earth-500 focus:ring-earth-500 shadow-sm px-4 py-2.5"
                  placeholder="Nama Pemesan"
                  disabled={status === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">No. WhatsApp / Email</label>
                <input
                  type="text"
                  id="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-lg border-stone-300 focus:border-earth-500 focus:ring-earth-500 shadow-sm px-4 py-2.5"
                  placeholder="0812..."
                  disabled={status === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Detail Pesanan / Pertanyaan</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full rounded-lg border-stone-300 focus:border-earth-500 focus:ring-earth-500 shadow-sm px-4 py-2.5"
                  placeholder="Misal: Mau pesan snack box 50 kotak untuk tanggal 20..."
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-earth-600 hover:bg-earth-700" disabled={status === 'submitting'}>
                {status === 'submitting' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Kirim Pesan'}
              </Button>
              {status === 'error' && <p className="text-red-500 text-sm text-center">Gagal mengirim pesan. Silakan coba lagi.</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;