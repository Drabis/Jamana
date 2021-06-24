const router = require("express").Router();
const userRoutes = require("./userRoutes");
// const postRoute = require("./postRoute");


router.use("/users", userRoutes);
// router.use("/post", postRoute);
// router.use("/category", userRoutes);

module.exports = router;
