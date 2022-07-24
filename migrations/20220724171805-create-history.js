'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      angka1: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      angka2: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      tipe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hasil: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      formula: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Histories');
  }
};