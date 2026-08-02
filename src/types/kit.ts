export interface Kit {
  id: string | number;
  name: string;
  title?: string;
  price: number;
  image?: string;
  images?: string[];
  description?: string;
  category?: string;
  team?: string;
  tagColor?: string; // Aggiunto per il colore dell'etichetta
}

export interface CartItem {
  cartItemId: string;
  kit: Kit;
  quantity: number;
}