const bcrypt = require('bcrypt');
const { User } = require("../db");

async function populateUsers() {
    try {
        const usersData = [
            {
                name: "Usuario 1",
                email: "usuario1@example.com",
                password: await bcrypt.hash("password1", 10), // Hasheamos la contraseña
                photo: "url_de_la_foto_1.jpg"
            },
            {
                name: "Usuario 2",
                email: "usuario2@example.com",
                password: await bcrypt.hash("password2", 10), // Hasheamos la contraseña
                photo: "url_de_la_foto_2.jpg"
            },
            {
                name: "Usuario 3",
                email: "usuario3@example.com",
                password: await bcrypt.hash("password3", 10), // Hasheamos la contraseña
                photo: "url_de_la_foto_3.jpg"
            }
        ];

        const users = await User.bulkCreate(usersData);

        console.log("Users table populated successfully");
    } catch (error) {
        console.error("Error populating users database:", error);
    }; 
};

module.exports = populateUsers;
