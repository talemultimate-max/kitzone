import React, { useState } from 'react';
import { LEAGUES_DATA, LeagueGroup } from '../data/leagues';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTeam: (team: string) => void;
  onSelectLeague: (league: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onSelectTeam,
  onSelectLeague,
}) => {
  const [expandedLeague, setExpandedLeague] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleLeague = (leagueName: string) => {
    setExpandedLeague(expandedLeague === leagueName ? null : leagueName);
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Sfondo scuro trasparente (cliccabile per chiudere) */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Pannello laterale */}
      <div className="relative w-80 max-w-full bg-slate-900 border-r border-slate-800 text-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        
        {/* Intestazione del Menu */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wider text-amber-400">CATALOGO KITS</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            ✕
          </button>
        </div>

        {/* Lista dei Campionati (Accordion) */}
        <div className="p-4 space-y-2 flex-1">
          <button
            onClick={() => {
              onSelectLeague('Tutti');
              onClose();
            }}
            className="w-full text-left px-4 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 font-semibold text-slate-200 transition flex items-center justify-between"
          >
            <span>🔥 Tutti i Prodotti / Offerte</span>
            <span>→</span>
          </button>

          <div className="pt-2 pb-1 text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
            Top 5 Campionati
          </div>

          {LEAGUES_DATA.map((group: LeagueGroup) => {
            const isExpanded = expandedLeague === group.leagueName;
            return (
              <div key={group.leagueName} className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-950/40">
                {/* Pulsante Campionato */}
                <button
                  onClick={() => toggleLeague(group.leagueName)}
                  className="w-full px-4 py-3 text-left font-medium flex items-center justify-between hover:bg-slate-800/50 transition text-slate-100"
                >
                  <span className="flex items-center space-x-2">
                    <span>⚽</span>
                    <span>{group.leagueName}</span>
                  </span>
                  <span className={`transform transition-transform duration-200 text-slate-400 ${isExpanded ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </button>

                {/* Sottoliste Squadre (appaiono se espanso) */}
                {isExpanded && (
                  <div className="bg-slate-900/80 px-3 py-2 space-y-1 border-t border-slate-800/60">
                    <button
                      onClick={() => {
                        onSelectLeague(group.category);
                        onClose();
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs font-semibold text-amber-400 hover:bg-slate-800 rounded-lg transition"
                    >
                      Visualizza tutto {group.leagueName} ↗
                    </button>
                    {group.teams.map((team) => (
                      <button
                        key={team}
                        onClick={() => {
                          onSelectTeam(team);
                          onClose();
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                        <span>{team}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer del Menu */}
        <div className="p-4 border-t border-slate-800 text-center text-xs text-slate-500 bg-slate-950">
          Seleziona una squadra per filtrare i kit istantaneamente.
        </div>

      </div>
    </div>
  );
};