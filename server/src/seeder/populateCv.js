const { Cv } = require("../db");

async function populateCv() {
  try {
    const Cvs = await Cv.bulkCreate(
        [
            {
                "name": "Alice Johnson",
                "image": "https://example.com/alice.jpg",
                "header": "Frontend Developer",
                "description": "Dedicated frontend developer with a passion for creating elegant user interfaces.",
                "experience": [
                    {
                        "dateRange": "May 2020 - Present",
                        "company": "Web Solutions Co.",
                        "role": "Frontend Developer",
                        "responsibilities": "Developing user-facing features, ensuring the technical feasibility of UI/UX designs, and optimizing applications for maximum speed and scalability."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2016 - Jun 2020",
                        "institution": "Tech University",
                        "career": "Bachelor of Science in Computer Engineering"
                    }
                ],
                "contact": [
                    {
                        "phone": "+987654321",
                        "email": "alice.johnson@example.com",
                        "location": "City, Country",
                        "website": "www.alicejohnson.dev"
                    }
                ],
                "skills": ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
                "speakingLanguages": ["English", "French"],
                "otherInterests": ["Traveling", "Photography", "Yoga"],
                "creationDate": "2024-02-13",
                "views": 1500,
                "category": "IT y Desarrollo de Software",
                "language": "Inglés"
            },
            {
                "name": "Carlos García",
                "image": "",
                "header": "Data Scientist",
                "description": "Experienced data scientist with a strong background in statistical analysis and machine learning algorithms.",
                "experience": [
                    {
                        "dateRange": "Jun 2018 - Present",
                        "company": "Data Insights Ltd.",
                        "role": "Data Scientist",
                        "responsibilities": "Analyzing complex datasets, developing predictive models, and presenting insights to stakeholders."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2014 - May 2018",
                        "institution": "Data Science Institute",
                        "career": "Bachelor of Science in Data Science"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "carlos.garcia@example.com",
                        "location": "City, Country",
                        "website": "www.carlosgarcia.dev"
                    }
                ],
                "skills": ["Python", "R", "Machine Learning", "Statistical Analysis", "Data Visualization"],
                "speakingLanguages": ["English", "Spanish"],
                "otherInterests": ["Hiking", "Music", "Cooking"],
                "creationDate": "2024-02-13",
                "views": 2800,
                "category": "IT y Desarrollo de Software",
                "language": "Inglés"
            },
            {
                "name": "Emily Smith",
                "image": "https://example.com/emily.jpg",
                "header": "UX/UI Designer",
                "description": "Creative UX/UI designer with a focus on crafting intuitive and visually appealing user experiences.",
                "experience": [
                    {
                        "dateRange": "Aug 2017 - Present",
                        "company": "Design Studio XYZ",
                        "role": "UX/UI Designer",
                        "responsibilities": "Creating wireframes, prototypes, and user flows, conducting user research, and collaborating with developers to implement designs."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2013 - May 2017",
                        "institution": "Design Institute",
                        "career": "Bachelor of Fine Arts in Visual Communication Design"
                    }
                ],
                "contact": [
                    {
                        "phone": "+3344556677",
                        "email": "emily.smith@example.com",
                        "location": "City, Country",
                        "website": "www.emilysmith.design"
                    }
                ],
                "skills": ["Adobe XD", "Sketch", "Figma", "User Research", "Prototyping"],
                "speakingLanguages": ["English", "German"],
                "otherInterests": ["Painting", "Traveling", "Yoga"],
                "creationDate": "2024-02-13",
                "views": 2100,
                "category": "Recursos humanos",
                "language":"inglés"
            },
            {
                "name": "Mohammed Ali",
                "image": "https://example.com/mohammed.jpg",
                "header": "Software Engineer",
                "description": "Innovative software engineer with a strong background in building robust and scalable applications.",
                "experience": [
                    {
                        "dateRange": "Jul 2016 - Present",
                        "company": "Tech Solutions Inc.",
                        "role": "Software Engineer",
                        "responsibilities": "Architecting and developing software solutions, leading development teams, and conducting code reviews."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2012 - May 2016",
                        "institution": "Computer Science University",
                        "career": "Bachelor of Science in Computer Science"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "mohammed.ali@example.com",
                        "location": "City, Country",
                        "website": "www.mohammedali.dev"
                    }
                ],
                "skills": ["Java", "Spring Boot", "Angular", "MySQL", "Microservices"],
                "speakingLanguages": ["English", "Arabic"],
                "otherInterests": ["Football", "Traveling", "Cooking"],
                "creationDate": "2024-02-13",
                "views": 3200,
                "category": "IT y Desarrollo de Software",
                "language": "Español"
            },
            {
                "name": "Maria Fernández",
                "image": "https://example.com/maria.jpg",
                "header": "Mobile App Developer",
                "description": "Enthusiastic mobile app developer with expertise in creating native and cross-platform applications.",
                "experience": [
                    {
                        "dateRange": "Mar 2018 - Present",
                        "company": "App Innovations Co.",
                        "role": "Mobile App Developer",
                        "responsibilities": "Designing and developing mobile applications for iOS and Android platforms, integrating APIs, and optimizing app performance."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2014 - Jun 2018",
                        "institution": "Mobile Development Institute",
                        "career": "Bachelor of Science in Mobile Application Development"
                    }
                ],
                "contact": [
                    {
                        "phone": "+9988776655",
                        "email": "maria.fernandez@example.com",
                        "location": "City, Country",
                        "website": "www.mariafernandez.dev"
                    }
                ],
                "skills": ["Swift", "Kotlin", "React Native", "Firebase", "Mobile UI/UX Design"],
                "speakingLanguages": ["English", "Spanish"],
                "otherInterests": ["Dancing", "Traveling", "Photography"],
                "creationDate": "2024-02-13",
                "views": 1800,
                "category": "IT y Desarrollo de Software",
                "language": "Español"
            },
            {
                "name": "Juan Pérez",
                "image": "https://example.com/juan.jpg",
                "header": "Desarrollador Web",
                "description": "Apasionado desarrollador web con experiencia en creación de sitios dinámicos y responsivos.",
                "experience": [
                    {
                        "dateRange": "Ene 2019 - Presente",
                        "company": "Web Solutions Inc.",
                        "role": "Desarrollador Web",
                        "responsibilities": "Diseño y desarrollo de sitios web utilizando tecnologías front-end y back-end."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2015 - May 2019",
                        "institution": "Universidad Tecnológica",
                        "career": "Licenciatura en Ingeniería de Software"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "juan.perez@example.com",
                        "location": "Ciudad, País",
                        "website": "www.juanperez.dev"
                    }
                ],
                "skills": ["HTML", "CSS", "JavaScript", "Python", "Django"],
                "speakingLanguages": ["Español", "Inglés"],
                "otherInterests": ["Música", "Ciclismo", "Cocina"],
                "creationDate": "2024-02-17",
                "views": 1500,
                "category": "IT y Desarrollo de Software",
                "language": "Español"
            },
            {
                "name": "Emily Smith",
                "image": "https://example.com/emily.jpg",
                "header": "Mobile App Designer",
                "description": "Creative mobile app designer specializing in intuitive user interfaces and engaging user experiences.",
                "experience": [
                    {
                        "dateRange": "Jun 2017 - Present",
                        "company": "AppDesign Co.",
                        "role": "Mobile App Designer",
                        "responsibilities": "Creating visually appealing designs for mobile applications, conducting user research, and iterating designs based on feedback."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2013 - May 2017",
                        "institution": "Design Academy",
                        "career": "Bachelor of Fine Arts in Digital Design"
                    }
                ],
                "contact": [
                    {
                        "phone": "+4455667788",
                        "email": "emily.smith@example.com",
                        "location": "City, Country",
                        "website": "www.emilysmith.design"
                    }
                ],
                "skills": ["Adobe XD", "Sketch", "Figma", "User Experience Design", "User Interface Design"],
                "speakingLanguages": ["English", "Spanish"],
                "otherInterests": ["Painting", "Hiking", "Reading"],
                "creationDate": "2024-02-17",
                "views": 2000,
                "category": "Diseño y Creatividad",
                "language": "Inglés"
            },
            {
                "name": "Ahmed Ali",
                "image": "https://example.com/ahmed.jpg",
                "header": "Data Scientist",
                "description": "Experienced data scientist with a passion for deriving insights from complex datasets.",
                "experience": [
                    {
                        "dateRange": "Mar 2016 - Present",
                        "company": "Data Insights Co.",
                        "role": "Data Scientist",
                        "responsibilities": "Analyzing large datasets, developing predictive models, and communicating insights to stakeholders."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2012 - Jun 2016",
                        "institution": "Data Science Institute",
                        "career": "Bachelor of Science in Data Science"
                    }
                ],
                "contact": [
                    {
                        "phone": "+3344556677",
                        "email": "ahmed.ali@example.com",
                        "location": "City, Country",
                        "website": "www.ahmedali.data"
                    }
                ],
                "skills": ["Python", "R", "Machine Learning", "Statistical Analysis", "Data Visualization"],
                "speakingLanguages": ["English", "Arabic"],
                "otherInterests": ["Chess", "Traveling", "Cooking"],
                "creationDate": "2024-02-17",
                "views": 1800,
                "category": "Ciencia e Investigación",
                "language": "Inglés"
            },
            {
                "name": "Sophie Martin",
                "image": "https://example.com/sophie.jpg",
                "header": "Enfermera Registrada",
                "description": "Enfermera comprometida con brindar atención de calidad y apoyo a los pacientes en su proceso de recuperación.",
                "experience": [
                    {
                        "dateRange": "Jul 2019 - Presente",
                        "company": "Hospital Central",
                        "role": "Enfermera Registrada",
                        "responsibilities": "Administrar cuidados de enfermería, monitorear signos vitales, y colaborar con el equipo médico para proporcionar un entorno de atención seguro."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2015 - Jun 2019",
                        "institution": "Escuela de Enfermería",
                        "career": "Licenciatura en Enfermería"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "sophie.martin@example.com",
                        "location": "Ciudad, País",
                        "website": "www.sophiemartinenfermera.com"
                    }
                ],
                "skills": ["Cuidados Intensivos", "Primeros Auxilios", "Administación de Medicamentos", "Trabajo en Equipo", "Comunicación Efectiva"],
                "speakingLanguages": ["Español", "Inglés"],
                "otherInterests": ["Yoga", "Jardinería", "Voluntariado"],
                "creationDate": "2024-02-17",
                "views": 1200,
                "category": "Salud y Cuidado de la Salud",
                "language": "Español"
            },
            {
                "name": "John Smith",
                "image": "https://example.com/john.jpg",
                "header": "Financial Analyst",
                "description": "Detail-oriented financial analyst with expertise in financial modeling and data analysis.",
                "experience": [
                    {
                        "dateRange": "Jan 2018 - Present",
                        "company": "Financial Solutions LLC",
                        "role": "Financial Analyst",
                        "responsibilities": "Conducting financial analysis, preparing reports, and providing insights to support decision-making."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2014 - May 2018",
                        "institution": "University of Finance",
                        "career": "Bachelor of Science in Finance"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "john.smith@example.com",
                        "location": "City, Country",
                        "website": "www.johnsmithfinance.com"
                    }
                ],
                "skills": ["Financial Modeling", "Data Analysis", "Financial Reporting", "Excel", "SQL"],
                "speakingLanguages": ["English", "Spanish"],
                "otherInterests": ["Golf", "Reading", "Cooking"],
                "creationDate": "2024-02-17",
                "views": 1700,
                "category": "Finanzas y Contabilidad",
                "language": "Inglés"
            },
            {
                "name": "Marta López",
                "image": "https://example.com/marta.jpg",
                "header": "Especialista en Recursos Humanos",
                "description": "Especialista en recursos humanos con experiencia en reclutamiento, selección y desarrollo de talento.",
                "experience": [
                    {
                        "dateRange": "Abr 2017 - Presente",
                        "company": "Recursos Humanos Corp.",
                        "role": "Especialista en Recursos Humanos",
                        "responsibilities": "Liderar procesos de reclutamiento y selección, implementar programas de capacitación y desarrollo, y gestionar relaciones laborales."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2013 - Jun 2017",
                        "institution": "Universidad de Psicología",
                        "career": "Licenciatura en Psicología Organizacional"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "marta.lopez@example.com",
                        "location": "Ciudad, País",
                        "website": "www.martalopezrh.com"
                    }
                ],
                "skills": ["Reclutamiento", "Gestión del Talento", "Relaciones Laborales", "Capacitación y Desarrollo", "Comunicación Organizacional"],
                "speakingLanguages": ["Español", "Inglés"],
                "otherInterests": ["Senderismo", "Arte", "Voluntariado"],
                "creationDate": "2024-02-17",
                "views": 1400,
                "category": "Recursos humanos",
                "language": "Español"
            },
            {
                "name": "Alice Wang",
                "image": "https://example.com/alice.jpg",
                "header": "Ingeniera Civil",
                "description": "Ingeniera civil con experiencia en diseño y gestión de proyectos de infraestructura.",
                "experience": [
                    {
                        "dateRange": "Jun 2016 - Presente",
                        "company": "Constructora Constructor",
                        "role": "Ingeniera Civil",
                        "responsibilities": "Diseñar y supervisar proyectos de construcción, gestionar equipos de trabajo y garantizar el cumplimiento de estándares de calidad y seguridad."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2012 - May 2016",
                        "institution": "Universidad de Ingeniería",
                        "career": "Licenciatura en Ingeniería Civil"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "alice.wang@example.com",
                        "location": "Ciudad, País",
                        "website": "www.alicewangingeniera.com"
                    }
                ],
                "skills": ["Diseño Estructural", "Gestión de Proyectos", "AutoCAD", "Análisis Estructural", "Normativa de Construcción"],
                "speakingLanguages": ["Inglés", "Chino Mandarín"],
                "otherInterests": ["Pintura", "Jardinería", "Senderismo"],
                "creationDate": "2024-02-17",
                "views": 1600,
                "category": "Ingeniería y Arquitectura",
                "language": "Inglés"
            },
            {
                "name": "Luisa García",
                "image": "https://example.com/luisa.jpg",
                "header": "Abogada Corporativa",
                "description": "Abogada especializada en derecho corporativo con experiencia en asesoramiento legal para empresas.",
                "experience": [
                    {
                        "dateRange": "Mar 2015 - Presente",
                        "company": "Bufete Legal Empresarial",
                        "role": "Abogada Corporativa",
                        "responsibilities": "Brindar asesoramiento legal en contratos comerciales, fusiones y adquisiciones, y litigios corporativos."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2011 - Jun 2015",
                        "institution": "Facultad de Derecho",
                        "career": "Licenciatura en Derecho"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "luisa.garcia@example.com",
                        "location": "Ciudad, País",
                        "website": "www.luisagarciaderecho.com"
                    }
                ],
                "skills": ["Derecho Corporativo", "Contratos Comerciales", "Litigios", "Derecho Laboral", "Propiedad Intelectual"],
                "speakingLanguages": ["Español", "Inglés"],
                "otherInterests": ["Música", "Arte", "Viajes"],
                "creationDate": "2024-02-17",
                "views": 1900,
                "category": "Sector legal",
                "language": "Español"
            },
            {
                "name": "Tom Johnson",
                "image": "https://example.com/tom.jpg",
                "header": "Specialist in Social Services",
                "description": "Compassionate social services specialist with experience in community outreach and support programs.",
                "experience": [
                    {
                        "dateRange": "Aug 2017 - Present",
                        "company": "Community Outreach Center",
                        "role": "Social Services Specialist",
                        "responsibilities": "Providing counseling services, connecting clients with community resources, and advocating for vulnerable populations."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2013 - May 2017",
                        "institution": "Social Work Institute",
                        "career": "Bachelor of Social Work"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "tom.johnson@example.com",
                        "location": "City, Country",
                        "website": "www.tomjohnsonsocialservices.com"
                    }
                ],
                "skills": ["Counseling", "Case Management", "Community Outreach", "Crisis Intervention", "Advocacy"],
                "speakingLanguages": ["English", "Spanish"],
                "otherInterests": ["Hiking", "Cooking", "Volunteering"],
                "creationDate": "2024-02-17",
                "views": 2200,
                "category": "Servicios sociales y comunitarios",
                "language": "English"
            },
            {
                "name": "Sara Martínez",
                "image": "https://example.com/sara.jpg",
                "header": "Especialista en Atención al Cliente",
                "description": "Especialista en atención al cliente con habilidades para resolver problemas y garantizar la satisfacción del cliente.",
                "experience": [
                    {
                        "dateRange": "Jun 2018 - Presente",
                        "company": "Servicios al Cliente Inc.",
                        "role": "Especialista en Atención al Cliente",
                        "responsibilities": "Resolver consultas de clientes, gestionar reclamaciones, y proporcionar un servicio excepcional."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2014 - May 2018",
                        "institution": "Escuela de Negocios",
                        "career": "Licenciatura en Administración de Empresas"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "sara.martinez@example.com",
                        "location": "Ciudad, País",
                        "website": "www.saramartinezcliente.com"
                    }
                ],
                "skills": ["Comunicación Efectiva", "Resolución de Problemas", "Gestión de Reclamaciones", "Empatía", "Trabajo en Equipo"],
                "speakingLanguages": ["Español", "Inglés"],
                "otherInterests": ["Música", "Viajes", "Cine"],
                "creationDate": "2024-02-17",
                "views": 1800,
                "category": "Atención al cliente",
                "language": "Español"
            },
            {
                "name": "Michael Brown",
                "image": "https://example.com/michael.jpg",
                "header": "Analista de Marketing",
                "description": "Analista de marketing con experiencia en análisis de datos y estrategias de marketing digital.",
                "experience": [
                    {
                        "dateRange": "Oct 2019 - Presente",
                        "company": "Agencia de Marketing Digital",
                        "role": "Analista de Marketing",
                        "responsibilities": "Realizar análisis de mercado, gestionar campañas digitales y elaborar informes de rendimiento."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2015 - Jun 2019",
                        "institution": "Universidad de Marketing",
                        "career": "Licenciatura en Marketing"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "michael.brown@example.com",
                        "location": "Ciudad, País",
                        "website": "www.michaelbrownmarketing.com"
                    }
                ],
                "skills": ["Análisis de Datos", "SEO", "SEM", "Google Analytics", "Estrategia de Contenido"],
                "speakingLanguages": ["Inglés", "Español"],
                "otherInterests": ["Fotografía", "Música", "Deportes"],
                "creationDate": "2024-02-18",
                "views": 2000,
                "category": "Ventas y Marketing",
                "language": "Español"
            },
            {
                "name": "Emma Chen",
                "image": "https://example.com/emma.jpg",
                "header": "Ingeniera de Software",
                "description": "Ingeniera de software con experiencia en desarrollo de aplicaciones web y sistemas distribuidos.",
                "experience": [
                    {
                        "dateRange": "Mar 2017 - Presente",
                        "company": "Tech Innovations Corp.",
                        "role": "Ingeniera de Software",
                        "responsibilities": "Desarrollar y mantener aplicaciones web, colaborar en el diseño de arquitecturas escalables y resolver problemas técnicos."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2013 - Jun 2017",
                        "institution": "Universidad de Ingeniería de Software",
                        "career": "Licenciatura en Ingeniería de Software"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "emma.chen@example.com",
                        "location": "Ciudad, País",
                        "website": "www.emmachensoftware.com"
                    }
                ],
                "skills": ["Java", "Python", "Docker", "Angular", "Scrum"],
                "speakingLanguages": ["Inglés", "Chino Mandarín"],
                "otherInterests": ["Viajes", "Cocina", "Pintura"],
                "creationDate": "2024-02-19",
                "views": 1800,
                "category": "IT y Desarrollo de Software",
                "language": "Inglés"
            },
            {
                "name": "Ana Silva",
                "image": "https://example.com/ana.jpg",
                "header": "Educadora Infantil",
                "description": "Educadora infantil comprometida con el desarrollo integral de los niños y el fomento de un ambiente educativo inclusivo.",
                "experience": [
                    {
                        "dateRange": "Ene 2018 - Presente",
                        "company": "Guardería Sonrisas",
                        "role": "Educadora Infantil",
                        "responsibilities": "Planificar y ejecutar actividades educativas, evaluar el progreso de los niños y colaborar con padres y colegas."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2014 - Jun 2018",
                        "institution": "Facultad de Educación",
                        "career": "Grado en Educación Infantil"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "ana.silva@example.com",
                        "location": "Ciudad, País",
                        "website": "www.anasilvaeducacion.com"
                    }
                ],
                "skills": ["Desarrollo Infantil", "Pedagogía", "Creatividad", "Resolución de Conflictos", "Trabajo en Equipo"],
                "speakingLanguages": ["Español", "Inglés"],
                "otherInterests": ["Música", "Teatro", "Senderismo"],
                "creationDate": "2024-02-20",
                "views": 1500,
                "category": "Educación y Formación",
                "language": "Español"
             },
             {
                "name": "David Lee",
                "image": "https://example.com/david.jpg",
                "header": "Técnico de Redes",
                "description": "Técnico de redes con experiencia en configuración, mantenimiento y resolución de problemas de infraestructura de red.",
                "experience": [
                    {
                        "dateRange": "May 2016 - Presente",
                        "company": "Empresa de Tecnología",
                        "role": "Técnico de Redes",
                        "responsibilities": "Instalar y configurar equipos de red, diagnosticar y resolver problemas de conectividad, y asegurar la integridad de la red."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2012 - Jun 2016",
                        "institution": "Instituto de Tecnología",
                        "career": "Técnico en Redes de Computadoras"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "david.lee@example.com",
                        "location": "Ciudad, País",
                        "website": "www.davidleeredes.com"
                    }
                ],
                "skills": ["Cisco Networking", "LAN/WAN", "Firewalls", "TCP/IP", "Diagnóstico de Redes"],
                "speakingLanguages": ["Inglés", "Español"],
                "otherInterests": ["Fútbol", "Cine", "Tecnología"],
                "creationDate": "2024-02-21",
                "views": 1700,
                "category": "Telecomunicaciones",
                "language": "Inglés"
            },
            {
                "name": "Carla Rodríguez",
                "image": "https://example.com/carla.jpg",
                "header": "Especialista en Medio Ambiente",
                "description": "Especialista en medio ambiente comprometida con la conservación de recursos naturales y la promoción de prácticas sostenibles.",
                "experience": [
                    {
                        "dateRange": "Abr 2018 - Presente",
                        "company": "Organización Ambientalista",
                        "role": "Especialista en Medio Ambiente",
                        "responsibilities": "Desarrollar e implementar programas de educación ambiental, realizar evaluaciones de impacto ambiental y promover la conservación de ecosistemas."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2014 - Jun 2018",
                        "institution": "Facultad de Ciencias Ambientales",
                        "career": "Licenciatura en Ciencias Ambientales"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "carla.rodriguez@example.com",
                        "location": "Ciudad, País",
                        "website": "www.carlarodriguezmedioambiente.com"
                    }
                ],
                "skills": ["Conservación de la Naturaleza", "Gestión de Residuos", "Cambio Climático", "Educación Ambiental", "Investigación Científica"],
                "speakingLanguages": ["Español", "Inglés"],
                "otherInterests": ["Senderismo", "Fotografía de Naturaleza", "Voluntariado"],
                "creationDate": "2024-02-22",
                "views": 1600,
                "category": "Agricultura y Medio Ambiente",
                "language": "Español"
             },
             {
                "name": "Sarah Johnson",
                "image": "https://example.com/sarah.jpg",
                "header": "Diseñadora Gráfica",
                "description": "Diseñadora gráfica con pasión por crear identidades visuales impactantes y experiencias de usuario memorables.",
                "experience": [
                    {
                        "dateRange": "Jul 2017 - Presente",
                        "company": "Agencia de Diseño Creativo",
                        "role": "Diseñadora Gráfica",
                        "responsibilities": "Diseñar logotipos, folletos, interfaces de usuario y materiales de marketing, manteniendo la coherencia de la marca."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2013 - Jun 2017",
                        "institution": "Escuela de Diseño",
                        "career": "Licenciatura en Diseño Gráfico"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "sarah.johnson@example.com",
                        "location": "Ciudad, País",
                        "website": "www.sarahjohnsondesign.com"
                    }
                ],
                "skills": ["Adobe Photoshop", "Illustrator", "Diseño de Branding", "UI/UX Design", "Diseño Editorial"],
                "speakingLanguages": ["Inglés", "Español"],
                "otherInterests": ["Arte Urbano", "Música", "Viajes"],
                "creationDate": "2024-02-23",
                "views": 1900,
                "category": "Diseño y Creatividad",
                "language": "Inglés"
            },
            {
                "name": "Mohammed Ali",
                "image": "https://example.com/mohammed.jpg",
                "header": "Ingeniero de Producción",
                "description": "Ingeniero de producción con experiencia en optimización de procesos y gestión de la cadena de suministro.",
                "experience": [
                    {
                        "dateRange": "Mar 2016 - Presente",
                        "company": "Industria Manufacturera",
                        "role": "Ingeniero de Producción",
                        "responsibilities": "Optimizar la eficiencia de la línea de producción, gestionar inventarios y coordinar la logística de distribución."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2012 - Jun 2016",
                        "institution": "Facultad de Ingeniería Industrial",
                        "career": "Ingeniería Industrial"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "mohammed.ali@example.com",
                        "location": "Ciudad, País",
                        "website": "www.mohammedaliproduccion.com"
                    }
                ],
                "skills": ["Gestión de la Producción", "Control de Calidad", "Logística", "Mejora Continua", "Planificación de la Producción"],
                "speakingLanguages": ["Inglés", "Árabe"],
                "otherInterests": ["Fútbol", "Viajes", "Tecnología"],
                "creationDate": "2024-02-24",
                "views": 2200,
                "category": "Manufactura y Producción",
                "language": "Español"
             },
             {
                "name": "Alice Wang",
                "image": "https://example.com/alice.jpg",
                "header": "Especialista en Consultoría",
                "description": "Especialista en consultoría con experiencia en asesoramiento estratégico y optimización de procesos empresariales.",
                "experience": [
                    {
                        "dateRange": "Sep 2017 - Presente",
                        "company": "Consultoría Estratégica",
                        "role": "Especialista en Consultoría",
                        "responsibilities": "Desarrollar estrategias de negocios, identificar oportunidades de mejora y liderar proyectos de transformación empresarial."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2013 - Jun 2017",
                        "institution": "Escuela de Negocios",
                        "career": "Licenciatura en Administración de Empresas"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "alice.wang@example.com",
                        "location": "Ciudad, País",
                        "website": "www.alicewangconsultoria.com"
                    }
                ],
                "skills": ["Análisis Estratégico", "Gestión de Proyectos", "Optimización de Procesos", "Resolución de Problemas", "Comunicación Empresarial"],
                "speakingLanguages": ["Inglés", "Chino Mandarín"],
                "otherInterests": ["Música", "Cocina", "Arte"],
                "creationDate": "2024-02-25",
                "views": 1700,
                "category": "Consultoría y Asesoría",
                "language": "Inglés"
            },
            {
                "name": "Elena Martinez",
                "image": "https://example.com/elena.jpg",
                "header": "Abogada de Familia",
                "description": "Abogada especializada en derecho de familia con experiencia en mediación y resolución de conflictos familiares.",
                "experience": [
                    {
                        "dateRange": "Abr 2016 - Presente",
                        "company": "Despacho Legal Familiar",
                        "role": "Abogada de Familia",
                        "responsibilities": "Asesorar en casos de divorcio, custodia de menores y adopción, y representar a clientes en procesos judiciales."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2012 - Jun 2016",
                        "institution": "Facultad de Derecho",
                        "career": "Licenciatura en Derecho"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "elena.martinez@example.com",
                        "location": "Ciudad, País",
                        "website": "www.elenamartinezabogada.com"
                    }
                ],
                "skills": ["Mediación Familiar", "Derecho de Custodia", "Resolución de Conflictos", "Negociación", "Derecho de Sucesiones"],
                "speakingLanguages": ["Español", "Inglés"],
                "otherInterests": ["Teatro", "Viajes", "Literatura"],
                "creationDate": "2024-02-26",
                "views": 2000,
                "category": "Sector legal",
                "language": "Español"
             },
             {
                "name": "Ryan Miller",
                "image": "https://example.com/ryan.jpg",
                "header": "Gerente de Logística",
                "description": "Gerente de logística con experiencia en gestión de inventarios, transporte y optimización de la cadena de suministro.",
                "experience": [
                    {
                        "dateRange": "Jun 2015 - Presente",
                        "company": "Empresa Logística Internacional",
                        "role": "Gerente de Logística",
                        "responsibilities": "Supervisar el flujo de productos, coordinar la distribución y garantizar la eficiencia operativa en la cadena de suministro."
                    }
                ],
                "education": [
                    {
                        "dateRange": "Sep 2011 - Jun 2015",
                        "institution": "Facultad de Administración",
                        "career": "Licenciatura en Administración de Empresas"
                    }
                ],
                "contact": [
                    {
                        "phone": "+1122334455",
                        "email": "ryan.miller@example.com",
                        "location": "Ciudad, País",
                        "website": "www.ryanmillerlogistica.com"
                    }
                ],
                "skills": ["Gestión de Inventarios", "Planificación de Rutas", "Negociación de Contratos", "Optimización de Almacenes", "Logística Internacional"],
                "speakingLanguages": ["Inglés", "Español"],
                "otherInterests": ["Fútbol", "Música", "Viajes"],
                "creationDate": "2024-02-27",
                "views": 2100,
                "category": "Logística y Cadena de Suministro",
                "language": "Inglés"
            }
        ]        
    )
    console.log("Cv table populated successfully");
  } catch (error) {
    console.error("Error populating language database:", error);
  };
};

module.exports = populateCv;
