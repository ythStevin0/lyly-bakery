import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Image */}
      <div className="h-64 md:h-96 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2340&auto=format&fit=crop" 
          alt="Baking kitchen" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-earth-900/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide">Tentang Lyly Bakery</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Story */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">Cerita dari Dapur Kami</h2>
          <p className="text-lg text-stone-600 leading-loose">
            Bermula dari dapur rumah sederhana di <span className="font-bold text-earth-700">Lamongan</span> pada tahun 2010, Lyly Bakery didirikan dengan satu tujuan: menyajikan roti yang tidak hanya enak, tapi juga menenangkan hati. 
            <br/><br/>
            Apa yang dimulai sebagai hobi membuat roti sisir resep nenek, kini telah berkembang menjadi tujuan utama warga Lamongan mencari kue ulang tahun, oleh-oleh, dan teman minum kopi. Meski telah berkembang, kami tetap memegang teguh prinsip "Home Made Taste" dalam setiap adonan yang kami uleni.
          </p>
        </section>

        {/* Mission Values */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-earth-300 rounded-lg"></div>
             <img 
               src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1000&auto=format&fit=crop" 
               alt="Baker checking bread" 
               className="rounded-lg shadow-lg relative z-10"
             />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">Komitmen Kualitas</h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-earth-100 text-earth-700 flex items-center justify-center font-serif font-bold mr-4 group-hover:bg-earth-600 group-hover:text-white transition-colors">1</span>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Halal & Toyyib</h4>
                  <p className="text-stone-600 text-sm">Kami menjamin seluruh bahan baku dan proses produksi telah tersertifikasi Halal, memberikan ketenangan bagi seluruh pelanggan.</p>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-earth-100 text-earth-700 flex items-center justify-center font-serif font-bold mr-4 group-hover:bg-earth-600 group-hover:text-white transition-colors">2</span>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Tanpa Pengawet Buatan</h4>
                  <p className="text-stone-600 text-sm">Roti kami diproduksi setiap hari (daily baked) untuk memastikan kesegaran maksimal saat sampai di tangan Anda.</p>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-earth-100 text-earth-700 flex items-center justify-center font-serif font-bold mr-4 group-hover:bg-earth-600 group-hover:text-white transition-colors">3</span>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Inovasi Rasa</h4>
                  <p className="text-stone-600 text-sm">Memadukan cita rasa tradisional nusantara dengan teknik pastry modern untuk menciptakan varian baru yang unik.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Team Quote */}
        <section className="bg-earth-50 p-10 md:p-14 rounded-2xl text-center border border-earth-100">
           <blockquote className="text-2xl md:text-3xl font-serif font-medium text-earth-800 italic mb-8 leading-relaxed">
             "Roti yang enak itu punya kekuatan untuk membuat hari yang buruk menjadi lebih baik."
           </blockquote>
           <cite className="not-italic font-bold text-stone-900 tracking-wide block uppercase text-sm">- Ibu Lyly, Pendiri</cite>
        </section>

      </div>
    </div>
  );
};

export default About;