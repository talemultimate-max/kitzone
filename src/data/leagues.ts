export interface LeagueGroup {
  leagueName: string;
  category: string;
  teams: string[];
}

export const LEAGUES_DATA: LeagueGroup[] = [
  {
    leagueName: 'Serie A',
    category: 'Serie A',
    teams: ['Juventus', 'Inter', 'AC Milan', 'AS Roma', 'SSC Napoli', 'Lazio', 'Atalanta', 'Fiorentina']
  },
  {
    leagueName: 'La Liga',
    category: 'La Liga',
    teams: ['FC Barcelona', 'Real Madrid', 'Atletico Madrid', 'Sevilla', 'Valencia']
  },
  {
    leagueName: 'Premier League',
    category: 'Premier League',
    teams: ['Manchester City', 'Arsenal', 'Liverpool', 'Manchester United', 'Chelsea', 'Tottenham Hotspur']
  },
  {
    leagueName: 'Bundesliga',
    category: 'Bundesliga',
    teams: ['Bayern Monaco', 'Borussia Dortmund', 'Bayer Leverkusen', 'RB Lipsia']
  },
  {
    leagueName: 'Ligue 1',
    category: 'Ligue 1',
    teams: ['Paris Saint-Germain', 'Olympique Marsiglia', 'Olympique Lione', 'AS Monaco']
  }
];

export const TEAM_MAPPING: Record<string, { officialTeam: string; league: string }> = {
  'juve': { officialTeam: 'Juventus', league: 'Serie A' },
  'juventus': { officialTeam: 'Juventus', league: 'Serie A' },
  'inter': { officialTeam: 'Inter', league: 'Serie A' },
  'milan': { officialTeam: 'AC Milan', league: 'Serie A' },
  'roma': { officialTeam: 'AS Roma', league: 'Serie A' },
  'napoli': { officialTeam: 'SSC Napoli', league: 'Serie A' },
  'lazio': { officialTeam: 'Lazio', league: 'Serie A' },
  'atalanta': { officialTeam: 'Atalanta', league: 'Serie A' },
  'fiorentina': { officialTeam: 'Fiorentina', league: 'Serie A' },
  'real madrid': { officialTeam: 'Real Madrid', league: 'La Liga' },
  'barcelona': { officialTeam: 'FC Barcelona', league: 'La Liga' },
  'barca': { officialTeam: 'FC Barcelona', league: 'La Liga' },
  'atletico': { officialTeam: 'Atletico Madrid', league: 'La Liga' },
  'sevilla': { officialTeam: 'Sevilla', league: 'La Liga' },
  'valencia': { officialTeam: 'Valencia', league: 'La Liga' },
  'manchester city': { officialTeam: 'Manchester City', league: 'Premier League' },
  'mancity': { officialTeam: 'Manchester City', league: 'Premier League' },
  'arsenal': { officialTeam: 'Arsenal', league: 'Premier League' },
  'liverpool': { officialTeam: 'Liverpool', league: 'Premier League' },
  'manchester united': { officialTeam: 'Manchester United', league: 'Premier League' },
  'manutd': { officialTeam: 'Manchester United', league: 'Premier League' },
  'chelsea': { officialTeam: 'Chelsea', league: 'Premier League' },
  'tottenham': { officialTeam: 'Tottenham Hotspur', league: 'Premier League' },
  'bayern': { officialTeam: 'Bayern Monaco', league: 'Bundesliga' },
  'dortmund': { officialTeam: 'Borussia Dortmund', league: 'Bundesliga' },
  'leverkusen': { officialTeam: 'Bayer Leverkusen', league: 'Bundesliga' },
  'lipsia': { officialTeam: 'RB Lipsia', league: 'Bundesliga' },
  'psg': { officialTeam: 'Paris Saint-Germain', league: 'Ligue 1' },
  'marsiglia': { officialTeam: 'Olympique Marsiglia', league: 'Ligue 1' },
  'lione': { officialTeam: 'Olympique Lione', league: 'Ligue 1' },
  'monaco': { officialTeam: 'AS Monaco', league: 'Ligue 1' }
};

export function getNormalizedTeamInfo(rawTeamName: string) {
  if (!rawTeamName) return { officialTeam: 'Altro', league: 'Altro' };
  const cleanKey = rawTeamName.toLowerCase().trim();
  
  for (const key of Object.keys(TEAM_MAPPING)) {
    if (cleanKey.includes(key)) {
      return TEAM_MAPPING[key];
    }
  }
  
  return { officialTeam: rawTeamName, league: 'Altro' };
}