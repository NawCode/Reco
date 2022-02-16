const router = require("express").Router();
const db = require("../services/Db");

router.get("/", async (req, res) => {
  // Récupérer les paramètres de recherche
  // depuis la query string
  const { label } = req.query;

  // aller chercher les events
  const events = (
    await db.event.findMany({
      select: {
        id: true,
        name: true,
        placeId: true,
      },
      where: {
        name: {
          startsWith: label,
        },
      },
      skip: 0,
      take: 4,
    })
  ).map((item) => ({ type: "event", ...item }));

  // aller chercher les places
  const places = (
    await db.place.findMany({
      select: {
        id: true,
        name: true,
      },
      where: {
        name: {
          startsWith: label,
        },
      },
      skip: 0,
      take: 4,
    })
  ).map((item) => ({ type: "place", ...item }));

  res.send([...events, ...places]);
});

module.exports = router;
