export interface Kit {
  id: string;
  team: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number; // <-- Aggiunto qui
  badge?: string;
  tagColor?: string;
  bgGradient?: string;
  availableSizes: string[];
  images: string[];
  customPatches?: string[];
}