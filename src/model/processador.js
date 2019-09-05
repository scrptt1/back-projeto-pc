const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const Processador = sequelize.define('processador', {
    id:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
    },
    socket:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: 'socket',
        referencesKey: 'id'
    },
    fabricante:{

    }
});