const router = require("express").Router();
const db = require("../services/Db");

/**
 * Retourne le profil de l'utilisateur actuellement connecté
 */
router.get("/me", async (req, res) => {
  try {
    res.send(
      await db.user.findUnique({
        where: { id: req.user.id },
        include: {
          tags: {
            include: {
              tag: true,
            },
          },
        },
      })
    );
  } catch (e) {
    res.status(401).send("unauthorized");
  }
});

router.get("/me/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await db.user.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send("not found");
    console.log(e);
  }
});

router.delete("/me/tags/:id", async (req, res) => {
  const tagId = req.params.id;
  const userId = req.user.id;
  try {
    await db.userTags.delete({
      where: {
        tagId_userId: {
          userId: Number(userId),
          tagId: Number(tagId),
        },
      },
    });
    res.status(200).send("deleted");
  } catch (e) {
    res.status(500).send("not found");
    console.log(e);
  }
});

router.put("/me/tags/:id", async (req, res) => {
  const tagId = req.params.id;
  const userId = req.user.id;
  try {
    await db.userTags.create({
      data: {
        userId: Number(userId),
        tagId: Number(tagId),
      },
    });
    res.status(201).send("created");
  } catch (e) {
    res.status(500).send("not found");
    console.log(e);
  }
});

/**
 * Ajoute un/plusieurs ? tags à un utilisateur
 */
router.post("/me/tags", (req, res) => {
  res.send(req.user);
});

router.post("/find", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await db.$queryRaw`select * from User where email = ${email}`;
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
  }
});

router.put("/update", async (req, res) => {
  const id = req.user.id;
  const { firstname, lastname, email, newsletter } = req.body;

  try {
    const { password, ...user } = await db.user.update({
      where: {
        id: id,
      },
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        newsletter: Number(newsletter),
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    // Update the user in session to keep it
    // sync with the one in the db
    req.session.passport.user = user;

    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(500).send("Unexpected error");
  }
});

module.exports = router;
