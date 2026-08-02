export interface Kit {
  id: string | number;
  name: string;
  title?: string; // Aggiunto per evitare l'errore sull'alt dell'immagine
  price: number;
  image?: string;
  images?: string[];
  description?: string;
  category?: string;
  team?: string;
}

export interface CartItem {
  cartItemId: string;
  kit: Kit;
  quantity: number;
}