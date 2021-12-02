const { PostComment } = require('../models');

const postcommentData = [
  {
    "postId": "1",
    "commentId": "1"
  },
  {
    "postId": "1",
    "commentId": "2"
  },
  {
    "postId": "2",
    "commentId": "3"
  },
  {
    "postId": "2",
    "commentId": "4"
  },
  {
    "postId": "4",
    "commentId": "5"
  },
  {
    "postId": "4",
    "commentId": "6"
  },
 ];

const seedPostComment= () => PostComment.bulkCreate(postcommentData);

module.exports = seedPostComment;
