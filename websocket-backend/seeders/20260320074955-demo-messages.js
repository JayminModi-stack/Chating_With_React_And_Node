"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("messages", [
      {
        sender_id: 1,
        receiver_id: 2,
        content: "Hello 👋",
        status: "read",
        timestamp: new Date(),
        images: JSON.stringify([]),
        delete_user_id: JSON.stringify([]),
      },
      {
        sender_id: 2,
        receiver_id: 1,
        content: "Hello 👋",
        status: "read",
        timestamp: new Date(),
        images: JSON.stringify([]),
        delete_user_id: JSON.stringify([]),
      },
      {
        sender_id: 1,
        receiver_id: 2,
        content: "please check and confirm image",
        status: "read",
        timestamp: new Date(),
        images: JSON.stringify([
          { url: "http://localhost:3001/uploads/demoimage1.jpg" },
          { url: "http://localhost:3001/uploads/demoimage2.jpg" },
          { url: "http://localhost:3001/uploads/demoimage3.jpg" },
          { url: "http://localhost:3001/uploads/demoimage4.jpg" },
          { url: "http://localhost:3001/uploads/demoimage5.jpg" },
        ]),
        delete_user_id: JSON.stringify([]),
      },
      {
        sender_id: 2,
        receiver_id: 1,
        content:
          "perfect image and my side video please check and confirm Video",
        status: "read",
        timestamp: new Date(),
        images: JSON.stringify([
          { url: "http://localhost:3001/uploads/demovideo.mp4" },
        ]),
        delete_user_id: JSON.stringify([]),
      },
      {
        sender_id: 1,
        receiver_id: 2,
        content: "please check and confirm document File",
        status: "read",
        timestamp: new Date(),
        images: JSON.stringify([
          { url: "http://localhost:3001/uploads/document.docx" },
        ]),
        delete_user_id: JSON.stringify([]),
      },
      {
        sender_id: 2,
        receiver_id: 1,
        content: "perfect by",
        status: "read",
        timestamp: new Date(),
        images: JSON.stringify([]),
        delete_user_id: JSON.stringify([]),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("messages", null, {});
  },
};
