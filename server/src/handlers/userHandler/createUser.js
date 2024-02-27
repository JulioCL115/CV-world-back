const createUserController = require("../../controllers/userController/createUserController");
const { registerUserSchema } = require('../../schemas/userSchema');
const transporter = require('../../nodemailer/mailer');
const fs = require('fs');
const path = require('path');

const createUser = async (req, res) => {
    try {
        const { name, email, password, photo, role } = req.body;

        // const { error } = registerUserSchema.validate({ name, email, password });

        // if(error) {
        //     return res.status(400).json({ error: error.details[0].message });
        // }

        const newUser = await createUserController(
            name,
            email,
            password,
            photo,
            role
        );

        const emailTemplatePath = path.join(__dirname, '../../public/register.html');
        const emailTemplate = fs.readFileSync(emailTemplatePath, 'utf-8');

        await transporter.sendMail({
            from: "Register CV-World <cvwordweb@gmail.com>",
            to: newUser.email,
            subject: "Register CV-World",
            html: emailTemplate
        });

        res.status(201).json(newUser);
    } catch (error) {
        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        return res.status(500).json({ error: error.message });
    }
};

module.exports = createUser;
