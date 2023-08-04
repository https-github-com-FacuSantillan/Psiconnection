const bcrypt = require('bcryptjs');
const { Psicologo } = require('../db.js');

const loginController = async ({email, contraseña}) => {
    const psicologo = await Psicologo.findOne({
        where: {
            email: email
        }
       })
    const passwordCorrect = psicologo === null
    ? false 
    : await bcrypt.compare(contraseña, psicologo.contraseña);

    if(!passwordCorrect) {
        throw new Error('Email invalido o contraseña invalida, porfavor intente de nuevo')
    }

    return {success: passwordCorrect, info: {
        nombre: psicologo.nombre,
        apellido: psicologo.apellido,
        email: psicologo.email
    }};

    

}

module.exports = {
    loginController
}