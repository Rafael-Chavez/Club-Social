module.exports = function (sequelize, DataType) {
  const Post = sequelize.define("Post", {
    school: DataType.STRING,
    post: DataType.STRING,
  });
  return Post;
};
