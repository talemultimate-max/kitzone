import { Kit } from '@/types/kit';

// --- SERIE A ---
import juveImg from './399dd0d140.webp';
import interImg from './690464684e (1).webp';
import milanImg from './d614c1e0a5.webp';

// --- REAL MADRID (Lotto 1) ---
import realLungaImg from './4166554462.webp';
import realCortaImg from './ce3dd86014.webp';
import realShortsImg from './b5f62d7ece.webp';
import realTutaVerdeMarmoImg from './2f4c8f834b.webp';
import realTutaBiancaImg from './0058ee8b5b.webp';
import realTutaVerdeOroImg from './0184d1998a.webp';
import realTutaBluImg from './abb337f281.webp';
import realKitEstivoBluImg from './619491dd32.webp';
import realKitEstivoVerdeMarmoImg from './9078253dcd.webp';
import realKitEstivoVerdeOroImg from './ce66cad0d2.webp';

// --- REAL MADRID (Lotto 2) ---
import realSmanicatoGrigioImg from './faccff78e2.webp';
import realSmanicatoRosaImg from './a764269ac1.webp';
import realSmanicatoViolaImg from './4e30f9c89f.webp';
import realSmanicatoBiancoImg from './5f787a56f4.webp';
import realKitEstivoBiancoImg from './58814ccedc.webp';
import realTutaBiancaNeraImg from './f4ff84bfd8.webp';
import realTutaGiallaImg from './14e5aab74e.webp';
import realGiaccaBiancaImg from './ae03aef965.webp';
import realKitBimboImg from './fd5378ff6f (1).webp';

const getSrc = (img: any) => (typeof img === 'string' ? img : img.src);

export const KITS_DATA: Kit[] = [
  // ==========================================
  // SERIE A (35€)
  // ==========================================
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
    images: [getSrc(juveImg)],
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
    images: [getSrc(interImg)],
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
    images: [getSrc(milanImg)],
    customPatches: ['Patch Serie A Enilive', 'Patch Champions League', 'Patch Coppa Italia'],
  },

  // ==========================================
  // REAL MADRID - MAGLIE (35€)
  // ==========================================
  {
    id: 'real-madrid-home-mc',
    team: 'Real Madrid',
    title: 'Real Madrid Home Kit (Manica Corta)',
    category: 'La Liga',
    price: 35,
    originalPrice: 110,
    badge: 'IN OFFERTA',
    tagColor: 'bg-yellow-900/40 text-yellow-100 border-yellow-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realCortaImg)],
    customPatches: ['Patch Champions League', 'Patch La Liga'],
  },
  {
    id: 'real-madrid-home-ml',
    team: 'Real Madrid',
    title: 'Real Madrid Home Kit (Manica Lunga)',
    category: 'La Liga',
    price: 35,
    originalPrice: 110,
    badge: 'IN OFFERTA',
    tagColor: 'bg-yellow-900/40 text-yellow-100 border-yellow-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realLungaImg)],
    customPatches: ['Patch Champions League', 'Patch La Liga'],
  },

  // ==========================================
  // REAL MADRID - PANTALONCINI (20€)
  // ==========================================
  {
    id: 'real-madrid-shorts-home',
    team: 'Real Madrid',
    title: 'Pantaloncini Real Madrid Home',
    category: 'Pantaloncini',
    price: 20,
    originalPrice: 45,
    badge: 'IN OFFERTA',
    tagColor: 'bg-slate-700/40 text-slate-100 border-slate-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realShortsImg)],
    customPatches: [],
  },

  // ==========================================
  // REAL MADRID - KIT BAMBINI (45€)
  // ==========================================
  {
    id: 'real-madrid-kit-bimbo-bianco-rosso',
    team: 'Real Madrid',
    title: 'Completo Bimbo Real Madrid Home - Bianco / Rosso',
    category: 'Kit Bambino',
    price: 45,
    originalPrice: 75,
    badge: 'IN OFFERTA',
    tagColor: 'bg-red-900/40 text-red-100 border-red-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL'],
    images: [getSrc(realKitBimboImg)],
    customPatches: [],
  },

  // ==========================================
  // REAL MADRID - KIT ALLENAMENTO & TUTE (60€)
  // ==========================================
  {
    id: 'real-madrid-tuta-verde-marmo',
    team: 'Real Madrid',
    title: 'Tuta Allenamento Zip Real Madrid - Verde Marmo',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 130,
    badge: 'IN OFFERTA',
    tagColor: 'bg-emerald-900/40 text-emerald-100 border-emerald-600',
    bgGradient: 'from-emerald-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realTutaVerdeMarmoImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-tuta-bianca',
    team: 'Real Madrid',
    title: 'Tuta Allenamento Zip Real Madrid - Bianca / Blu',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 130,
    badge: 'IN OFFERTA',
    tagColor: 'bg-blue-900/40 text-blue-100 border-blue-600',
    bgGradient: 'from-blue-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realTutaBiancaImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-tuta-verde-oro',
    team: 'Real Madrid',
    title: 'Tuta Allenamento Zip Real Madrid - Verde / Oro',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 130,
    badge: 'IN OFFERTA',
    tagColor: 'bg-emerald-900/40 text-emerald-100 border-emerald-600',
    bgGradient: 'from-emerald-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realTutaVerdeOroImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-tuta-blu',
    team: 'Real Madrid',
    title: 'Tuta Allenamento Zip Real Madrid - Blu Notte',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 130,
    badge: 'IN OFFERTA',
    tagColor: 'bg-blue-950/40 text-blue-100 border-blue-600',
    bgGradient: 'from-blue-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realTutaBluImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-tuta-bianca-nera',
    team: 'Real Madrid',
    title: 'Tuta Allenamento Zip Real Madrid - Bianca / Nera',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 130,
    badge: 'IN OFFERTA',
    tagColor: 'bg-slate-700/40 text-slate-100 border-slate-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realTutaBiancaNeraImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-tuta-gialla',
    team: 'Real Madrid',
    title: 'Tuta Allenamento Zip Real Madrid - Gialla / Grigia',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 130,
    badge: 'IN OFFERTA',
    tagColor: 'bg-yellow-900/40 text-yellow-100 border-yellow-600',
    bgGradient: 'from-yellow-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realTutaGiallaImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-giacca-bianca',
    team: 'Real Madrid',
    title: 'Giacca Zip Rappresentanza Real Madrid - Bianca',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 120,
    badge: 'IN OFFERTA',
    tagColor: 'bg-blue-900/40 text-blue-100 border-blue-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realGiaccaBiancaImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-kit-estivo-blu',
    team: 'Real Madrid',
    title: 'Kit Allenamento Estivo Real Madrid - Blu',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 110,
    badge: 'IN OFFERTA',
    tagColor: 'bg-blue-900/40 text-blue-100 border-blue-600',
    bgGradient: 'from-blue-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realKitEstivoBluImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-kit-estivo-verde-marmo',
    team: 'Real Madrid',
    title: 'Kit Allenamento Estivo Real Madrid - Verde Marmo',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 110,
    badge: 'IN OFFERTA',
    tagColor: 'bg-emerald-900/40 text-emerald-100 border-emerald-600',
    bgGradient: 'from-emerald-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realKitEstivoVerdeMarmoImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-kit-estivo-verde-oro',
    team: 'Real Madrid',
    title: 'Kit Allenamento Estivo Real Madrid - Verde / Oro',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 110,
    badge: 'IN OFFERTA',
    tagColor: 'bg-emerald-900/40 text-emerald-100 border-emerald-600',
    bgGradient: 'from-emerald-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realKitEstivoVerdeOroImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-kit-estivo-bianco',
    team: 'Real Madrid',
    title: 'Kit Allenamento Estivo Real Madrid - Bianco / Nero',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 110,
    badge: 'IN OFFERTA',
    tagColor: 'bg-slate-700/40 text-slate-100 border-slate-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realKitEstivoBiancoImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-smanicato-grigio',
    team: 'Real Madrid',
    title: 'Kit Smanicato Estivo Real Madrid - Grigio / Nero',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 100,
    badge: 'IN OFFERTA',
    tagColor: 'bg-slate-700/40 text-slate-100 border-slate-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realSmanicatoGrigioImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-smanicato-rosa',
    team: 'Real Madrid',
    title: 'Kit Smanicato Estivo Real Madrid - Rosa / Nero',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 100,
    badge: 'IN OFFERTA',
    tagColor: 'bg-pink-900/40 text-pink-100 border-pink-600',
    bgGradient: 'from-pink-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realSmanicatoRosaImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-smanicato-viola',
    team: 'Real Madrid',
    title: 'Kit Smanicato Estivo Real Madrid - Viola Total',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 100,
    badge: 'IN OFFERTA',
    tagColor: 'bg-purple-900/40 text-purple-100 border-purple-600',
    bgGradient: 'from-purple-950/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realSmanicatoViolaImg)],
    customPatches: [],
  },
  {
    id: 'real-madrid-smanicato-bianco',
    team: 'Real Madrid',
    title: 'Kit Smanicato Estivo Real Madrid - Bianco / Viola',
    category: 'Kit Allenamento',
    price: 60,
    originalPrice: 100,
    badge: 'IN OFFERTA',
    tagColor: 'bg-purple-900/40 text-purple-100 border-purple-600',
    bgGradient: 'from-slate-800/40 to-slate-900',
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    images: [getSrc(realSmanicatoBiancoImg)],
    customPatches: [],
  },
];