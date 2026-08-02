import { Kit } from '@/types/kit';
import juveImg from './399dd0d140.webp';
import interImg from './690464684e (1).webp';
import milanImg from './d614c1e0a5.webp';

const getSrc = (img: any) => (typeof img === 'string' ? img : img.src);

export const KITS_DATA: Kit[] = [
  {
    id: 'juventus-home-26-27',
    team: 'Juventus FC',
    title: 'Juventus Home Kit 2026/27 (Fan Version)',
    category: 'Serie A',
    price: 35,
    originalPrice: 110,
    badge: 'IN OFFERTA',
    tagColor: 'bg-slate-700/40 text-slate-100 border-slate-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [
      getSrc(juveImg),
    ],
    customPatches: ['Patch Serie A Enilive', 'Patch Champions League', 'Patch Coppa Italia'],
  },
  {
    id: 'inter-home-26-27',
    team: 'Inter Milan',
    title: 'Inter Milan Home Kit 2026/27 (Fan Version)',
    category: 'Serie A',
    price: 35,
    originalPrice: 110,
    badge: 'IN OFFERTA',
    tagColor: 'bg-blue-900/40 text-blue-100 border-blue-600',
    bgGradient: 'from-blue-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [
      getSrc(interImg),
    ],
    customPatches: ['Patch Serie A Enilive', 'Patch Champions League', 'Patch Coppa Italia'],
  },
  {
    id: 'milan-home-26-27',
    team: 'AC Milan',
    title: 'AC Milan Home Kit 2026/27 (Fan Version)',
    category: 'Serie A',
    price: 35,
    originalPrice: 110,
    badge: 'IN OFFERTA',
    tagColor: 'bg-red-900/40 text-red-100 border-red-600',
    bgGradient: 'from-red-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [
      getSrc(milanImg),
    ],
    customPatches: ['Patch Serie A Enilive', 'Patch Champions League', 'Patch Coppa Italia'],
  },
];