const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Socket = sequelize.define('socket', {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Socket;