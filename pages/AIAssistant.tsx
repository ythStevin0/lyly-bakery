import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Info, ChefHat } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { getProductRecommendations } from '../services/geminiService';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface AIAssistantProps {
  // No Cart Props
}

const AIAssistant: React.FC<AIAssistantProps> = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{ products: Product[], reasons: Record<string, string>, advice: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const data = await getProductRecommendations(query);
      
      const recommendedProducts = data.recommendations
        .map(rec => {
          const product = PRODUCTS.find(p => p.id === rec.productId);
          return product ? product : null;
        })
        .filter((p): p is Product => p !== null);

      const reasonsMap = data.recommendations.reduce((acc, curr) => {
        acc[curr.productId] = curr.reason;
        return acc;
      }, {} as Record<string, string>);

      setResults({
        products: recommendedProducts,
        reasons: reasonsMap,
        advice: data.advice
      });
    } catch (err) {
      setError("Maaf, chef AI kami sedang sibuk di dapur. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  const sampleQueries = [
    "Rekomendasi kue ulang tahun anak perempuan",
    "Snack box untuk rapat kantor 50 orang",
    "Oleh-oleh roti khas yang tahan lama",
    "Menu sarapan pendamping kopi"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-earth-50 rounded-2xl mb-6">
            <ChefHat className="w-10 h-10 text-earth-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
            Konsultasi Menu Virtual
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Gunakan teknologi AI kami untuk mendapatkan saran menu yang personal. 
            Cocok untuk perencanaan acara, pemilihan hantaran, atau sekadar camilan harian.
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-white p-2 rounded-3xl shadow-xl shadow-stone-200 border border-stone-100 mb-12">
          <form onSubmit={handleSearch} className="relative">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ceritakan kebutuhan Anda... (Contoh: Saya butuh snack box untuk acara syukuran rumah baru, budget menengah)"
              className="w-full p-6 pb-16 rounded-2xl bg-stone-50 border-none focus:bg-white focus:ring-2 focus:ring-earth-100 text-stone-900 resize-none h-40 transition-all text-lg placeholder:text-stone-400"
              disabled={loading}
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-3">
               <span className="text-xs text-stone-400 hidden sm:inline">Powered by Gemini AI</span>
               <button
                type="submit"
                disabled={loading || !query.trim()}
                className="flex items-center gap-2 px-6 py-3 bg-earth-600 text-white rounded-xl font-bold hover:bg-earth-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-earth-600/20"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Analisis</>}
              </button>
            </div>
          </form>
        </div>

        {/* Quick Prompts */}
        {!results && !loading && (
            <div className="text-center">
              <p className="text-sm font-bold text-stone-400 uppercase tracking-widest mb-4">Contoh Pertanyaan</p>
              <div className="flex flex-wrap justify-center gap-3">
                {sampleQueries.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(q)}
                    className="text-sm bg-white border border-stone-200 text-stone-600 px-5 py-2.5 rounded-full hover:border-earth-600 hover:text-earth-600 hover:shadow-md transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 text-red-700 p-6 rounded-2xl mb-8 text-center border border-red-100">
            {error}
          </div>
        )}

        {/* Results */}
        {results && (
          <div className="animate-fade-in-up space-y-16">
            
            {/* Advice Section */}
            <div className="bg-gradient-to-r from-earth-600 to-earth-500 p-1 rounded-3xl shadow-xl">
               <div className="bg-white p-8 rounded-[1.4rem]">
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-earth-50 rounded-full text-earth-600">
                       <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="font-bold text-stone-900 text-xl mb-3">Saran Chef</h3>
                       <p className="text-stone-600 text-lg leading-relaxed">
                         "{results.advice}"
                       </p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Product Recommendations */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="h-px bg-stone-200 flex-1"></div>
                 <h2 className="text-2xl font-serif font-bold text-stone-900">Produk Yang Cocok</h2>
                 <div className="h-px bg-stone-200 flex-1"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {results.products.map(product => (
                  <div key={product.id} className="flex flex-col h-full group">
                    <ProductCard product={product} />
                    <div className="mt-4 bg-stone-50 p-5 rounded-2xl border border-stone-100 group-hover:bg-white group-hover:shadow-lg transition-all">
                       <p className="text-sm text-stone-600 italic">
                         <span className="font-bold text-earth-600 block mb-2 not-italic uppercase text-xs tracking-wider">Alasan Rekomendasi:</span>
                         "{results.reasons[product.id]}"
                       </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
                 <Button variant="outline" onClick={() => { setResults(null); setQuery(''); }} className="rounded-full">
                    Mulai Konsultasi Baru
                 </Button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;