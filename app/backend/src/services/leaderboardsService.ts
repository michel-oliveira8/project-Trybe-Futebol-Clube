import { Ileaderboard, Match } from '../interfaces/interface';
import Clubs from '../database/models/clubs';
import Matchs from '../database/models/matchs';

const leaderboardClubs: Ileaderboard[] = [];

const leaderboard = (clubs: Clubs[]) => {
  leaderboardClubs.length = 0;
  clubs.forEach((club) => {
    leaderboardClubs.push({
      name: club.clubName,
      totalPoints: 0,
      totalGames: 0,
      totalVictories: 0,
      totalDraws: 0,
      totalLosses: 0,
      goalsFavor: 0,
      goalsOwn: 0,
      goalsBalance: 0,
      efficiency: 0,
    });
  });
  return leaderboardClubs;
};

const winHomeClub = (leaderboards: Ileaderboard[], matchs: Match[]) => {
  leaderboards.forEach((club) => {
    const team = club;
    matchs.forEach((mt) => {
      if (mt.homeClub.clubName === club.name && mt.homeTeamGoals > mt.awayTeamGoals) {
        team.totalPoints += 3;
        team.totalGames += 1;
        team.totalVictories += 1;
        team.goalsFavor += mt.homeTeamGoals;
        team.goalsOwn += mt.awayTeamGoals;
        team.goalsBalance += mt.homeTeamGoals - mt.awayTeamGoals;
        team.efficiency = +((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2);
      }
    });
  });
};

const winAwayClub = (leaderboards: Ileaderboard[], matchs: Match[]) => {
  leaderboards.forEach((club) => {
    const team = club;
    matchs.forEach((mt) => {
      if (mt.homeClub.clubName === club.name && mt.homeTeamGoals < mt.awayTeamGoals) {
        team.totalGames += 1;
        team.totalLosses += 1;
        team.goalsFavor += mt.homeTeamGoals;
        team.goalsOwn += mt.awayTeamGoals;
        team.goalsBalance += mt.homeTeamGoals - mt.awayTeamGoals;
        team.efficiency = +((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2);
      }
    });
  });
};

const drawMatch = (leaderboards: Ileaderboard[], matchs: Match[]) => {
  leaderboards.forEach((club) => {
    const team = club;
    matchs.forEach((mt) => {
      if (mt.homeClub.clubName === club.name && mt.homeTeamGoals === mt.awayTeamGoals) {
        team.totalPoints += 1;
        team.totalGames += 1;
        team.totalDraws += 1;
        team.goalsFavor += mt.awayTeamGoals;
        team.goalsOwn += mt.homeTeamGoals;
        team.efficiency = +((team.totalPoints / (team.totalGames * 3)) * 100).toFixed(2);
      }
    });
  });
};

const orderClassification = (order : Ileaderboard[]) => order.sort((a, b) => {
  if (a.totalPoints > b.totalPoints) return -1;
  if (a.totalPoints < b.totalPoints) return 1;
  if (a.goalsBalance > b.goalsBalance) return -1;
  if (a.goalsBalance < b.goalsBalance) return 1;
  if (a.totalVictories > b.totalVictories) return -1;
  if (a.totalVictories < b.totalVictories) return 1;
  if (a.goalsFavor > b.goalsFavor) return -1;
  if (a.goalsFavor < b.goalsFavor) return 1;
  if (a.goalsOwn > b.goalsOwn) return -1;
  if (a.goalsOwn < b.goalsOwn) return 1;
  return 0;
});

const allClassification = async () => {
  const matchs = await Matchs.findAll({
    where: { inProgress: false },
    include: [
      { model: Clubs, as: 'homeClub', attributes: { exclude: ['id'] } },
      { model: Clubs, as: 'awayClub', attributes: { exclude: ['id'] } },
    ],
  }) as unknown as Match[];
  const clubs = await Clubs.findAll();
  leaderboard(clubs);
  winHomeClub(leaderboardClubs, matchs);
  winAwayClub(leaderboardClubs, matchs);
  drawMatch(leaderboardClubs, matchs);
  return orderClassification(leaderboardClubs);
};

export default {
  leaderboard,
  winHomeClub,
  winAwayClub,
  drawMatch,
  orderClassification,
  allClassification,
};
