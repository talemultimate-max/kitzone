export interface Kit {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
  team?: string;
}

export interface CartItem {
  cartItemId: string;
  kit: Kit;
  quantity: number;
}