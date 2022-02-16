const router = require("express").Router();
const { auth } = require("../services/Auth");

// Google login route

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure,",
  });
});

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(`${process.env.FRONT_URL}/home`);
});

router.get(
  "/google",
  auth.authenticate("google", {
    scope: ["email profile"],
    prompt: "select_account",
  })
);

router.get(
  "/google/callback",
  auth.authenticate("google", {
    successRedirect: `${process.env.FRONT_URL}/home`,
    failureRedirect: "/login/failed",
  })
);

//facebook login route

router.get(
  "/facebook",
  auth.authenticate("facebook", {
    scope: ["id displayName photos email gender name"],
    prompt: "select_account",
  })
);

router.get(
  "/facebook/callback",
  auth.authenticate("facebook", {
    successRedirect: `${process.env.FRONT_URL}/home`,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
