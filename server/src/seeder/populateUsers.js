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