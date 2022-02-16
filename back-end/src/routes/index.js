const { auth, withAuth } = require("../services/Auth");
const { register } = require("./register");
const tagsRouter = require("./tag");
const usersRouter = require("./user");
const placesRouter = require("./places");
const searchRouter = require("./search");
const authRoute = require("../routes/auth");


const setupRoutes = (app) => {
   
  app.use("/api/auth", authRoute);

  // Home Page
  app.get("/api/", (req, res) => {
    res.send("Welcome to WCS Express + REACT starter project");
  });

  // Login route
  app.post("/api/login", auth.authenticate("local"), (req, res) => {
    res.send(req.user);
  });

  // Facebook login route

  app.get(
    "/api/login/facebook/callback",
    auth.authenticate("facebook"),
    (req, res) => {
      res.send(req.user);
    }
  );

  // Register route
  app.post("/api/register", register, (req, res) => {});

  // Users routes
  app.use("/api/users", usersRouter);

  // Tags routes
  app.use("/api/tags", tagsRouter);

  // Places routes
  app.use("/api/places", placesRouter);

  // Search routes
  app.use("/api/search", searchRouter);
};

module.exports = setupRoutes;
