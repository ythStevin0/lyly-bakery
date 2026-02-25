export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export enum ViewState {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  ASSISTANT = 'ASSISTANT',
  CART = 'CART'
}

export interface AIRecommendation {
  productId: string;
  reason: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

// Database Models
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerName: string; // Simplification for WhatsApp order
  status: 'pending' | 'completed';
  createdAt: string;
}

export interface DeliveryInfo {
  method: string;
  area: string;
  cost: number;
  estimatedTime: string;
}

export interface Review {
  id: string;
  productId: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}
