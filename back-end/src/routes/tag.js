const router = require("express").Router();
const db = require("../services/Db");

router.get("/", async (req, res) => {
  res.send(await db.tag.findMany());
});

module.exports = router;
