import { GoogleGenAI, Type, Schema } from "@google/genai";
import { PRODUCTS } from "../constants";
import { Product } from "../types";

// Schema definitions
const recommendationSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    recommendations: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          productId: { type: Type.STRING, description: "The ID of the product from the provided list" },
          reason: { type: Type.STRING, description: "A appetizing reason why this cake/bread fits the user request (in Indonesian)" }
        },
        required: ["productId", "reason"]
      }
    },
    advice: {
        type: Type.STRING,
        description: "General culinary or serving advice based on the user request (in Indonesian)"
    }
  },
  required: ["recommendations", "advice"]
};

export const getProductRecommendations = async (userQuery: string): Promise<{ recommendations: {productId: string, reason: string}[], advice: string }> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API Key is missing");
    }

    const ai = new GoogleGenAI({ apiKey });

    // Create a concise product context string
    const productContext = PRODUCTS.map(p => 
      `ID: ${p.id}, Name: ${p.name}, Category: ${p.category}, Tags: ${p.tags.join(', ')}, Description: ${p.description}`
    ).join('\n');

    const prompt = `
      Anda adalah asisten toko roti virtual untuk 'Lyly Bakery' di Lamongan. Anda ahli dalam merekomendasikan roti, kue, dan snack box untuk berbagai acara.
      
      Tugas Anda:
      1. Analisis permintaan pengguna: "${userQuery}"
      2. Pilih 2-3 produk bakery yang paling relevan dari daftar berikut:
      
      ${productContext}
      
      3. Berikan alasan yang menggugah selera mengapa produk tersebut cocok.
      4. Berikan saran penyajian (misal: enak disantap hangat dengan kopi) atau saran porsi.
      
      Jawablah dalam Bahasa Indonesia yang ramah, sopan, dan membuat orang lapar. Gunakan istilah seperti "lezat", "lembut", "wangi", "segar".
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recommendationSchema,
        temperature: 0.7
      }
    });

    const resultText = response.text;
    if (!resultText) throw new Error("No response from AI");

    return JSON.parse(resultText);

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
        recommendations: [],
        advice: "Maaf, asisten bakery kami sedang sibuk memanggang. Silakan lihat katalog kami langsung."
    };
  }
};