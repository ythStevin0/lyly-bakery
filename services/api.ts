import { db } from './database';
import { Product, ContactMessage } from '../types';

// API Layer - In a real app, these would utilize fetch() to call a Node/Python backend.
// Here, we call our local Database Service.

export const api = {
  products: {
    list: async (): Promise<Product[]> => {
      try {
        return await db.getProducts();
      } catch (error) {
        console.error("API Error fetching products:", error);
        return [];
      }
    },
    get: async (id: string): Promise<Product | undefined> => {
      return await db.getProductById(id);
    }
  },

  contact: {
    submit: async (data: { name: string; email: string; message: string }) => {
      try {
        return await db.saveMessage(data);
      } catch (error) {
        throw new Error("Failed to submit message");
      }
    }
  },

  orders: {
    create: async (cartItems: any[], total: number) => {
      return await db.createOrder(cartItems, total);
    }
  }
};