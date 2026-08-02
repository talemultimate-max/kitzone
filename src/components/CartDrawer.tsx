'use client';

import { CartItem } from '@/types/kit';
import { X, Trash2, MessageCircle, ShoppingBag, Sparkles, ShieldCheck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const whatsappNumber = '393714589297'; // Sostituisci col tuo numero reale!

  // Calcolo totale stimato
  const totalAmount = items.reduce((sum, item) => sum + item.kit.price * item.quantity, 0);

  // Generatore di Testo Formattato per WhatsApp
  const generateWhatsAppMessage = () => {
    let text = `👋 *NUOVA RICHIESTA D'ORDINE KITZONE1*\n\n`;
    text += `Ecco la lista delle maglie selezionate:\n`;
    text += `------------------------------------\n`;

    items.forEach((item, index) => {
      text += `*${index + 1}. ${item.kit.title}*\n`;
      text += `   • Taglia: *${item.size}*\n`;
      if (item.customName || item.customNumber) {
        text += `   • Stampa: *${item.customName || ''} ${item.customNumber || ''}*\n`;
      }
      if (item.patch) {
        text += `   • Patch: *${item.patch}*\n`;
      }
      text += `   • Prezzo indicativo: € ${item.kit.price.toFixed(2)}\n\n`;
    });

    text += `------------------------------------\n`;
    text += `💰 *Totale Stimato:* € ${totalAmount.toFixed(2)}\n\n`;
    text += `Vorrei procedere con il controllo disponibilità e dettagli spedizione! Grazie.`;

    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-slate-950 border-l border-slate-800 h-full flex flex-col justify-between p-6 shadow-2xl text-slate-100">
        
        {/* Header Drawer */}
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-black uppercase tracking-wider text-white">
                La Tua Lista ({items.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lista Articoli Aggiunti */}
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-700 mx-auto" />
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
                La tua lista selezioni è vuota
              </p>
              <p className="text-slate-500 text-[11px] max-w-xs mx-auto">
                Sfoglia il catalogo, seleziona la tua taglia e aggiungi le maglie per creare il tuo ordine.
              </p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.cartItemId}
                  className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4 flex items-start justify-between gap-3 relative group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block">
                      {item.kit.team}
                    </span>
                    <h4 className="text-xs font-black text-white leading-snug">
                      {item.kit.title}
                    </h4>
                    
                    <div className="flex flex-wrap gap-1.5 pt-1 text-[10px] font-bold text-slate-300">
                      <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-md">
                        Taglia: <strong className="text-emerald-400">{item.size}</strong>
                      </span>
                      {(item.customName || item.customNumber) && (
                        <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md">
                          Stampa: {item.customName} {item.customNumber}
                        </span>
                      )}
                      {item.patch && (
                        <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-md text-slate-400">
                          {item.patch}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                    <button
                      onClick={() => onRemoveItem(item.cartItemId)}
                      className="text-slate-500 hover:text-red-400 transition-colors p-1"
                      title="Rimuovi"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-black text-white">
                      € {item.kit.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Drawer con Totale e Tasto WhatsApp */}
        {items.length > 0 && (
          <div className="border-t border-slate-800 pt-4 space-y-4">
            <div className="flex items-center justify-between text-sm font-black">
              <span className="text-slate-400 uppercase tracking-wider">Totale Stimato</span>
              <span className="text-2xl text-emerald-400">€ {totalAmount.toFixed(2)}</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Verificheremo disponibilità e dettagli direttamente su WhatsApp.</span>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-2xl text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" />
              <span>Invia Lista su WhatsApp</span>
            </a>

            <button
              onClick={onClearCart}
              className="w-full text-center text-[10px] text-slate-500 hover:text-slate-300 font-bold uppercase tracking-wider"
            >
              Svuota Selezione
            </button>
          </div>
        )}

      </div>
    </div>
  );
}