require("dotenv").config();
const { API_KEY, CLOUD_NAME } = process.env;
const cloudinary = require("cloudinary").v2;
const axios = require('axios');

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const signatureResponse = () => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
    },
    cloudinaryConfig.api_secret
  );
  return { timestamp, signature, API_KEY, CLOUD_NAME };
};

const cloudinaryHandler = async (req, res) => {
  const { file } = req.body;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", signatureResponse().API_KEY);
  formData.append("signature", signatureResponse().signature);
  formData.append("timestamp", signatureResponse().timestamp);

  const cloudinaryResponse = await axios.post(
    `https://api.cloudinary.com/v1_1/${signatureResponse().CLOUD_NAME}/auto/upload`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: function (e) {
        console.log(e.loaded / e.total);
      },
    }
  );

  const photoData = {
    public_id: cloudinaryResponse.data.public_id,
    version: cloudinaryResponse.data.version,
    signature: cloudinaryResponse.data.signature,
    url: cloudinaryResponse.data.url,
  };
  res.json(photoData);
};

module.exports = cloudinaryHandler;

