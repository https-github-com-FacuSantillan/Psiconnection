const { Router } = require('express');
const upload = require('../utils/upload');



// handlers
const {
  // manejadorPrueba,
  registerHandler,
  getDetailHandler,
  subirFoto
} = require("../handlers/psicologosHandlers.js");

const psicologosRoutes = Router();

// ruta de prueba http://localhost:3001/psiconection/prueba
// psicologosRoutes.get("/prueba", manejadorPrueba);

// Ruta de búsqueda por id
psicologosRoutes.get("/:id", getDetailHandler);

//! registro
// ruta tipo post http://localhost:3001/psiconection/registerPsicologo --- Psicologo
psicologosRoutes.post('/registerPsicologo', registerHandler);



psicologosRoutes.put('/uploadFoto/:id',upload.single('foto'), subirFoto); 



//! login
//ruta tipo post http://localhost:3001/psiconection/login
psicologosRoutes.post("/login");

module.exports = psicologosRoutes;
