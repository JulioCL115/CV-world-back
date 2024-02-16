// const { Cv } = require("../db");

// async function populateCv() {
//   try {
//     const Cvs = await Cv.bulkCreate(
//         [
//             {
//                 "name": "Alice Johnson",
//                 "image": "https://example.com/alice.jpg",
//                 "header": "Frontend Developer",
//                 "description": "Dedicated frontend developer with a passion for creating elegant user interfaces.",
//                 "experience": [
//                     {
//                         "dateRange": "May 2020 - Present",
//                         "company": "Web Solutions Co.",
//                         "role": "Frontend Developer",
//                         "responsibilities": "Developing user-facing features, ensuring the technical feasibility of UI/UX designs, and optimizing applications for maximum speed and scalability."
//                     }
//                 ],
//                 "education": [
//                     {
//                         "dateRange": "Sep 2016 - Jun 2020",
//                         "institution": "Tech University",
//                         "career": "Bachelor of Science in Computer Engineering"
//                     }
//                 ],
//                 "contact": [
//                     {
//                         "phone": "+987654321",
//                         "email": "alice.johnson@example.com",
//                         "location": "City, Country",
//                         "website": "www.alicejohnson.dev"
//                     }
//                 ],
//                 "skills": ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
//                 "speakingLanguages": ["English", "French"],
//                 "otherInterests": ["Traveling", "Photography", "Yoga"],
//                 "creationDate": "2024-02-13",
//                 "views": 1500,
//                 "category": "IT & Software Development",
//                 "language": "Inglés"
//             },
//             {
//                 "name": "Carlos García",
//                 "image": "",
//                 "header": "Data Scientist",
//                 "description": "Experienced data scientist with a strong background in statistical analysis and machine learning algorithms.",
//                 "experience": [
//                     {
//                         "dateRange": "Jun 2018 - Present",
//                         "company": "Data Insights Ltd.",
//                         "role": "Data Scientist",
//                         "responsibilities": "Analyzing complex datasets, developing predictive models, and presenting insights to stakeholders."
//                     }
//                 ],
//                 "education": [
//                     {
//                         "dateRange": "Sep 2014 - May 2018",
//                         "institution": "Data Science Institute",
//                         "career": "Bachelor of Science in Data Science"
//                     }
//                 ],
//                 "contact": [
//                     {
//                         "phone": "+1122334455",
//                         "email": "carlos.garcia@example.com",
//                         "location": "City, Country",
//                         "website": "www.carlosgarcia.dev"
//                     }
//                 ],
//                 "skills": ["Python", "R", "Machine Learning", "Statistical Analysis", "Data Visualization"],
//                 "speakingLanguages": ["English", "Spanish"],
//                 "otherInterests": ["Hiking", "Music", "Cooking"],
//                 "creationDate": "2024-02-13",
//                 "views": 2800,
//                 "category": "IT & Software Development",
//                 "language": "Inglés"
//             },
//             {
//                 "name": "Emily Smith",
//                 "image": "https://example.com/emily.jpg",
//                 "header": "UX/UI Designer",
//                 "description": "Creative UX/UI designer with a focus on crafting intuitive and visually appealing user experiences.",
//                 "experience": [
//                     {
//                         "dateRange": "Aug 2017 - Present",
//                         "company": "Design Studio XYZ",
//                         "role": "UX/UI Designer",
//                         "responsibilities": "Creating wireframes, prototypes, and user flows, conducting user research, and collaborating with developers to implement designs."
//                     }
//                 ],
//                 "education": [
//                     {
//                         "dateRange": "Sep 2013 - May 2017",
//                         "institution": "Design Institute",
//                         "career": "Bachelor of Fine Arts in Visual Communication Design"
//                     }
//                 ],
//                 "contact": [
//                     {
//                         "phone": "+3344556677",
//                         "email": "emily.smith@example.com",
//                         "location": "City, Country",
//                         "website": "www.emilysmith.design"
//                     }
//                 ],
//                 "skills": ["Adobe XD", "Sketch", "Figma", "User Research", "Prototyping"],
//                 "speakingLanguages": ["English", "German"],
//                 "otherInterests": ["Painting", "Traveling", "Yoga"],
//                 "creationDate": "2024-02-13",
//                 "views": 2100,
//                 "category": "Recursos humanos",
//                 "language":"inglés"
//             },
//             {
//                 "name": "Mohammed Ali",
//                 "image": "https://example.com/mohammed.jpg",
//                 "header": "Software Engineer",
//                 "description": "Innovative software engineer with a strong background in building robust and scalable applications.",
//                 "experience": [
//                     {
//                         "dateRange": "Jul 2016 - Present",
//                         "company": "Tech Solutions Inc.",
//                         "role": "Software Engineer",
//                         "responsibilities": "Architecting and developing software solutions, leading development teams, and conducting code reviews."
//                     }
//                 ],
//                 "education": [
//                     {
//                         "dateRange": "Sep 2012 - May 2016",
//                         "institution": "Computer Science University",
//                         "career": "Bachelor of Science in Computer Science"
//                     }
//                 ],
//                 "contact": [
//                     {
//                         "phone": "+1122334455",
//                         "email": "mohammed.ali@example.com",
//                         "location": "City, Country",
//                         "website": "www.mohammedali.dev"
//                     }
//                 ],
//                 "skills": ["Java", "Spring Boot", "Angular", "MySQL", "Microservices"],
//                 "speakingLanguages": ["English", "Arabic"],
//                 "otherInterests": ["Football", "Traveling", "Cooking"],
//                 "creationDate": "2024-02-13",
//                 "views": 3200,
//                 "category": "IT y Desarrollo de Software",
//                 "language": "Español"
//             },
//             {
//                 "name": "Maria Fernández",
//                 "image": "https://example.com/maria.jpg",
//                 "header": "Mobile App Developer",
//                 "description": "Enthusiastic mobile app developer with expertise in creating native and cross-platform applications.",
//                 "experience": [
//                     {
//                         "dateRange": "Mar 2018 - Present",
//                         "company": "App Innovations Co.",
//                         "role": "Mobile App Developer",
//                         "responsibilities": "Designing and developing mobile applications for iOS and Android platforms, integrating APIs, and optimizing app performance."
//                     }
//                 ],
//                 "education": [
//                     {
//                         "dateRange": "Sep 2014 - Jun 2018",
//                         "institution": "Mobile Development Institute",
//                         "career": "Bachelor of Science in Mobile Application Development"
//                     }
//                 ],
//                 "contact": [
//                     {
//                         "phone": "+9988776655",
//                         "email": "maria.fernandez@example.com",
//                         "location": "City, Country",
//                         "website": "www.mariafernandez.dev"
//                     }
//                 ],
//                 "skills": ["Swift", "Kotlin", "React Native", "Firebase", "Mobile UI/UX Design"],
//                 "speakingLanguages": ["English", "Spanish"],
//                 "otherInterests": ["Dancing", "Traveling", "Photography"],
//                 "creationDate": "2024-02-13",
//                 "views": 1800,
//                 "category": "IT y Desarrollo de Software",
//                 "language": "Español"
//             }
//         ]        
//     )
//     console.log("Cv table populated successfully");
//   } catch (error) {
//     console.error("Error populating language database:", error);
//   };
// };

// module.exports = populateCv;
