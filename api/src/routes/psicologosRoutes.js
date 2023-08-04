const { Router } = require('express');
const upload = require('../utils/upload');



// handlers
const { manejadorPrueba, registerHandler } = require('../handlers/psicologosHandlers.js');


const psicologosRoutes = Router();


// ruta de prueba http://localhost:3001/psiconection/prueba
psicologosRoutes.get('/prueba', manejadorPrueba);


//! registro
// ruta tipo post http://localhost:3001/psiconection/registerPsicologo --- Psicologo
psicologosRoutes.post('/registerPsicologo', upload.single('foto'), registerHandler)


//! login 
//ruta tipo post http://localhost:3001/psiconection/login
psicologosRoutes.post('/login')


module.exports = psicologosRoutes;