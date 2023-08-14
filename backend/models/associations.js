const Pet = require("./Pet");
const Player = require("./Player");

const assObj = {foreignKey: {name: 'playerID', allowNull: false}}

Player.hasMany(Pet, assObj);
Pet.belongsTo(Player, assObj);

module.exports = {Pet,Player};