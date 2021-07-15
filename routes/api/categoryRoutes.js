const router = require("express").Router();
const Category = require("../../models/Category");
const { User, Post } = require("../../models/Post");

router.post("/", async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
  });

  await newCategory
    .save()
    .then((data) => res.send(data._id))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
