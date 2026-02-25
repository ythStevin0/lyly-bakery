import React from 'react';
import { ViewState, Product } from '../types';
import { FEATURES } from '../constants';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Flame, Award, Wheat, ChefHat, CheckCircle2, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, products, onAddToCart }) => {
  const featuredProducts = products.slice(0, 4); // Show 4 for better grid balance

  return (
    <div className="pb-20">
      
      {/* 1. Immersive Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-stone-900 overflow-hidden">
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2600&auto=format&fit=crop" 
            alt="Artisan Bakery Background" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Advanced Gradient Overlay: Left (Solid Light) -> Right (Transparent) */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent sm:via-stone-50/60"></div>
          
          {/* Bottom Fade for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-earth-100/80 backdrop-blur-md border border-earth-200 text-earth-700 mb-6 animate-fade-in-up">
               <span className="flex h-2 w-2 rounded-full bg-earth-600 animate-pulse"></span>
               <span className="text-xs font-bold tracking-widest uppercase">Premium Artisan Bakery</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-[1.1] mb-6 drop-shadow-sm tracking-tight">
              Kualitas Rasa <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-earth-600 to-earth-500">
                Yang Tak Terganti.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed max-w-lg font-medium">
              Menghadirkan kehangatan roti fresh-baked setiap pagi. Perpaduan resep warisan Lamongan dan teknik pastry modern.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button 
                size="lg" 
                onClick={() => onNavigate(ViewState.CATALOG)}
                className="bg-earth-600 hover:bg-earth-700 shadow-xl shadow-earth-600/30 text-white rounded-full px-10 py-4 text-lg transition-transform hover:-translate-y-1"
              >
                Lihat Menu
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => onNavigate(ViewState.CONTACT)}
                className="bg-white/60 backdrop-blur-sm border-stone-300 text-stone-800 hover:bg-white rounded-full px-10 py-4 text-lg"
              >
                Hubungi Kami
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
               <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-[3px] border-white shadow-md" alt="Customer 1" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-[3px] border-white shadow-md" alt="Customer 2" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" className="w-12 h-12 rounded-full border-[3px] border-white shadow-md" alt="Customer 3" />
                  <div className="w-12 h-12 rounded-full border-[3px] border-white bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-600 shadow-md">+1k</div>
               </div>
               <div className="flex flex-col">
                 <div className="flex text-yellow-500 mb-0.5">
                   {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                 </div>
                 <span className="text-sm font-semibold text-stone-700">Dipercaya Keluarga Lamongan</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features / Value Proposition - Clean & Minimal */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-[2rem] bg-white border border-stone-100 hover:border-earth-100 shadow-sm hover:shadow-2xl hover:shadow-earth-900/5 transition-all duration-500">
                <div className="w-16 h-16 bg-earth-50 rounded-2xl flex items-center justify-center text-earth-600 mb-6 group-hover:scale-110 group-hover:bg-earth-600 group-hover:text-white transition-all duration-500">
                  {idx === 0 && <Award className="w-8 h-8" />}
                  {idx === 1 && <Flame className="w-8 h-8" />}
                  {idx === 2 && <Wheat className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Popular Products - Modern Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
             <span className="text-earth-600 font-bold uppercase tracking-widest text-xs mb-2 block">Pilihan Favorit</span>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Best Seller Minggu Ini</h2>
          </div>
          <Button variant="ghost" onClick={() => onNavigate(ViewState.CATALOG)} className="group text-stone-600 hover:text-earth-600">
             Lihat Semua Menu <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* 4. Showcase Section - Elegant Dark/Red Theme */}
      <section className="py-24 my-20 bg-earth-900 text-white overflow-hidden relative isolate">
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-earth-600 rounded-full blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
               <div className="flex-1 space-y-8 text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                    Signature Menu <br/>
                    <span className="text-earth-400">Tugu Bakery.</span>
                  </h2>
                  <p className="text-earth-100/80 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Setiap produk kami adalah karya seni. Dari Roti Sisir legendaris yang lembut hingga Tart modern yang estetik, dibuat dengan passion penuh.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pl-4 sm:pl-0">
                    {['100% Butter Wijsman', 'Tanpa Pengawet', 'Freshly Baked', 'Halal Certified'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-earth-800 text-earth-400">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-stone-100">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button 
                        onClick={() => onNavigate(ViewState.CATALOG)} 
                        className="rounded-full px-10 py-4 bg-white text-earth-900 hover:bg-stone-100 border-none font-bold"
                    >
                        Pesan Sekarang
                    </Button>
                  </div>
               </div>
               
               <div className="flex-1 w-full max-w-lg lg:max-w-none">
                  <div className="grid grid-cols-2 gap-4">
                     <img 
                        src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop" 
                        className="rounded-3xl w-full h-64 object-cover transform translate-y-8 shadow-2xl hover:-translate-y-2 transition-transform duration-500" 
                        alt="Cupcake" 
                     />
                     <img 
                        src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop" 
                        className="rounded-3xl w-full h-64 object-cover shadow-2xl hover:translate-y-2 transition-transform duration-500" 
                        alt="Tart" 
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. AI Assistant Promo - Modern Glass Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative bg-stone-900 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl">
           {/* Background Image with Overlay */}
           <div className="absolute inset-0">
             <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                alt="Coffee and Bread"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent"></div>
           </div>

           <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-1 text-white">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10 mb-6">
                   <ChefHat className="w-5 h-5 text-earth-400" />
                   <span className="text-sm font-bold text-white">Fitur Baru • AI Consultant</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                   Bingung Pilih Menu? <br/> Tanya AI Chef Tugu.
                 </h2>
                 <p className="text-stone-300 text-lg mb-8 leading-relaxed max-w-xl">
                   Dapatkan rekomendasi snack box yang pas untuk budget rapat, atau kue ulang tahun yang cocok untuk kepribadian orang tersayang. Gratis!
                 </p>
                 <Button 
                    onClick={() => onNavigate(ViewState.ASSISTANT)} 
                    size="lg" 
                    className="rounded-full bg-earth-600 hover:bg-earth-500 text-white border-none shadow-lg shadow-earth-900/50"
                 >
                   Coba Konsultasi AI
                 </Button>
               </div>
               
               {/* Decorative Element */}
               <div className="hidden md:block w-1/3">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-earth-600 flex items-center justify-center text-xs text-white">AI</div>
                          <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="space-y-3">
                          <div className="h-2 w-full bg-white/10 rounded-full"></div>
                          <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
                          <div className="h-2 w-4/6 bg-white/10 rounded-full"></div>
                      </div>
                      <div className="mt-6 flex gap-2">
                          <div className="h-20 w-20 rounded-lg bg-stone-800/50"></div>
                          <div className="h-20 w-20 rounded-lg bg-stone-800/50"></div>
                      </div>
                  </div>
               </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
