import React, { useState } from 'react';
import { CartItem, ViewState } from '../types';
import Button from '../components/Button';
import { Trash2, Plus, Minus, MessageCircle, ShoppingBag, Info, Loader2 } from 'lucide-react';
import { api } from '../services/api';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onNavigate: (view: ViewState) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout, onNavigate }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
  };

  const handleOrder = async () => {
    setIsProcessing(true);
    
    // 1. Save Order to "Database"
    await api.orders.create(cartItems, total);

    // 2. Construct WhatsApp Message
    let message = "Halo Lyly Bakery, saya ingin memesan:\n\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `\nTotal Estimasi: ${formatPrice(total)}`;
    message += `\n\nMohon info ketersediaan dan ongkir ke alamat saya. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "6281234567890"; // Replace with real number
    
    // 3. Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // 4. Clear Cart
    setIsProcessing(false);
    onCheckout();
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in-up">
        <div className="inline-flex bg-earth-50 p-6 rounded-full mb-6">
          <ShoppingBag className="w-12 h-12 text-earth-400" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Keranjang Kosong</h2>
        <p className="text-stone-500 mb-8 text-lg">Anda belum memilih menu lezat dari Lyly Bakery.</p>
        <Button onClick={() => onNavigate(ViewState.CATALOG)} size="lg" className="rounded-full shadow-lg shadow-earth-600/20">
          Lihat Menu
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold text-stone-900 mb-2">Daftar Pilihan Anda</h1>
      <p className="text-stone-500 mb-8">Cek kembali pesanan Anda sebelum menghubungi admin kami.</p>

      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-8">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row bg-white p-4 rounded-xl border border-stone-200 shadow-sm gap-6 items-center">
                <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-stone-100 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-stone-900 mb-1">{item.name}</h3>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-red-500 p-1 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-stone-500 text-sm mb-2">{item.category}</p>
                    <p className="text-earth-600 font-bold">{formatPrice(item.price)}</p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-stone-200 text-stone-600 disabled:opacity-30 rounded-l-lg"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-medium text-stone-900 bg-white py-1">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-stone-200 text-stone-600 rounded-r-lg"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-semibold text-stone-900 sm:hidden">
                       {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-bold text-stone-900 mb-6">Ringkasan</h2>
            
            <div className="space-y-4 mb-6 border-b border-stone-100 pb-6">
              <div className="flex justify-between text-lg font-bold text-stone-900">
                <span>Total Estimasi</span>
                <span className="text-earth-600">{formatPrice(total)}</span>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-start">
                <Info className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800 leading-relaxed">
                    Data pesanan akan disimpan di database kami dan diteruskan ke WhatsApp Admin untuk konfirmasi ongkir.
                </p>
            </div>

            <Button 
              onClick={handleOrder} 
              disabled={isProcessing}
              className="w-full flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white border-transparent rounded-lg py-3"
            >
              {isProcessing ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" />
                  Pesan via WhatsApp
                </>
              )}
            </Button>
            
            <p className="text-xs text-stone-400 text-center mt-4">
              Lyly Bakery Lamongan Official
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;