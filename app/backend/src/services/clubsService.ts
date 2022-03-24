import Clubs from '../database/models/clubs';

const getAllClubs = async () => {
  const allClubs = await Clubs.findAll();

  return allClubs;
};

export default {
  getAllClubs,
};
