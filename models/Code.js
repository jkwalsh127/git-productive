const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Code extends Model {}

Code.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
        content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      projects_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "project",
          key: "id",
        },
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: "code",
    }
  );
  
  module.exports = Code;
  