const { Category } = require("../db");

async function populateCategory() {
    try {
        const categories = await Category.bulkCreate([
            {
                name: "IT y Desarrollo de Software",
            },
            {
                name: "Salud y Cuidado de la Salud",
            },
            {
                name: "Ventas y Marketing",
            },
            {
                name: "Recursos humanos",
            },
            {
                name: "Educación y Formación",
            },
            {
                name: "Ingeniería y Arquitectura",
            },
            {
                name: "Finanzas y Contabilidad",
            },
            {
                name: "Sector legal",
            },
            {
                name: "Servicios sociales y comunitarios",
            },
            {
                name: "Diseño y Creatividad",
            },
            {
                name: "Logística y Cadena de Suministro",
            },
            {
                name: "Manufactura y Producción",
            },
            {
                name: "Medios de Comunicación",
            },
            {
                name: "Ciencia e Investigación",
            },
            {
                name: "Consultoría y Asesoría",
            },
            {
                name: "Atención al cliente",
            },
            {
                name: "Agricultura y Medio Ambiente",
            },
            {
                name: "Telecomunicaciones",
            },
        ]);

        console.log("Category table populated successfully");
    } catch (error) {
        if (error.name === "SequelizeUniqueConstraintError") {
            console.log("Users table already populated");
            return;
        }
        console.error("Error populating category database");
    }; 
};

module.exports = populateCategory;
