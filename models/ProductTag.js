const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  {
    id: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id',
      }
  },
  {
    tag_id: DataTypes.INTEGER,
    references: {
      model: 'tag',
      key: 'id',
      }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;