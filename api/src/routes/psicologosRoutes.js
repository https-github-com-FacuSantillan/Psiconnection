const { Router } = require('express');


// handlers
const { manejadorPrueba, registerHandler } = require('../handlers/psicologosHandlers.js');


const psicologosRoutes = Router();


// ruta de prueba http://localhost:3001/psiconection/prueba
psicologosRoutes.get('/ruta', manejadorPrueba);

// ruta tipo post http://localhost:3001/psiconection/register

psicologosRoutes.post('/register', registerHandler)


module.exports = psicologosRoutes;