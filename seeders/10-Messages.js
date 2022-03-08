"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Messages",
      [
        {
          message:
            "alkfjlsad asdflkjasflgrle adlsgfkjflkgldg da.sadsfsaf...sdafasdfasgjldgglfkjsdfgg;skgj;griae;lk.....sgdfgsdfgfg",
          ticket_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Messages", null, {});
  },
};
