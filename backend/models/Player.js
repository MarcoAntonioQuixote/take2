const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");


const Player = sequelize.define('player', {
    name: DataTypes.STRING(100),
    age: DataTypes.INTEGER,
    avatar: DataTypes.STRING(255),
}, {
    timestamps: false,
    default: {
        allowNull: false
    }
})

module.exports = Player;