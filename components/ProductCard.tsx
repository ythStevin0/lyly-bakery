import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-earth-900/10 transition-all duration-500 border border-stone-100 flex flex-col h-full hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-stone-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-stone-800 uppercase tracking-widest shadow-sm border border-stone-100">
            {product.category}
          </span>
        </div>

        {/* Action Button - Always visible on mobile, hover on desktop */}
        {onAddToCart && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="absolute bottom-4 right-4 bg-earth-600 text-white p-3.5 rounded-full shadow-lg shadow-earth-600/30 transform md:translate-y-20 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-earth-700 hover:scale-110 active:scale-95 flex items-center justify-center"
            title="Tambah ke Keranjang"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-xs text-stone-400 font-medium">4.9 (120+)</span>
        </div>

        <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 leading-tight group-hover:text-earth-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-stone-500 leading-relaxed line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        
        <div className="pt-4 border-t border-dashed border-stone-100 flex items-center justify-between">
          <span className="text-lg font-bold text-stone-900">{formatPrice(product.price)}</span>
          
          {/* Mobile visible add button */}
          {onAddToCart && (
            <button 
              onClick={() => onAddToCart(product)}
              className="md:hidden text-xs font-bold text-earth-700 bg-earth-50 px-3 py-2 rounded-full active:bg-earth-100"
            >
              + Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;