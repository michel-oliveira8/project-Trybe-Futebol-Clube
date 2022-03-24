import Matchs from '../database/models/matchs';
import Clubs from '../database/models/clubs';

const getAllMatchs = async () => {
  const allMatchs = await Matchs.findAll({ include: [
    { model: Clubs, as: 'homeClub', attributes: { exclude: ['id'] } },
    { model: Clubs, as: 'awayClub', attributes: { exclude: ['id'] } },
  ] });

  return allMatchs;
};

export default {
  getAllMatchs,
};
