const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Module extends Model {}

Module.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    install: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    docs: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'module',
  }
);

module.exports = Module;
