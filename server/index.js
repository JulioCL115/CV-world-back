const server = require("./src/server");
const { conn } = require("./src/db.js");
require("dotenv").config();
const PORT = process.env.PORT;
const populateCategory = require("./src/seeder/populateCategory.js");
const populateLanguage = require("./src/seeder/populateLanguage.js");
const populateSubscription = require("./src/seeder/populateSubscription.js");
const populateCv = require("./src/seeder/populateCv");
const populateUsers = require("./src/seeder/populateUsers.js");

conn.sync({ force: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .then(() => populateUsers())
    .then(() => populateCategory())
    .then(() => populateLanguage())
    .then(() => populateUsers())
    .then(() => populateSubscription())
    .then(() => populateCv())
    .catch((error) => console.error(error));
