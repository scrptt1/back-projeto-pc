const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const PlacaMae = sequelize.define("placa-mae", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  },
  socket_id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    references: 'socket',
    referencesKey: 'id'
  },
  fabricante:{
    allowNull: false,
    type: Sequelize.STRING(10),
    validate: {
      len: [2, 10],
      equals: 'AMD' || 'INTEL'
    }
  },
  socket_ram: {
    allowNull: false,
    type: Sequelize.INTEGER,
    validate: {
      len: [2, 40]
    }
  },
  chipset: {
    allowNull: false,
    type: Sequelize.STRING(40),
    validate: {
      len: [2, 40]
    }
  }
});

module.exports = PlacaMae;
