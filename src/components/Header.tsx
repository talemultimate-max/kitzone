'use client';

import { ShoppingBag, MessageCircle, Zap } from 'lucide-react';

// 1. Definiamo quali informazioni (props) riceve l'Header dalla pagina principale
interface HeaderProps {
  itemCount?: number;      // Quante maglie ci sono nella lista
  onOpenCart?: () => void; // La funzione per aprire il menu laterale
}

export default function Header({ itemCount = 0, onOpenCart }: HeaderProps) {
  const whatsappNumber = '393714589297'; // Il tuo numero WhatsApp

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo KITZONE1 */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Zap className="w-5 h-5 text-slate-950 fill-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-white italic tracking-tighter leading-none">
              KITZONE<span className="text-emerald-400">1</span>
            </span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
              Vault 2026
            </span>
          </div>
        </div>

        {/* Pulsanti Azione Header */}
        <div className="flex items-center gap-3">

          {/* Tasto Supporto */}
          <a
            href={`https://wa.me/${393714589297}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-bold text-slate-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Supporto</span>
          </a>

          {/* 2. Bottone Carrello: cliccandolo si attiva `onOpenCart` */}
          <button
            onClick={onOpenCart}
            className="relative px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">La mia Lista</span>

            {/* 3. Pallino col numero di maglie selezionate */}
            {itemCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-slate-950 text-emerald-400 text-[10px] font-black flex items-center justify-center border border-emerald-400">
                {itemCount}
              </span>
            )}
          </button>

        </div>

      </div>
    </header>
  );
}