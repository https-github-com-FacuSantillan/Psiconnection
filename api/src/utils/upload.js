const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer')
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads', // La carpeta en la que se guardarán las imágenes en Cloudinary
      allowed_formats: ['jpg', 'jpeg', 'png'], // Formatos de archivo permitidos
    },
  });
  exports.upload = multer({ storage: storage });





