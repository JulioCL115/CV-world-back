const bcrypt = require('bcrypt');
const { User } = require("../db");

async function populateUsers() {
    try {
        const usersData = [
            {
                name: "Usuario 1",
                email: "usuario1@example.com",
                password: await bcrypt.hash("password1", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 2",
                email: "usuario2@example.com",
                password: await bcrypt.hash("password2", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 3",
                email: "usuario3@example.com",
                password: await bcrypt.hash("password3", 10), // Hasheamos la contraseña
                photo: ""
            }
        ];

        const users = await User.bulkCreate(usersData);

        console.log("Users table populated successfully");
    } catch (error) {
        // check if error is a SequelizeUniqueConstraintError
        if (error.name === "SequelizeUniqueConstraintError") {
            console.log("Users table already populated");
            return;
        }
        console.error("Error populating users database");
    }; 
};

module.exports = populateUsers;
