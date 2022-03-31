export interface Login {
  email: string;
  password:string;
}

export interface Token {
  id: number,
  email: string,
}

export interface CodeResponse {
  code?: number,
  message?: string,
}

export interface EncodeResult {
  id: number,
  token: string,
  expiresIn: number,
  algorithm: string,
}

export interface IMatch {
  homeTeam:number,
  awayTeam: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,
  code?: number,
  message?: string,
}

export interface Ileaderboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}

export interface Match extends IMatch {
  homeClub: { clubName: string }
  awayClub: { clubName: string }
}
