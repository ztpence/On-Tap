'use strict';
module.exports = (sequelize, DataTypes) => {
  var beerList = sequelize.define('beerList', {
    brewery_name: DataTypes.STRING,
    city_name: DataTypes.STRING,
    beer_name: DataTypes.STRING,
    beer_type: DataTypes.STRING
  }, {});
  beerList.associate = function(models) {
    // associations can be defined here
  };
  return beerList;
};