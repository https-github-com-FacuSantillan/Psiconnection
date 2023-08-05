const jwt = require('jsonwebtoken');


//! Genera el token
const tokenSign = async (psicologo) => {
    return jwt.sign(
        {
            id: psicologo.id,
            roll: psicologo.roll,
            nombre: psicologo.nombre,
            apellido: psicologo.apellido
        }, //TODO: PAYLOAD ---> Carga util del token
        process.env.PAlABRA_SECRETA, //TODO env ---> frase secreta(llave secreta)
    )
}


const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.PALABRA_SECRETA)
    } catch (error) {
        return null
    }
}

//! Verificar que el token sea valido y correcto
const decodeSign = () => {

}


module.exports = {
    tokenSign,
    verifyToken,
    decodeSign
}