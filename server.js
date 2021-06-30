const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const multer = require("multer");

// session
var MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || "mongodb://localhost/applicationdb",
  collection: "sessions",
});
store.on("error", function (error) {
  console.log(error);
});
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "This is a secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store,
};
// mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jamanadb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// express app
const app = express();
app.use(session(sessionOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}
// fetching images with multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "hello.jpeg");
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

app.use(routes);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
