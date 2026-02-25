import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'b1',
    name: 'Roti Sisir Mentega Premium',
    category: 'Roti Manis',
    price: 35000,
    description: 'Roti sisir klasik dengan olesan mentega wijsman asli. Lembut, wangi, dan lumer di mulut. Favorit keluarga Lamongan.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    tags: ['best seller', 'klasik', 'sarapan', 'oleholeh'],
  },
  {
    id: 'b2',
    name: 'Donat Kentang Kampung',
    category: 'Donut',
    price: 45000,
    description: 'Box isi 6. Donat kentang empuk dengan taburan gula halus dingin. Resep warisan turun temurun.',
    image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=1000&auto=format&fit=crop',
    tags: ['snack', 'manis', 'tradisional'],
  },
  {
    id: 'b3',
    name: 'Lapis Surabaya Prunes',
    category: 'Cake',
    price: 125000,
    description: 'Lapis Surabaya 3 layer dengan selai nanas segar dan potongan prunes. Tekstur padat namun lembut (moist). Ukuran 20x10cm.',
    image: 'https://images.unsplash.com/photo-1605886273767-f27a69485123?q=80&w=1000&auto=format&fit=crop',
    tags: ['premium', 'hampers', 'basah'],
  },
  {
    id: 'b4',
    name: 'Croissant Butter Perancis',
    category: 'Pastry',
    price: 22000,
    description: 'Pastry renyah berlapis dengan butter import berkualitas tinggi. Freshly baked setiap pagi dari oven kami.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=1000&auto=format&fit=crop',
    tags: ['crispy', 'breakfast', 'kopi'],
  },
  {
    id: 'b5',
    name: 'Roti Abon Gulung Pedas',
    category: 'Roti Gurih',
    price: 15000,
    description: 'Roti gulung lembut dengan isian mayones spesial dan topping abon sapi pedas melimpah.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop',
    tags: ['savory', 'pedas', 'snack'],
  },
  {
    id: 'b6',
    name: 'Blackforest Tart 20cm',
    category: 'Tart Ulang Tahun',
    price: 250000,
    description: 'Cake coklat classic dengan layer dark cherry dan krim vanilla, ditaburi serutan coklat belgian. Gratis lilin & pisau.',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop',
    tags: ['birthday', 'party', 'chocolate'],
  },
  {
    id: 'b7',
    name: 'Lemper Ayam Bakar',
    category: 'Jajan Pasar',
    price: 5000,
    description: 'Ketan pulen dengan isian daging ayam suwir berbumbu rempah, dibungkus daun pisang dan dibakar untuk aroma wangi.',
    image: 'https://images.unsplash.com/photo-1616766488344-9336180633b1?q=80&w=1000&auto=format&fit=crop',
    tags: ['tradisional', 'snack box', 'asin'],
  },
  {
    id: 'b8',
    name: 'Sourdough Country Bread',
    category: 'Artisan Bread',
    price: 40000,
    description: 'Roti sehat fermentasi alami selama 24 jam. Kulit renyah, bagian dalam kenyal. Tanpa pengawet dan rendah gula.',
    image: 'https://images.unsplash.com/photo-1585476215511-142a758f84d7?q=80&w=1000&auto=format&fit=crop',
    tags: ['healthy', 'diet', 'vegan', 'sugarfree'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ibu Nurhayati",
    role: "Pelanggan Setia",
    content: "Roti sisirnya Lyly Bakery juara! Selalu jadi oleh-oleh wajib kalau saya pulang kampung ke Lamongan. Anak-anak di rumah pasti berebut.",
    image: "https://picsum.photos/seed/ibu1/100/100"
  },
  {
    id: 2,
    name: "Pak Bambang",
    role: "Manajer Kantor",
    content: "Pesan snack box untuk rapat kantor 50 kotak, datang tepat waktu dan isiannya premium semua. Lempernya enak banget.",
    image: "https://picsum.photos/seed/bapak2/100/100"
  },
  {
    id: 3,
    name: "Siska Amelia",
    role: "Mahasiswi",
    content: "Pesan tart ulang tahun buat mama via website, adminnya ramah, kuenya cantik dan rasanya nyoklat banget tapi nggak bikin eneg.",
    image: "https://picsum.photos/seed/siska3/100/100"
  }
];

export const FEATURES = [
  {
    title: "100% Halal & Higienis",
    description: "Seluruh produk kami bersertifikat Halal MUI dan diproses dengan standar kebersihan tinggi.",
    icon: "Award"
  },
  {
    title: "Fresh From Oven",
    description: "Kami memanggang roti setiap hari. Dijamin fresh, hangat, dan tanpa bahan pengawet berlebih.",
    icon: "Flame"
  },
  {
    title: "Bahan Premium",
    description: "Menggunakan tepung, mentega, dan coklat kualitas terbaik untuk rasa yang tak tertandingi.",
    icon: "Wheat"
  },
  {
    title: "Pengiriman Cepat",
    description: "Layanan pengiriman cepat ke seluruh wilayah Lamongan dan sekitarnya.",
    icon: "Truck"
  }
];
