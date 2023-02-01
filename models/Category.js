const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  {
    category_name: DataTypes.STRING,
    allowNull: false

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Book extends Model {}

// Book.init(
//   {
//     book_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//     },
//     author: {
//       type: DataTypes.STRING,
//     },
//     isbn: {
//       type: DataTypes.STRING,
//     },
//     pages: {
//       type: DataTypes.INTEGER,
//     },
//     edition: {
//       type: DataTypes.INTEGER,
//     },
//     is_paperback: {
//       type: DataTypes.BOOLEAN,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'book',
//   }
// );

// module.exports = Book;

