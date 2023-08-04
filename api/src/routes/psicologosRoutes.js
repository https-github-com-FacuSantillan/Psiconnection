
const { Router } = require('express');
const upload = require('../utils/upload');


//Controladores
const {
  putController,
  deleteController,
} = require("../controllers/psicologosController");

// handlers
const {
  registerHandler,
  getDetailHandler,
  subirFoto,
  checkDataUpdate,
  checkDataDelete,
} = require("../handlers/psicologosHandlers.js");

const psicologosRoutes = Router();

//Ruta de búsqueda por id
psicologosRoutes.get("/:id", getDetailHandler);

//Modificar información existente del psico
psicologosRoutes.put("/update", checkDataUpdate, putController);

//Eliminar psico (cambia el estado)
psicologosRoutes.delete("/delete", checkDataDelete, deleteController);

//! registro
// ruta tipo post http://localhost:3001/psiconection/registerPsicologo --- Psicologo
psicologosRoutes.post("/registerPsicologo", registerHandler);

// ruta tipo put subir foto ruta http://localhost:3001/psiconection/uploadFoto/"id del psicologo"
psicologosRoutes.put('/uploadFoto/:id',upload.single('foto'), subirFoto);




module.exports = psicologosRoutes;
