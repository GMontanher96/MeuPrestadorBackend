"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "users",
      "profile_id",
       {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'profiles', key: 'id' }, // CHAVE ESTRAGEIRA
        onUpdate: 'CASCADE', // SEMPRE QUE HÁ ALGUMA ALTERAÇÃO NO RELACIONAMENTO, ALTERA A COLUMN DE REFERENCIA
        onDelete: 'CASCADE', // SE UM USUÁRIO FOR DELETADO, DELETA OS ENDEREÇOS
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'profile_id'
    );
  },
};
