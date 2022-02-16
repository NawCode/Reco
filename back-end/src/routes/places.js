const router = require("express").Router();
const db = require("../services/Db");

router.get("/:id", async (req, res) => {
  try {
    res
      .status(200)
      .send(
        await db.place.findUnique({ where: { id: Number(req.params.id) } })
      );
  } catch (e) {
    console.log(e);
    res.status(500).send("Unexpected error");
  }
});

router.get("/:id/events", async (req, res) => {
  try {
    res
      .status(200)
      .send(
        await db.event.findMany({
          where: { placeId: Number(req.params.id) },
          orderBy: { date: "asc" },
        })
      );
  } catch (e) {
    console.log(e);
    res.status(500).send("Unexpected error");
  }
});

router.get("/", async (req, res) => {
  res.send(
    await db.place.findMany({
      include: { tag: true },
    })
  );
});

router.post("/type", async (req, res) => {
  const { id } = req.body;

  try {
    res.send(
      await db.place.findMany({
        where: { tagId: Number(id) },
        include: { tag: true },
      })
    );
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
});

module.exports = router;
