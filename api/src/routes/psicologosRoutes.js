const { Router } = require("express");

//Controladores
const {
  putController,
  deleteController,
} = require("../controllers/psicologosController");

// handlers
const {
  manejadorPrueba,
  registerHandler,
  getDetailHandler,
  checkDataUpdate,
  checkDataDelete,
  getPsicologosHandler,
} = require("../handlers/psicologosHandlers.js");

const psicologosRoutes = Router();

//Ruta que trae a todos los psicólogos, incluye búsqueda por query
psicologosRoutes.get("/", getPsicologosHandler);

// ruta de prueba http://localhost:3001/psiconection/prueba
psicologosRoutes.get("/prueba", manejadorPrueba);

//Ruta de búsqueda por id
psicologosRoutes.get("/:id", getDetailHandler);

//Modificar información existente del psico
psicologosRoutes.put("/update", checkDataUpdate, putController);

//Eliminar psico (cambia el estado)
psicologosRoutes.delete("/delete", checkDataDelete, deleteController);

//! registro
// ruta tipo post http://localhost:3001/psiconection/registerPsicologo --- Psicologo
psicologosRoutes.post("/registerPsicologo", registerHandler);

//! login
//ruta tipo post http://localhost:3001/psiconection/login
psicologosRoutes.post("/login");

module.exports = psicologosRoutes;
