const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required",
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."],
  },
  email: {
    type: String,
    required: "Email is Required",
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);

    this.password = hashedPassword;

    next();
  } catch (err) {
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
