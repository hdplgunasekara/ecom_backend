const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: "itp2022",
  api_key: "287411647238895",
  api_secret: "lmh2OzX88woZSTdtJZ4jWI3ot4Y"
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'ITP',
        allowedFormats: ['jpeg', 'png', 'jpg']
    } 
});

module.exports = {
    cloudinary,
    storage
}