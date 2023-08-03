const { Router } = require('express');


// handlers
const { manejadorPrueba, registerHandler } = require('../handlers/psicologosHandlers.js');


const psicologosRoutes = Router();


// ruta de prueba http://localhost:3001/psiconection/prueba
psicologosRoutes.get('/prueba', manejadorPrueba);


//! registro
// ruta tipo post http://localhost:3001/psiconection/registerPsicologo --- Psicologo
psicologosRoutes.post('/registerPsicologo', registerHandler)


//! login 
//ruta tipo post http://localhost:3001/psiconection/login
psicologosRoutes.post('/login')


module.exports = psicologosRoutes;