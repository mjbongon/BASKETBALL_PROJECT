module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Players', 'height', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
    await queryInterface.addColumn('Players', 'weight', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Players', 'height');
    await queryInterface.removeColumn('Players', 'weight');
  },
};
