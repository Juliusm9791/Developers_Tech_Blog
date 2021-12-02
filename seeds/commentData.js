const { Comment } = require('../models');

const commentData = [
  {
    "comment_text": "comment 11111111111111111111",
    "userId": 1,
  },
  {
    "comment_text": "comment 22222222222222222",
    "userId": 1,
  },
  {
    "comment_text": "comment 3333333333333333333333",
    "userId": 2,
  },
  {
    "comment_text": "comment 444444444444444444444",
    "userId": 3,
  },
  {
    "comment_text": "comment 5555555555555555555",
    "userId": 4,
  },
  {
    "comment_text": "comment 6666666666666666666",
    "userId": 4,
  },
 ];

const seedComment= () => Comment.bulkCreate(commentData);

module.exports = seedComment;
