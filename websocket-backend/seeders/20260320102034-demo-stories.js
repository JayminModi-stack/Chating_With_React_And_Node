"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("stories", [
      {
        user_id: 1,
        images_stories: "/uploads/stories/1.jpg",
        title: "Looking at the first image.",
        viewers: "",
        stories_user_id: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        images_stories: "/uploads/stories/2.jpg",
        title: "Looking at the second image.",
        viewers: "",
        stories_user_id: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        images_stories: "/uploads/stories/3.jpg",
        title: "Looking at the third image.",
        viewers: "",
        stories_user_id: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        images_stories: "/uploads/stories/4.jpg",
        title: "Looking at the fourth image.",
        viewers: "",
        stories_user_id: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        images_stories: "/uploads/stories/5.jpg",
        title: "Looking at the fifth image.",
        viewers: "",
        stories_user_id: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        images_stories: "/uploads/stories/6.jpg",
        title: "Looking at the sixth image.",
        viewers: "",
        stories_user_id: "",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
