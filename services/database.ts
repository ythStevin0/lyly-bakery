import { Product, ContactMessage, Order } from '../types';
import { PRODUCTS } from '../constants';

// Keys for our "Database" tables
const DB_KEYS = {
  PRODUCTS: 'lyly_db_products',
  MESSAGES: 'lyly_db_messages',
  ORDERS: 'lyly_db_orders'
};

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class DatabaseService {
  constructor() {
    this.init();
  }

  // Initialize DB with seed data if empty
  private init() {
    if (!localStorage.getItem(DB_KEYS.PRODUCTS)) {
      localStorage.setItem(DB_KEYS.PRODUCTS, JSON.stringify(PRODUCTS));
    }
    if (!localStorage.getItem(DB_KEYS.MESSAGES)) {
      localStorage.setItem(DB_KEYS.MESSAGES, JSON.stringify([]));
    }
    if (!localStorage.getItem(DB_KEYS.ORDERS)) {
      localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify([]));
    }
  }

  // --- Products Table Operations ---
  async getProducts(): Promise<Product[]> {
    await delay(300); // Simulate network latency
    const data = localStorage.getItem(DB_KEYS.PRODUCTS);
    return data ? JSON.parse(data) : [];
  }

  async getProductById(id: string): Promise<Product | undefined> {
    await delay(200);
    const products = await this.getProducts();
    return products.find(p => p.id === id);
  }

  // --- Messages Table Operations ---
  async saveMessage(message: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<boolean> {
    await delay(800);
    const messages: ContactMessage[] = JSON.parse(localStorage.getItem(DB_KEYS.MESSAGES) || '[]');
    
    const newMessage: ContactMessage = {
      ...message,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    
    messages.push(newMessage);
    localStorage.setItem(DB_KEYS.MESSAGES, JSON.stringify(messages));
    console.log('Database: Message saved', newMessage);
    return true;
  }

  // --- Orders Table Operations ---
  async createOrder(items: any[], total: number): Promise<string> {
    await delay(500);
    const orders: Order[] = JSON.parse(localStorage.getItem(DB_KEYS.ORDERS) || '[]');
    
    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      items,
      total,
      customerName: 'WhatsApp User',
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    orders.push(newOrder);
    localStorage.setItem(DB_KEYS.ORDERS, JSON.stringify(orders));
    return newOrder.id;
  }
}

export const db = new DatabaseService();