const bcrypt = require('bcrypt');
const { Subscription, User } = require("../db");
const subscription = require('../models/subscription');

async function populateUsers() {
    try {
        const Users = [
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
            },
            {
                name: "Usuario 4",
                email: "usuario4@example.com",
                password: await bcrypt.hash("password4", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 5",
                email: "usuario5@example.com",
                password: await bcrypt.hash("password5", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 6",
                email: "usuario6@example.com",
                password: await bcrypt.hash("password6", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 7",
                email: "usuario7@example.com",
                password: await bcrypt.hash("password7", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 8",
                email: "usuario8@example.com",
                password: await bcrypt.hash("password8", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 9",
                email: "usuario9@example.com",
                password: await bcrypt.hash("password9", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 10",
                email: "usuario10@example.com",
                password: await bcrypt.hash("password10", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 11",
                email: "usuario11@example.com",
                password: await bcrypt.hash("password11", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 12",
                email: "usuario12@example.com",
                password: await bcrypt.hash("password12", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 13",
                email: "usuario13@example.com",
                password: await bcrypt.hash("password13", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 14",
                email: "usuario14@example.com",
                password: await bcrypt.hash("password14", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 15",
                email: "usuario15@example.com",
                password: await bcrypt.hash("password15", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 16",
                email: "usuario16@example.com",
                password: await bcrypt.hash("password16", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 17",
                email: "usuario17@example.com",
                password: await bcrypt.hash("password17", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 18",
                email: "usuario18@example.com",
                password: await bcrypt.hash("password18", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 19",
                email: "usuario19@example.com",
                password: await bcrypt.hash("password19", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 20",
                email: "usuario20@example.com",
                password: await bcrypt.hash("password20", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 21",
                email: "usuario21@example.com",
                password: await bcrypt.hash("password21", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 22",
                email: "usuario22@example.com",
                password: await bcrypt.hash("password22", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 23",
                email: "usuario23@example.com",
                password: await bcrypt.hash("password23", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 24",
                email: "usuario24@example.com",
                password: await bcrypt.hash("password24", 10), // Hasheamos la contraseña
                photo: ""
            },
            {
                name: "Usuario 25",
                email: "usuario25@example.com",
                password: await bcrypt.hash("password25", 10), // Hasheamos la contraseña
                photo: ""
            }
        ];

        // asignarle a cada Cv un category ID random
        const subscriptions = await Subscription.findAll()
        const subscriptionIds = subscriptions.map(subscription => subscription.id);
        Users.forEach(user => {
            user.SubscriptionId = subscriptionIds[Math.floor(Math.random() * subscriptionIds.length)];
        });

        for (const user of Users) {
            const existingUser = await User.findOne({ where: { email: user.email } });
            if (!existingUser) {
                await User.create(user);
            }
        }

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