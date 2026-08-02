export interface Kit {
  id: string | number;
  name: string;
  price: number;
  [key: string]: any; // Jolly per qualsiasi proprietà dei kit
}

export interface CartItem {
  cartItemId: string;
  kit: Kit;
  quantity: number;
  [key: string]: any; // Jolly per size, customName, customNumber e qualsiasi altra proprietà del carrello
}