import { DataTypes, Model } from 'sequelize';
import db from '.';
import Matchs from './matchs';
// import OtherModel from './OtherModel';

class Clubs extends Model {
  public id!: number;

  public clubName: string;
}

Clubs.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  clubName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'Clubs',
  timestamps: false,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

Matchs.belongsTo(Clubs, { foreignKey: 'id' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

Clubs.hasMany(Matchs, { foreignKey: 'id' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Clubs;
