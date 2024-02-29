const bcrypt = require('bcrypt');
const { Subscription, User } = require("../db");

async function populateUsers() {
    try {
        const Users = [
            {
                name: "Alice Johnson",
                email: "alice.johnson@example.com",
                password: await bcrypt.hash("password1", 10), // Hasheamos la contraseña
                photo: "https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
            },
            {
                name: "Carlos García",
                email: "carlos.garcia@example.com",
                password: await bcrypt.hash("password2", 10), // Hasheamos la contraseña
                photo: "https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg"
            },
            {
                name: "Emily Smith",
                email: "emily.smith@example.com",
                password: await bcrypt.hash("password3", 10), // Hasheamos la contraseña
                photo: "https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A="
            },
            {
                name: "Mohammed Ali",
                email: "mohammed.ali@example.com",
                password: await bcrypt.hash("password4", 10), // Hasheamos la contraseña
                photo: "https://t4.ftcdn.net/jpg/03/98/85/77/360_F_398857704_n44BPhqM68Xk9vT31BeFkLQwWsgeZS6C.jpg"
            },
            {
                name: "Maria Fernández",
                email: "maria.fernandez@example.com",
                password: await bcrypt.hash("password5", 10), // Hasheamos la contraseña
                photo: "https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg"
            },
            {
                name: "Juan Pérez",
                email: "juan.perez@example.com",
                password: await bcrypt.hash("password6", 10), // Hasheamos la contraseña
                photo: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
            },
            {
                name: "Emily Smith",
                email: "emily.smith@example.com",
                password: await bcrypt.hash("password7", 10), // Hasheamos la contraseña
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxsG3Ac8-CCLG3PzEvZXAfVoQxmjHleJqjg&usqp=CAU"
            },
            {
                name: "Ahmed Ali",
                email: "ahmed.ali@example.com",
                password: await bcrypt.hash("password8", 10), // Hasheamos la contraseña
                photo: "https://media.istockphoto.com/id/597272944/photo/looking-sharp-and-feeling-great.webp?b=1&s=170667a&w=0&k=20&c=nAj6kIO9npV5fOPjEOMQCvJaeR4DZVJFfHkniJrO95A="
            },
            {
                name: "Sophie Martin",
                email: "sophie.martin@example.com",
                password: await bcrypt.hash("password9", 10), // Hasheamos la contraseña
                photo: "https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-Linkedin-Photo-Sydney.jpg"
            },
            {
                name: "John Smith",
                email: "john.smith@example.com",
                password: await bcrypt.hash("password10", 10), // Hasheamos la contraseña
                photo: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
            },
            {
                name: "Marta López",
                email: "marta.lopez@example.com",
                password: await bcrypt.hash("password11", 10), // Hasheamos la contraseña
                photo: "https://www.shutterstock.com/image-photo/smiling-brunette-businesswoman-sitting-against-600nw-2291067377.jpg"
            },
            {
                name: "Alice Wang",
                email: "alice.wang@example.com",
                password: await bcrypt.hash("password12", 10), // Hasheamos la contraseña
                photo: "https://www.shutterstock.com/image-photo/happy-millennial-business-woman-glasses-600nw-2103373409.jpg"
            },
            {
                name: "Luisa García",
                email: "luisa.garcia@example.com",
                password: await bcrypt.hash("password13", 10), // Hasheamos la contraseña
                photo: "https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/good_linkedin_photo.webp"
            },
            {
                name: "Tom Johnson",
                email: "tom.johnson@example.com",
                password: await bcrypt.hash("password14", 10), // Hasheamos la contraseña
                photo: "https://media.istockphoto.com/id/1307791650/photo/headshot-portrait-of-smiling-caucasian-businessman-pose-at-workplace.jpg?s=612x612&w=0&k=20&c=Guj8f7rGyX4tsSszs3qR_NCYDOOvypB6T3eSPEB9GOQ="
            },
            {
                name: "Sara Martínez",
                email: "sara.martinez@example.com",
                password: await bcrypt.hash("password15", 10), // Hasheamos la contraseña
                photo: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"
            },
            {
                name: "Michael Brown",
                email: "michael.brown@example.com",
                password: await bcrypt.hash("password16", 10), // Hasheamos la contraseña
                photo: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            },
            {
                name: "Emma Chen",
                email: "emma.chen@example.com",
                password: await bcrypt.hash("password17", 10), // Hasheamos la contraseña
                photo: "https://nyheadshots.com/wp-content/uploads/2018/12/TSQ_6553web-800x533.jpg"
            },
            {
                name: "Ana Silva",
                email: "ana.silva@example.com",
                password: await bcrypt.hash("password18", 10), // Hasheamos la contraseña
                photo: "https://nyheadshots.com/wp-content/uploads/2018/07/headshots-800x536.jpg"
            },
            {
                name: "David Lee",
                email: "david.lee@example.com",
                password: await bcrypt.hash("password19", 10), // Hasheamos la contraseña
                photo: "https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg"
            },
            {
                name: "Carla Rodríguez",
                email: "carla.rodriguez@example.com",
                password: await bcrypt.hash("password20", 10), // Hasheamos la contraseña
                photo: "https://media.istockphoto.com/id/1438765014/video/headshot-person-attractive-young-brunette-woman-staring-at-camera.jpg?s=640x640&k=20&c=R-QEOOls5lBBqKJilbAtXdHBWbGK6HOM1RtK0cEm4qI="
            },
            {
                name: "Sarah Johnson",
                email: "sarah.johnson@example.com",
                password: await bcrypt.hash("password21", 10), // Hasheamos la contraseña
                photo: "https://t4.ftcdn.net/jpg/03/94/33/83/360_F_394338310_XarWRxZ0Weu1kiUPvGnX1vmnFIT3j847.jpg"
            },
            {
                name: "Mohammed Ali",
                email: "mohammed.ali@example.com",
                password: await bcrypt.hash("password22", 10), // Hasheamos la contraseña
                photo: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY="
            },
            {
                name: "Alice Wang",
                email: "alice.wang@example.com",
                password: await bcrypt.hash("password23", 10), // Hasheamos la contraseña
                photo: "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw="
            },
            {
                name: "Elena Martinez",
                email: "elena.martinez@example.com",
                password: await bcrypt.hash("password24", 10), // Hasheamos la contraseña
                photo: "https://www.shutterstock.com/image-photo/attractive-middleaged-woman-casual-shirt-600nw-2381747649.jpg"
            },
            {
                name: "Ryan Miller",
                email: "ryan.miller@example.com",
                password: await bcrypt.hash("password25", 10), // Hasheamos la contraseña
                photo: "https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=uS4knmZ88zNA_OjNaE_JCRuq9qn3ycgtHKDKdJSnGdY="
            }
        ];

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