const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  {
    tag_name: DataTypes.STRING,
    allowNull: false
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;




// Tag

//     id

//     Integer

//     Doesn't allow null values

//     Set as primary key

//     Uses auto increment

//     tag_name

//     String


