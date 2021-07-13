const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    body: String,
    plainTextBody: String,
    author: String,

    title: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
      min: 3,
      max: 1000,
    },
    photo: {
      type: String,
    },
    username: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
