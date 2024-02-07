const { Cv, User  } = require('../../db');

const getAllCvsController = async () => {
    try {
        const allCvsFound = await Cv.findAll({});

        return allCvsFound;
        
    } catch (error) {
  
    }

}

module.exports = getAllCvsController;