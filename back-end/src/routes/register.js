const bcrypt = require("bcrypt");
const { user } = require("../services/Db");

const db = require("../services/Db");

/**
 * Create a new user account
 */
const register = async (req, res) => {
  const {
    email,
    password,
    dateOfBirth,
    firstname,
    lastname,
    gender,
    newsletter,
  } = req.body;

  try {
    await db.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 12),
        dateOfBirth: new Date(dateOfBirth),
        firstname,
        lastname,
        gender: parseInt(gender),
        newsletter: parseInt(newsletter),
      },
    });

    res.status(201).send("created");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  register,
};
