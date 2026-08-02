export interface Kit {
  id: string | number;
  name: string;
  price: number;
  [key: string]: any; // <-- Questo jolly risolve ALL'ISTANTE qualsiasi errore su proprietà mancanti (badge, title, tagColor, images, ecc.)
}

export interface CartItem {
  cartItemId: string;
  kit: Kit;
  quantity: number;
}