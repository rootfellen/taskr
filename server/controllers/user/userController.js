import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";
import User from "../../models/User.js";

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
        username: name,
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
      const cookies = req.cookies;
      console.log(`cookie available at login: ${JSON.stringify(cookies)}`);
      const { email, password } = req.body;
      if (!email || !password)
        return res
          .status(400)
          .json({ message: "Username and password are required." });

      const foundUser = await User.findOne({ email: email }).exec();
      if (!foundUser) return res.sendStatus(401); //Unauthorized
      // evaluate password
      const match = await bcrypt.compare(password, foundUser.password);
      if (match) {
        // create JWTs
        const accessToken = jwt.sign(
          {
            UserInfo: {
              email: foundUser.email,
              id: foundUser._id,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "10s" }
        );
        const newRefreshToken = jwt.sign(
          { email: foundUser.email, id: foundUser._id },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: "1d" }
        );

        // Changed to let keyword
        let newRefreshTokenArray = !cookies?.jwt
          ? foundUser.refreshToken
          : foundUser.refreshToken.filter((rt) => rt !== cookies.jwt);

        if (cookies?.jwt) {
          /* 
            Scenario added here: 
                1) User logs in but never uses RT and does not logout 
                2) RT is stolen
                3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
            */
          const refreshToken = cookies.jwt;
          const foundToken = await User.findOne({ refreshToken }).exec();

          // Detected refresh token reuse!
          if (!foundToken) {
            console.log("attempted refresh token reuse at login!");
            // clear out ALL previous refresh tokens
            newRefreshTokenArray = [];
          }

          res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
          });
        }

        // Saving refreshToken with current user
        foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
        const result = await foundUser.save();
        console.log(result);

        // Creates Secure Cookie with refresh token
        res.cookie("jwt", newRefreshToken, {
          httpOnly: true,
          secure: true,
          sameSite: "None",
          maxAge: 24 * 60 * 60 * 1000,
        });

        // Send authorization roles and access token to user
        res.json({ accessToken });
      } else {
        res.sendStatus(401);
      }
    } catch (error) {}
  }
  async logout(req, res, next) {
    try {
    } catch (error) {}
  }
  async refresh(req, res, next) {
    try {
    } catch (error) {
      throw error;
      console.log(error);
    }
  }
}

export default new UserController();
