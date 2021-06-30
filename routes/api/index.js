const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const categoriesRoutes = require ("./categoryRoutes")


router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/categories", categoriesRoutes);

module.exports = router;
