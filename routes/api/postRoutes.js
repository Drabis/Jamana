//Copy from the tech_blog homework

const router = require("express").Router();
const { User, Post  } = require("../models");

router.get("/user/:id", async (req, res) => {
  // get all posts for user id in req.params.id
  const userPost = await Post.fillAll(req.params.id, {
    include: [
      {
        model: User,
      },
      {
        model: Post
      }
    ]
  })
})
// This grabs the Post by ID, and includes the user who made it, and the comments related to that post, and their respective comment creators
router.get("/post/:id", async (req, res) => {
  try {
    const rawPostData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "post_creator",
          attributes: ["username"],
        },
        {
          model: Comment,
          as: "post_comments",
          include: {
            model: User,
            as: "comment_creator",
            attributes: ["username"],
          },
        },
      ],
    });
    const postData = rawPostData.get({ plain: true });
    console.log(postData);
    res.status(200).render("blogpost", {
      postData,
      logged_in: req.session.logged_in,
      userId: req.session.user_id,
    });
  } catch (err) {
    res.status(400).json("Page not found!");
  }
});

module.exports = router;
