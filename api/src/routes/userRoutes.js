const { Router } = require('express');
const { userCreateHandler } = require('../handlers/userHandlers.js');

const userRoutes = Router();
    
//ruta tipo post http://localhost:3001/psiconection/registerUsuario  --- Usuario
userRoutes.post('/registerUsuario', userCreateHandler)


module.exports = userRoutes;
