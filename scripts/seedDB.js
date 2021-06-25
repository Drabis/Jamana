const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const db =require("../models");

const userSeed = [
  {
    name: "Bing",
    email: "admin@zk.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: true,
  },
  {
    name: "Jon",
    email: "jon@zk.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
  },
];
module.exports = userSeed;