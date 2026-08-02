'use client';

import { useState } from 'react';
import { ShoppingBag, Trophy, Zap } from 'lucide-react';
import { KITS_DATA } from '@/data/kits';
import { Kit, CartItem } from '@/types/kit';
import CartDrawer from '@/components/CartDrawer';

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (kit: Kit) => {
    const newItem: CartItem = {
      cartItemId: `${kit.id}-${Date.now()}`,
      kit: kit,
      quantity: 1,
      size: 'M',
    };
    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            <span className="font-black text-xl tracking-wider uppercase text-white">KITZONE</span>
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition"
          >
            <ShoppingBag className="w-5 h-5 text-slate-200" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Banner Offerta */}
      <section className="max-w-6xl mx-auto px-4 py-8 text-center">
        <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-800/80 text-red-400 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 animate-pulse">
          <Zap className="w-4 h-4 fill-current" /> Offerta di Lancio
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-3">
          Tutte le maglie a <span className="text-emerald-400">€35</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Prezzo originale <span className="line-through decoration-red-500 font-bold text-slate-300">€110</span>. Risparmi subito il 68% su ogni kit!
        </p>
      </section>

      {/* Griglia Prodotti */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {KITS_DATA.map((kit) => (
            <div
              key={kit.id}
              className="group bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition shadow-lg"
            >
              <div>
                {/* Immagine */}
                <div className="h-64 relative bg-slate-950 overflow-hidden flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={kit.images && kit.images.length > 0 ? kit.images[0] : kit.image}
                    alt={kit.title || kit.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Dettagli Prodotto */}
                <div className="p-4 space-y-3">
                  <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition">
                    {kit.title || kit.name}
                  </h3>

                  {/* BOX GRAFICA OFFERTA (€110 sbarrato + €35 + BADGE LAMPEGGIANTE) */}
                  <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Listino <span className="line-through decoration-red-500 font-bold text-slate-400">€110,00</span>
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black text-emerald-400">€35</span>
                        <span className="text-xs font-bold text-emerald-500">,00</span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-red-600 text-white rounded-lg animate-pulse shadow-md shadow-red-900/50">
                      🔥 OFFERTA
                    </span>
                  </div>
                </div>
              </div>

              {/* Pulsante Aggiungi */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => handleAddToCart(kit)}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition uppercase text-sm"
                >
                  <ShoppingBag className="w-4 h-4" /> Aggiungi al Carrello
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveItem}
      />
    </main>
  );
}