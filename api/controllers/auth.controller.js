const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/error");
const User = require("../models/user.model");

module.exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.json({ message: "Please fill all the required fields" });
    }

    // checking type of password

    if (typeof password !== "string") {
      return new Error({ message: "Password must be a string" });
    }

    // checking if the email is already registered :-

    // const existingUser = await User.find({ email });
    // if (existingUser) {
    //   return res.json({ message: "User is already existing" });
    // }

    // creating a new user

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.json({ message: "New user created successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};
