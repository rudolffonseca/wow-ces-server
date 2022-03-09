"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Messages",
      [
        {
          message: `A reminder of one's mortality, this phrase means, "Consider the end," and is the motto of several universities. Since we tend to feel pretty invincible in our teens and 20s, it's a useful reality check and an encouragement to make the most of one's time.`,
          ticket_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: `Does your reputation mean everything to you? Then you may want to remember this motto, which translates to, "Death rather than dishonor."`,
          ticket_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: `A quote attributed to the philosopher Seneca, this Latin phrase means, "Let us live, since we must die." Life is short, basically, so we might as well enjoy it while we can.`,
          ticket_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: `Love is amazing, painful, and confusing at the same time, as those who spoke Latin apparently knew all too well. The next time you want to remind a friend of the exquisite agony that often accompanies a new relationship, use this phrase, which means, "Love is rich with honey and venom."`,
          ticket_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          message: `We can't expect to collect friends and admirers unless we're worth it. Affection and a good reputation have to be earned, according to this quote from Ovid. It means, "If you want to be loved, be lovable."`,
          ticket_id: 3,
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
