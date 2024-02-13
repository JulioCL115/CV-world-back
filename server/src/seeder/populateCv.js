const { Cv } = require("../db");

async function populateLanguage() {
  try {
    const Cvs = await Cv.bulkCreate([
        {
            name: "Alice Johnson",
            image: "",
            header: "UX/UI Designer",
            description: "Experienced designer with a focus on creating intuitive and visually appealing user interfaces.",
            experience: [
              {
                dateRange: "Jun 2018 - Present",
                company: "Design Studios Ltd.",
                role: "Senior UX/UI Designer",
                responsibilities: "Leading design projects, collaborating with cross-functional teams, and conducting user research.",
              },
              // Add more experience objects as needed
            ],
            education: [
              {
                dateRange: "Sep 2014 - May 2018",
                institution: "Art & Design University",
                career: "Bachelor of Fine Arts in Graphic Design",
              },
              // Add more education objects as needed
            ],
            contact: [
              {
                phone: "+987654321",
                email: "alice.johnson@example.com",
                location: "City, Country",
                website: "www.alicejohnson.com",
              },
              // Add more contact objects as needed
            ],
            skills: ["Adobe XD", "Sketch", "InVision", "HTML", "CSS"],
            speakingLanguages: ["English", "French"],
            otherInterests: ["Painting", "Traveling", "Yoga"],
          },
          {
            name: "Bob Miller",
            image: "",
            header: "Software Engineer",
            description: "Passionate software engineer with expertise in developing scalable and efficient web applications.",
            experience: [
              {
                dateRange: "Jan 2019 - Present",
                company: "Tech Innovators Inc.",
                role: "Full Stack Developer",
                responsibilities: "Designing and implementing software solutions, collaborating with cross-functional teams, and ensuring code quality.",
              },
              // Add more experience objects as needed
            ],
            education: [
              {
                dateRange: "Sep 2015 - Apr 2019",
                institution: "Computer Science University",
                career: "Bachelor of Science in Computer Science",
              },
              // Add more education objects as needed
            ],
            contact: [
              {
                phone: "+123456789",
                email: "bob.miller@example.com",
                location: "City, Country",
                website: "www.bobmiller.dev",
              },
              // Add more contact objects as needed
            ],
            skills: ["JavaScript", "React", "Node.js", "MongoDB", "RESTful APIs"],
            speakingLanguages: ["English", "Spanish"],
            otherInterests: ["Gaming", "Reading", "Cooking"],
        },
        {
          name: "Carol Smith",
          image: "",
          header: "Graphic Designer",
          description: "Highly creative graphic designer with a passion for typography and layout design.",
          experience: [
            {
              dateRange: "Mar 2017 - Present",
              company: "Creative Designs Inc.",
              role: "Graphic Designer",
              responsibilities: "Creating visually stunning graphics for various marketing campaigns, collaborating with clients to understand their design requirements.",
            },
            // Add more experience objects as needed
          ],
          education: [
            {
              dateRange: "Sep 2013 - May 2017",
              institution: "Art Institute",
              career: "Bachelor of Fine Arts in Graphic Design",
            },
            // Add more education objects as needed
          ],
          contact: [
            {
              phone: "+987654321",
              email: "carol.smith@example.com",
              location: "City, Country",
              website: "www.carolsmithdesigns.com",
            },
            // Add more contact objects as needed
          ],
          skills: ["Adobe Illustrator", "Adobe Photoshop", "InDesign", "Typography", "Layout Design"],
          speakingLanguages: ["English", "German"],
          otherInterests: ["Photography", "Travelling", "Cooking"],
        },
        {
          name: "David Thompson",
          image: "",
          header: "Marketing Manager",
          description: "Results-driven marketing manager with a proven track record of developing and executing successful marketing strategies.",
          experience: [
            {
              dateRange: "Jan 2015 - Present",
              company: "Global Marketing Solutions",
              role: "Marketing Manager",
              responsibilities: "Developing marketing plans, overseeing advertising campaigns, analyzing market trends, and managing a team of marketing professionals.",
            },
            // Add more experience objects as needed
          ],
          education: [
            {
              dateRange: "Sep 2011 - Apr 2015",
              institution: "University of Business",
              career: "Bachelor of Business Administration in Marketing",
            },
            // Add more education objects as needed
          ],
          contact: [
            {
              phone: "+123456789",
              email: "david.thompson@example.com",
              location: "City, Country",
              website: "www.davidthompsonmarketing.com",
            },
            // Add more contact objects as needed
          ],
          skills: ["Market Research", "Digital Marketing", "Social Media Marketing", "Campaign Management", "Analytics"],
          speakingLanguages: ["English", "Spanish"],
          otherInterests: ["Golfing", "Music", "Volunteering"],
        },
        {
          name: "Eva Brown",
          image: "",
          header: "Web Developer",
          description: "Passionate web developer with expertise in front-end and back-end development.",
          experience: [
            {
              dateRange: "May 2016 - Present",
              company: "WebTech Solutions",
              role: "Senior Web Developer",
              responsibilities: "Designing and developing responsive websites, collaborating with designers and content creators, implementing new features and functionalities.",
            },
            // Add more experience objects as needed
          ],
          education: [
            {
              dateRange: "Sep 2012 - Apr 2016",
              institution: "Tech University",
              career: "Bachelor of Science in Computer Science",
            },
            // Add more education objects as needed
          ],
          contact: [
            {
              phone: "+1122334455",
              email: "eva.brown@example.com",
              location: "City, Country",
              website: "www.evabrowndev.com",
            },
            // Add more contact objects as needed
          ],
          skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
          speakingLanguages: ["English", "French"],
          otherInterests: ["Hiking", "Reading", "Cooking"],
        },
    ]);

    console.log("Cv table populated successfully");
  } catch (error) {
    console.error("Error populating language database:", error);
  };
};

module.exports = populateLanguage;