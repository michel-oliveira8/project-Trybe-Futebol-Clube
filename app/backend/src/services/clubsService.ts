import Clubs from '../database/models/clubs';

const getAllClubs = async () => {
  const allClubs = await Clubs.findAll();

  return allClubs;
};

const getById = async (id: number) => {
  const getClubId = await Clubs.findByPk(id);

  return getClubId;
};

export default {
  getAllClubs,
  getById,
};
