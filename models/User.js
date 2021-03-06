const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
  },
  email: {
    type: String,
    required: "Email is Required",
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  posts: [
    {
    type: Schema.Types.ObjectId,
    ref: "Post"
    }
  ],
  profilePic: {
    type: String,
    default: ""
  }
},
{ timestamps: true }
);

userSchema.pre("save", async function (next) {
  console.log("Hello")
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);

    this.password = hashedPassword;

    next();
  } catch (err) {
    console.log(err)
    return next(err);
  }
});

userSchema.pre("updateOne", async function (next) {
  const update = this.getUpdate().$set;

  if (!update.password) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(update.password, 10);

    update.password = hashedPassword;

    next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (pass) {
  return await bcrypt.compareSync(pass, this.password);
};

const User = model("User", userSchema);

module.exports = User;
