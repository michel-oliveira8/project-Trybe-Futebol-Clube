import { IMatch } from '../interfaces/interface';
import Matchs from '../database/models/matchs';
import Clubs from '../database/models/clubs';
import StatusCode from '../enums/statusCode';
import MSG from '../enums/MSG';

const getAllMatchs = async () => {
  const allMatchs = await Matchs.findAll({ include: [
    { model: Clubs, as: 'homeClub', attributes: { exclude: ['id'] } },
    { model: Clubs, as: 'awayClub', attributes: { exclude: ['id'] } },
  ] });

  return allMatchs;
};

const createMatch = async (match: IMatch) => {
  const { homeTeam, awayTeam } = match;
  const verifyClubHome = await Clubs.findOne({ where: { id: homeTeam } });
  const verifyClubAway = await Clubs.findOne({ where: { id: awayTeam } });

  if (homeTeam === awayTeam) {
    return { code: StatusCode.UNAUTHORIZED, message: MSG.EQUAL_TEAMS };
  }

  if (!verifyClubHome || !verifyClubAway) {
    return { code: StatusCode.UNAUTHORIZED, message: MSG.TEAM_NOT_EXIST };
  }

  const newMatch = await Matchs.create(match);

  return newMatch as unknown as IMatch;
};

const updateMatch = async (id : number): Promise<void> => {
  await Matchs.update({ inProgress: false }, { where: { id } });
};

const updateMatchInProgress = async (homeTeamGoals: number, awayTeamGoals: number, id:number) => {
  await Matchs.update({ homeTeamGoals, awayTeamGoals }, { where: {
    id } });
};

export default {
  getAllMatchs,
  createMatch,
  updateMatch,
  updateMatchInProgress,
};
