export interface Kit {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  images?: string[]; // Aggiunto per gestire più immagini
  description?: string;
  category?: string;
  team?: string;
}

export interface CartItem {
  cartItemId: string;
  kit: Kit;
  quantity: number;
}