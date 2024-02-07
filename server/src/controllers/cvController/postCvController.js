const { Cv, User, Comment } = require('../../db');
const {uploadImage}= require("../../helpers/cloudinary")
const fs = require ("fs-extra")

const postCvController = async (name,req, image, description, experience, contact, study, applying) => {
   const jsonObjectExperience = JSON.parse(experience);
    const jsonObjectStudy = JSON.parse(study);
        const [newCv, created] = await Cv.findOrCreate({
            where: {
                name,
                image: [],
                description,
                experience:jsonObjectExperience,
                contact,
                study:jsonObjectStudy,
                applying
            }
        });

    if (req.files?.image && req.files?.image.length>0 ) {
        console.log("Subiendo imágenes a Cloudinary");
    
        const uploadPromises = req.files.image.map(async (file) => {
          const result = await uploadImage(file.tempFilePath);
          console.log("Resultado de la subida a Cloudinary: ", result);
          return {
            public_id: result.public_id,
            secure_url: result.secure_url,
          };
        });
    
        console.log("uploadPromises", uploadPromises)
        const uploadedImages = await Promise.all(uploadPromises);
    
        // Asignar las imágenes subidas al producto
        console.log("uploadImage prueba ", uploadPromises)
        newCv.image = uploadedImages;
        console.log(image)
    
          console.log("Eliminando archivo temporal");
          await Promise.all(req.files.image.map(async (file) => {
            await fs.unlink(file.tempFilePath);
          }));
          console.log("Guardando producto en la base de datos");
          await newCv.save();
      } else {
        const result = await uploadImage(req.files.image.tempFilePath)
        newCv.image = [
          {
          public_id : result.public_id,
          secure_url : result.secure_url
        }
      ]
        await fs.unlink(req.files.image.tempFilePath)
        console.log(result)
        await newCv.save();
      }

    return newCv;
}

module.exports = postCvController;
