'use client';

import { useState, useEffect } from 'react';
import { Kit, CartItem } from '@/types/kit';
import { X, Sparkles, ShoppingBag, Shield, User, Hash } from 'lucide-react';

interface KitModalProps {
  kit: Kit | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export default function KitModal({ kit, onClose, onAddToCart }: KitModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [customName, setCustomName] = useState<string>('');
  const [customNumber, setCustomNumber] = useState<string>('');
  const [selectedPatch, setSelectedPatch] = useState<string>('Nessuna Patch');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [kit]);

  if (!kit) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: CartItem = {
      cartItemId: `${kit.id}-${selectedSize}-${customName}-${customNumber}-${selectedPatch}-${Date.now()}`,
      kit,
      size: selectedSize,
      customName: customName.trim() ? customName.trim().toUpperCase() : undefined,
      customNumber: customNumber.trim() ? customNumber.trim() : undefined,
      patch: selectedPatch !== 'Nessuna Patch' ? selectedPatch : undefined,
      quantity: 1,
    };

    onAddToCart(newItem);
    onClose();
  };

  const patchesList = kit.customPatches || [
    'UEFA Champions League',
    'Patch Ufficiale Serie A',
    'Patch Premier League',
    'Badge d\'Onore 7 UCL',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <div className="md:col-span-5 space-y-3">
            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative">
              {kit.images && kit.images.length > 0 ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={kit.images[selectedImageIndex]}
                  alt={kit.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600 text-xs">
                  Nessuna Foto
                </div>
              )}
            </div>

            {kit.images && kit.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {kit.images.map((imgUrl, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImageIndex === index
                        ? 'border-emerald-400 scale-105'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={imgUrl} 
                      alt="Thumbnail" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-7 space-y-4">
            <div>
              <span className={`inline-block text-[10px] font-black px-2.5 py-1 rounded-lg border uppercase tracking-wider mb-2 ${kit.tagColor}`}>
                {kit.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white italic uppercase tracking-tight leading-snug">
                {kit.title}
              </h3>
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mt-1">
                {kit.team} • € {kit.price.toFixed(2)}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-300 mb-1.5">
                  1. Taglia *
                </label>
                <div className="grid grid-cols-5 gap-1.5">
                  {kit.availableSizes.map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 rounded-xl text-xs font-black transition-all border ${
                        selectedSize === size
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 space-y-2.5">
                <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Stampa Personalizzata</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2">
                    <label className="block text-[9px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1">
                      <User className="w-3 h-3 text-emerald-400" /> Nome
                    </label>
                    <input
                      type="text"
                      placeholder="Es. RONALDO"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-bold text-white uppercase placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-bold text-slate-400 uppercase mb-1 flex items-center gap-1">
                      <Hash className="w-3 h-3 text-emerald-400" /> N°
                    </label>
                    <input
                      type="text"
                      placeholder="9"
                      maxLength={2}
                      value={customNumber}
                      onChange={(e) => setCustomNumber(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-bold text-white uppercase placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 text-center"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-black uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" /> 2. Patch Manica
                </label>
                <select
                  value={selectedPatch}
                  onChange={(e) => setSelectedPatch(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none focus:border-emerald-500"
                >
                  <option value="Nessuna Patch">Nessuna Patch</option>
                  {patchesList.map((patch) => (
                    <option key={patch} value={patch}>
                      {patch}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 mt-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Aggiungi alla Lista Selezione</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}