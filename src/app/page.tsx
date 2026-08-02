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
        <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-600 text-red-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-4 animate-pulse shadow-lg shadow-red-900/40">
          <Zap className="w-4 h-4 fill-current text-red-500" /> Super Offerta di Lancio
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-3">
          TUTTE LE MAGLIE A <span className="text-emerald-400">€35</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
          Prezzo di listino <span className="text-red-500 font-black line-through text-lg">€110</span>. Sconto del <span className="text-emerald-400 font-bold">68%</span> su tutte le maglie disponibili!
        </p>
      </section>

      {/* Griglia Prodotti */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {KITS_DATA.map((kit) => (
            <div
              key={kit.id}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition shadow-xl"
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

                  {/* BOX PREZZO E OFFERTA (€110 sbarrato ROSSO + €35 VERDE + BADGE) */}
                  <div className="flex items-center justify-between bg-slate-950 p-3 rounded-xl border border-red-500/30 shadow-inner">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Listino:</span>
                        <span className="text-sm font-black text-red-500 line-through decoration-red-500 decoration-2">
                          €110,00
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-3xl font-black text-emerald-400">€35</span>
                        <span className="text-sm font-bold text-emerald-400">,00</span>
                      </div>
                    </div>

                    <span className="bg-red-600 text-white font-black text-xs px-3 py-1.5 rounded-lg animate-pulse shadow-lg shadow-red-600/50 uppercase tracking-wider">
                      🔥 OFFERTA
                    </span>
                  </div>
                </div>
              </div>

              {/* Pulsante Aggiungi */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => handleAddToCart(kit)}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition uppercase text-sm shadow-md shadow-emerald-950"
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