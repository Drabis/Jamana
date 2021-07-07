//Copy from the tech_blog homework

const router = require("express").Router();
const { User, Post } = require("../../models");

router.post("/submit/:id", async (req, res) => {
  console.log(req.body)
  Post.create(req.body)
    .then(({ _id }) =>
      User.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { posts: _id } },
        { new: true }
      )
    )
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/submit/:id", async (req, res) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then(data => res.json(data))
  .catch(err => res.status(422).json(err))
})

router.get("/user/:id", async (req, res) => {
  User.find({ _id: req.params.id })
    .populate("posts")
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});
// GETTING INDIVIDUAL POST

router.get("/:id", async (req, res) => {
  try{
    const post = await Post.findById(req.params.id);
    res.status(200).json(post)
  }catch(err){
    res.status(500).json(err);
  }
})
// UPDATE
router.put("/user/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.username === req.body.username){

      try{
        const updatedPost = await Post.findByIdAndUpdate(
         req.params.id,
         {
           $set: req.body,
         },
         { new: true}
        );
        res.status(200).json(updatedPost);
      }catch (err) {
        res.status(500).json(err);
      }
    }else {
      res.status(401).json("You can't update this post!")
    }

  }catch(err) {
    res.status(500).json(err);
  }
})
// DELETE
router.delete("/:id", async (req, res) => {
  console.log("hello")
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await  post.delete() 
        res.status(200).json("Post has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can't delete this post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL POSTS INCLUDE CATEGORIES

router.get("/", async (req,res ) => {
  const username = req.query.user;
  const catName = req.qurey.cat;
  try {
    let posts;
    if(username){
      post = await Post.find({username})
    }else if (catname){
      posts = await Post.find({
        categories: {
        $in: [catName]
      }})
    }else {
      posts = Post.find();
    }
    res.status(200).json(posts);
  }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
