const { createUsuarioPsicologo } = require('../controllers/psicologosController.js')

// manejador de prueba
const manejadorPrueba = (req, res) => {
        res.status(200).send('Ruta de prueba')
}


// manejador de registro 

const registerHandler = (req, res) => {
    const { nombre, correo, usuario, contraseña } = req.body 
        
    try {
        if(!nombre || !correo || !usuario || !contraseña) throw new Error("Se require todos los datos");
        const usuarioPsicologo = {
            nombre,
            correo,
            usuario,
            contraseña
        }

        return res.status(200).json(usuarioPsicologo)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}




module.exports = {
    manejadorPrueba,
    registerHandler
}