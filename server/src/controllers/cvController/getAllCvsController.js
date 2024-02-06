const {Cv} = require("../../db")
const getAllCvsController = async () => {
    const response = await Cv.findAll();
  const mappedCv = response.map((cv) => ({
    id: cv.id,
    name:cv.name,
    image: cv.image,
    description: cv.description,
    experience:cv.experience,
    study:cv.study,
    contact: cv.contact
  }));
  console.log("se ingresaron correctamente");
  return  mappedCv;

}

module.exports = getAllCvsController;