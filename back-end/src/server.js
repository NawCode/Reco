// Load .env file
require("dotenv").config();

// Setup application port depending on environment variables
const port = process.env.PORT || 3001;
const bcrypt = require("bcrypt");
const path = require("path");
const { auth } = require("./services/Auth");
const helmet = require("helmet");
const session = require("express-session");
const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const { Database, Resource } = require("@adminjs/prisma");

const setupAPIRoutes = require("./routes");
const prisma = require("./services/Db");
const db = require("./services/Db");

const app = express();

// Add minimum security with helmet
// @see https://helmetjs.github.io
app.use(
  helmet({
    // TODO Remettre l'ancienne conf quand https ready
    contentSecurityPolicy: false,
  })
);

// Handle CORS requests on development environment
if (process.env.NODE_ENV !== "production") {
  const cors = require("cors");

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
}

// Handle JSON post data
app.use(express.json());

// Handle sessions
app.use(
  session({
    name: "reco-session",
    secret: "Y&yD%8(P[M+h43L6FNc!c!Jn++?q(&Nz",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Handle authentication
app.use(auth.initialize());
app.use(auth.session());

// Configure API routes
setupAPIRoutes(app);

// Admin JS routes
AdminJS.registerAdapter({ Database, Resource });

const dmmf = prisma._dmmf;

const admin = new AdminJS({
  resources: [
    {
      resource: { model: dmmf.modelMap.User, client: prisma },
      options: { parent: "Gestion des utilisateurs" },
    },
    {
      resource: { model: dmmf.modelMap.UserTags, client: prisma },
      options: { parent: "Gestion des utilisateurs" },
    },
    {
      resource: { model: dmmf.modelMap.Event, client: prisma },
      options: { parent: "Gestion des évenements/autres" },
    },
    {
      resource: { model: dmmf.modelMap.Place, client: prisma },
      options: { parent: "Gestion des évenements/autres" },
    },
    {
      resource: { model: dmmf.modelMap.Neighborhood, client: prisma },
      options: { parent: "Gestion des évenements/autres" },
    },
    {
      resource: { model: dmmf.modelMap.City, client: prisma },
      options: { parent: "Gestion des évenements/autres" },
    },
    {
      resource: { model: dmmf.modelMap.Tag, client: prisma },
      options: { parent: "Gestion des évenements/autres" },
    },
    {
      resource: { model: dmmf.modelMap.UserBooking, client: prisma },
      options: { parent: "Gestion des utilisateurs" },
    },
    {
      resource: { model: dmmf.modelMap.Preference, client: prisma },
      options: { parent: "Gestion des utilisateurs" },
    },
  ],
  locale: {
    translations: {
      labels: {
        User: "Utilisateurs",
        UserTags: "Tags utilisateurs",
        Event: "Evénement",
        Place: "Lieu",
        Neighborhood: "Quartier",
        City: "Ville",
        UserBooking: "Reservation client",
        Preference: "Préferences",
      },
    },
  },
});

const router = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate: async (email, password) => {
    const user = await db.user.findFirst({
      where: {
        email: email,
        role: "ADMIN",
      },
    });
    console.log(user)
    if (user) {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        return user;
      }
    }
    return false;
  },
  cookiePassword: "some-secret-password-used-to-secure-cookie",
});

app.use(admin.options.rootPath, router);

// Serve the static files from the React app
// Enable gzip and brotli compression (the last if available)
app.use(
  expressStaticGzip(path.join(__dirname, "..", "..", "front-end", "dist"), {
    enableBrotli: true,
    orderPreference: ["br"],
  })
);

// Redirect all requests to index.html letting react-router making its job
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "front-end", "dist", "index.html")
  );
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 LaReco project has started on port ${port}`);
});
