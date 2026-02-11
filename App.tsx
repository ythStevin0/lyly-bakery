import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import AIAssistant from './pages/AIAssistant';
import { ViewState, CartItem, Product } from './types';
import { api } from './services/api';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initial Data Fetch from "Backend"
  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      const data = await api.products.list();
      setProducts(data);
      setIsLoading(false);
    };
    fetchInitialData();
  }, []);

  // Cart Operations
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Optional: Visual feedback could go here
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // Function to render the active page
  const renderView = () => {
    if (isLoading) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-earth-200 border-t-earth-600 rounded-full animate-spin"></div>
        </div>
      );
    }

    switch (currentView) {
      case ViewState.HOME:
        return <Home onNavigate={setCurrentView} products={products} onAddToCart={addToCart} />;
      case ViewState.CATALOG:
        return <Catalog products={products} onAddToCart={addToCart} />;
      case ViewState.ABOUT:
        return <About />;
      case ViewState.CONTACT:
        return <Contact />;
      case ViewState.ASSISTANT:
        return <AIAssistant />;
      case ViewState.CART:
        return (
          <Cart 
            cartItems={cart} 
            onUpdateQuantity={updateQuantity} 
            onRemoveItem={removeFromCart} 
            onCheckout={clearCart}
            onNavigate={setCurrentView}
          />
        );
      default:
        return <Home onNavigate={setCurrentView} products={products} onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-white">
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
      />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
};

export default App;