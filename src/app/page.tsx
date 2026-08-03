'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import KitModal from '@/components/KitModal';
import CartDrawer from '@/components/CartDrawer';
import { NavigationDrawer } from '@/components/NavigationDrawer';
import { KITS_DATA } from '@/data/kits';
import { getNormalizedTeamInfo } from '@/data/leagues';
import { Kit, CartItem } from '@/types/kit';
import { MessageCircle, ArrowRight, Zap, Sparkles, Trophy, ShoppingBag, Menu } from 'lucide-react';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutte');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [activeKitForModal, setActiveKitForModal] = useState<Kit | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const defaultMessage = encodeURIComponent('Ciao KITZONE1! Vorrei informazioni sul catalogo maglie.');

  // Logica di filtraggio completamente automatizzata e flessibile
  const filteredKits = KITS_DATA.filter((kit) => {
    if (selectedTeam) {
      const kitInfo = getNormalizedTeamInfo(kit.team);
      const targetInfo = getNormalizedTeamInfo(selectedTeam);
      return kitInfo.officialTeam.toLowerCase() === targetInfo.officialTeam.toLowerCase();
    }

    if (selectedCategory === 'Tutte') return true;
    
    const kitInfo = getNormalizedTeamInfo(kit.team);
    return kitInfo.league.toLowerCase() === selectedCategory.toLowerCase() || 
           kit.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <>
      <Header
        itemCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-md"
        >
          <Menu className="w-4 h-4" />
          <span>Menu Campionati & Squadre ☰</span>
        </button>
      </div>

      <main className="min-h-screen bg-grid-pattern relative pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          
          {/* HERO BANNER */}
          <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl mb-14 glow-emerald">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-black uppercase tracking-widest">
                  <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400 animate-pulse" />
                  <span>OFFICIAL KITZONE1 VAULT • 2026</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                  KIT CULTURE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                    REDEFINED.
                  </span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
                  Sfoglia il catalogo, seleziona la tua taglia, personalizza con nome e patch, poi inviaci l&apos;ordine direttamente su WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                  <a
                    href="#catalogo"
                    className="w-full sm:w-auto px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Vedi il Catalogo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/393714589297?text=${defaultMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-extrabold rounded-2xl text-xs uppercase tracking-wider border border-slate-800 flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Richiedi Maglia Introvabile</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 space-y-3">
                <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                  <Trophy className="w-4 h-4 text-emerald-400" />
                  <span>Ordina in 3 Passi</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-[11px]">1</span>
                    <span>Scegli le maglie dal catalogo</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-800 text-emerald-400 font-black flex items-center justify-center shrink-0 text-[11px]">2</span>
                    <span>Scegli Taglia, Nome e Patch</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center shrink-0 text-[11px]">3</span>
                    <span>Invia la tua lista su WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CATALOGO */}
          <section id="catalogo" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-widest mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Catalogo Ufficiale</span>
                </div>
                <h2 className="text-3xl font-black text-white italic uppercase tracking-tight">
                  {selectedTeam ? `Squadra: ${selectedTeam}` : 'MAGLIE DISPONIBILI'}
                </h2>
                {selectedTeam && (
                  <button 
                    onClick={() => setSelectedTeam(null)}
                    className="text-xs text-emerald-400 underline mt-1 block hover:text-emerald-300"
                  >
                    Annulla filtro squadra (Mostra tutti)
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {['Tutte', 'Serie A', 'Premier League', 'La Liga', 'Retro Vintage', 'National & Special'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSelectedTeam(null);
                    }}
                    className={`px-4 py-2 rounded-xl uppercase tracking-wider transition-all border ${
                      selectedCategory === cat && !selectedTeam
                        ? 'bg-emerald-500 text-slate-950 font-black border-emerald-400 shadow-md shadow-emerald-500/20'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* GRIGLIA PRODOTTI */}
            {filteredKits.length === 0 ? (
              <div className="text-center py-16 bg-slate-950 border border-slate-800 rounded-3xl">
                <p className="text-slate-400 text-sm font-bold">Nessun kit trovato per questa selezione.</p>
                <button 
                  onClick={() => { setSelectedTeam(null); setSelectedCategory('Tutte'); }}
                  className="mt-3 px-4 py-2 bg-emerald-500 text-slate-950 rounded-xl text-xs font-black uppercase"
                >
                  Mostra Tutti i Prodotti
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredKits.map((kit) => (
                  <div
                    key={kit.id}
                    className="group bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
                  >
                    <div className="h-64 relative bg-slate-900 overflow-hidden">
                      {kit.images && kit.images.length > 0 ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={kit.images[0]}
                          alt={kit.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-700">
                          <Trophy className="w-12 h-12" />
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50 p-4 flex flex-col justify-between pointer-events-none">
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-black px-2.5 py-1 rounded-lg border uppercase tracking-wider ${kit.tagColor}`}>
                            {kit.badge}
                          </span>
                          <span className="text-xs font-black text-slate-100 bg-slate-950/80 backdrop-blur px-2.5 py-1 rounded-lg border border-slate-800">
                            € {kit.price.toFixed(2)}
                          </span>
                        </div>
                        
                        <span className="text-xs font-black uppercase tracking-widest text-slate-300">
                          {kit.team}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                          {kit.category}
                        </span>
                        <h3 className="text-sm font-black text-white leading-snug group-hover:text-emerald-400 transition-colors">
                          {kit.title}
                        </h3>
                      </div>

                      <button
                        onClick={() => setActiveKitForModal(kit)}
                        className="w-full py-3 bg-slate-900 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 border border-slate-800 hover:border-emerald-500 font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Seleziona & Personalizza</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

        </div>
      </main>

      <KitModal
        kit={activeKitForModal}
        onClose={() => setActiveKitForModal(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCartItems([])}
      />

      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectTeam={(teamName) => {
          setSelectedTeam(teamName);
          setIsDrawerOpen(false);
        }}
        onSelectLeague={(leagueName) => {
          setSelectedCategory(leagueName);
          setSelectedTeam(null);
          setIsDrawerOpen(false);
        }}
      />
    </>
  );
}