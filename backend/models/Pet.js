const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const Pet = sequelize.define('pet', {
    name: DataTypes.STRING(100),
    species: DataTypes.STRING(100),
    avatar: DataTypes.STRING(255),
}, {
    timestamps: false,
    default: {
        allowNull: false
    }
})

module.exports = Pet;