const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

// Allows to sort database seeds
const tables = [
  "user",
  "tag",
  "city",
  "neighborhood",
  "place",
  "event",
  "preference",
  "userBooking",
  "userTags",
];

/**
 * Load data seed found in the data directory. Load all
 * .json files and store into database
 */
const main = async () => {
  // For each table, store data from the corresponding
  // JSON file to the database
  for (const table of tables) {
    const data = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "data", table + '.json'), {
        encoding: "utf8",
        flag: "r",
      })
    );

    await db[table].createMany({ data });
  }
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect();
  });
