export interface LeagueGroup {
  leagueName: string;
  category: string; // Corrisponde alla categoria dei kit nel tuo progetto
  teams: string[];
}

export const LEAGUES_DATA: LeagueGroup[] = [
  {
    leagueName: 'Serie A',
    category: 'Serie A',
    teams: [
      'Juventus',
      'Inter',
      'AC Milan',
      'AS Roma',
      'SSC Napoli',
      'Lazio',
      'Atalanta',
      'Fiorentina',
      'Bologna',
      'Torino'
    ]
  },
  {
    leagueName: 'La Liga',
    category: 'La Liga',
    teams: [
      'FC Barcelona',
      'Real Madrid',
      'Atletico Madrid',
      'Real Sociedad',
      'Sevilla',
      'Villarreal',
      'Valencia',
      'Real Betis'
    ]
  },
  {
    leagueName: 'Premier League',
    category: 'Premier League',
    teams: [
      'Manchester City',
      'Arsenal',
      'Liverpool',
      'Manchester United',
      'Chelsea',
      'Tottenham Hotspur',
      'Newcastle United',
      'Aston Villa',
      'West Ham'
    ]
  },
  {
    leagueName: 'Bundesliga',
    category: 'Bundesliga',
    teams: [
      'Bayern Monaco',
      'Borussia Dortmund',
      'Bayer Leverkusen',
      'RB Lipsia',
      'Eintracht Francoforte',
      'Stoccarda'
    ]
  },
  {
    leagueName: 'Ligue 1',
    category: 'Ligue 1',
    teams: [
      'Paris Saint-Germain',
      'Olympique Marsiglia',
      'Olympique Lione',
      'AS Monaco',
      'Lille'
    ]
  }
];