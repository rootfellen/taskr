import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import User from "../../models/User";

class UserController {
  async registration(req, res, next) {
    const { name, email, password } = req.body;
    //   Found some express validator with good feedbacks, decided to apply to our registration form validation
    body("name").trim().notEmpty().withMessage("Name is required."),
      body("email")
        .trim()
        .isEmail()
        .withMessage("Invalid email address.")
        .normalizeEmail({ gmail_remove_dots: false }),
      body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters.");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //   We will not be able to register without provided email / password  / name :)
    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: "Name, email and password are requried." });
    }
    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: email }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict
    try {
      //encrypt the password
      const hashedPassword = await bcrypt.hash(password, 10);

      //create and store the new user
      const result = await User.create({
        email: email,
        password: hashedPassword,
      });

      console.log(result);

      res.status(201).json({ success: `New user ${email} created!` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async login(req, res, next) {
    try {
    } catch (error) {}
  }
  async logout(req, res, next) {
    try {
    } catch (error) {}
  }
  async refresh(req, res, next) {
    try {
    } catch (error) {}
  }
}

export default new UserController();
