const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {

    body: Object,
    title: String,
    description: String


    // title: {
    //   type: String,
    //   trim: true,
    //   require: true,
    //   unique: true,
    // },
    // description: {
    //   type: String,
    //   require: true,
    // },
    // username: {
    //   type: String,
    //   require: true,
    // },
    // categories: {
    //   type: Array,
    //   require: false,
    // },
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

module.exports = Post;
