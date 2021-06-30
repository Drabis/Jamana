const router = require("express").Router();
const User = require("../../models/User.js");
const bcrypt = require("bcrypt");
const { Router } = require("express");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    const userData = await user.save();
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// LOGIN
router.post("/signin", async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.comparePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  if (req.body.user_id === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You cannot update this account!");
  }
});
// DELETE

router.delete("/user/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.deleteMany({ username: user.username });
        await User.findOneAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
      } catch (err) {
        res.status(500).json("User not found!");
      }
    } else {
      res.status(401).json("User cannot delete this User!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGOUT
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;
