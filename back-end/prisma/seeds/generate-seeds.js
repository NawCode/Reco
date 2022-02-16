const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

function decapitalize(text) {
  return (text && text[0].toLowerCase() + text.slice(1)) || text;
}

/**
 * Generate a JSON file filled with data for each
 * table in the database. Files are stored in the
 * data directory
 */
const main = async () => {
  // Retrieve all tables name from the database
  const tables = (await db.$queryRaw`show tables`)
    .map((table) => table.Tables_in_reco)
    .filter((table) => table !== "_prisma_migrations");

  // For each table found, execute a findMany query and
  // store the results in a JSON file
  for (const table of tables) {
    const data = await db[decapitalize(table)].findMany();
    const json = JSON.stringify(data, null, 2);

    fs.writeFileSync(path.resolve(__dirname, "data", decapitalize(table) + ".json"), json);
  }
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect();
  });
