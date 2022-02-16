const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook");
const bcrypt = require("bcrypt");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("./Db");

//google strategy

passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.GOOGLE_AUTH_KEY}`,
      clientSecret: `${process.env.GOOGLE_AUTH_SECRET}`,
      callbackURL: "/api/auth/google/callback",
    },
    async (req, accessToken, refreshToken, profile, done) => {
      const user = await db.user.findUnique({
        where: { email: profile._json.email },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
        },
      });

      if (user) {
        return done(null, user);
      }

      return done(
        null,
        await db.user.create({
          data: {
            email: profile._json.email,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            avatar: profile.photos[0].value,
            provider: "google",
          },
          include: {
            tags: {
              include: {
                tag: true,
              },
            },
          },
        })
      );
    }
  )
);

//facebook strategy

//local login

passport.use(
  new LocalStrategy({ usernameField: "email" }, async function verify(
    email,
    password,
    done
  ) {
    try {
      const user = await db.user.findUnique({
        where: {
          email: email,
        },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
        },
      });

      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return done(null, false, { message: "Incorrect password." });
      }

      const { password: userPassword, ...normalizedUser } = user;
      return done(null, normalizedUser);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  try {
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = {
  auth: passport,

  // Middleware to make private routes
  withAuth: (req, res, next) => {
    if (req.user) {
      return next();
    }

    // If there is no user connected, send unauthorized status code
    res.status(401).send("Unauthorized");
  },
};
