const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const PostComment = require('./PostComment');


Post.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Post, {
  foreignKey: 'userId',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
});

Post.belongsToMany(Comment, {
  through: {
    model: PostComment,
    unique: false,
  }
});

Comment.belongsToMany(Post, {
  through: {
    model: PostComment,
    unique: false,
  }
});

module.exports = { User, Post, Comment, PostComment, };
