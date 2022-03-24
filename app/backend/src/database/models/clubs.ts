import { DataTypes, Model } from 'sequelize';
import db from '.';

class Clubs extends Model {
  declare id: number;

  declare clubName: string;
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
  tableName: 'clubs',
  timestamps: false,
});

export default Clubs;
