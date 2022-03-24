import { DataTypes, Model } from 'sequelize';
import db from '.';
import Clubs from './clubs';

class Matchs extends Model {
  public id: number;

  public homeTeam: number;

  public homeTeamGoals: number;

  public awayTeam: number;

  public awayTeamGoals: number;

  public inProgress: number;
}

Matchs.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  home_team: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'clubs',
      key: 'id',
    },
  },
  home_team_goals: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  away_team: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'clubs',
      key: 'id',
    },
  },
  away_team_goals: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  in_progress: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'Matchs',
  tableName: 'matchs',
  timestamps: false,
});

Matchs.belongsTo(Clubs, { foreignKey: 'home_team', as: 'homeClub' });

Matchs.belongsTo(Clubs, { foreignKey: 'away_team', as: 'awayClub' });

export default Matchs;
