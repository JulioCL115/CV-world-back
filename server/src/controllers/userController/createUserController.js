const { User, Subscription } = require('../../db');
const bcrypt = require('bcrypt');

const createUserController = async (name, email, password, photo, role) => {
    try {

        const userFound = await User.findOne({
            where: { email: email.toLowerCase() }
        });

        if(userFound && !userFound.deleted) {
            const error = new Error('Email address already in use. Please try with another email.');
            error.statusCode = 409; 
            throw error;
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const freeSubscription = await Subscription.findOne({
            where: {
                price: 0
            }
        });

        const newUser = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashPassword,
            photo,
            role,
            SubscriptionId: freeSubscription.id
        });

        const newUserFiltered = {
            name: newUser.name,
            email: newUser.email,
            photo: newUser.photo,
            role: newUser.role
        }
        
        return newUserFiltered;

    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

module.exports = createUserController;

