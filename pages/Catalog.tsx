import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { Search } from 'lucide-react';

interface CatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ products, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Extract categories dynamically
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Katalog Menu</h1>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg">
              Temukan berbagai pilihan roti, kue, dan pastry yang dipanggang segar setiap hari di dapur kami.
            </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-white border border-stone-200 rounded-full shadow-sm">
                {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat 
                        ? 'bg-earth-600 text-white shadow-md' 
                        : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                    }`}
                >
                    {cat}
                </button>
                ))}
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
        </div>

        {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-stone-400">
                <Search className="w-12 h-12 mb-4 opacity-20" />
                <p className="text-lg">Produk tidak ditemukan di kategori ini.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;