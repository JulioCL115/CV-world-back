const { Lenguaje } = require("../../db");

const getAllLenguagesController = async () => {
    try {
   
        const allLenguaguesFound = await Lenguaje.findAll({});

        return allLenguaguesFound;

    } catch (error) {
        console.error("Error searching for Lenguages: ", error);
        throw error;
    }
};


module.exports = getAllLenguagesController;
