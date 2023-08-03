const { createUsuarioPsicologo } = require('../controllers/psicologosController.js')

// manejador de prueba
const manejadorPrueba = (req, res) => {
        res.status(200).send('Ruta de prueba')
}


// manejador de registro psicologo http://localhost:3001/psiconection/registerPsicologo --- Psicologo
const registerHandler = async (req, res) => {
    const { name, email, user, age, password, country, gender, license, openingHours, schedule, paymentDetails, speciality} = req.body   
    try {
        if(!name || !email || !user || !age || !password || !country || !gender || !license || !openingHours || !schedule || !paymentDetails || !speciality) throw new Error("Se require todos los datos");
        const usuarioPsicologo = await createUsuarioPsicologo({ name, email, user, age, password, country, gender, license, openingHours, schedule, paymentDetails, speciality} )

        return res.status(200).json(usuarioPsicologo)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}




module.exports = {
    manejadorPrueba,
    registerHandler
}