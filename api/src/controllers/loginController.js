const bcrypt = require('bcryptjs');
const { Psicologo } = require('../db.js');

const { tokenSign } = require('../helpers/generateTokens.js')





const loginController = async ({email, contraseña}) => {
    const psicologo = await Psicologo.findOne({
        where: {
            email: email
        }
       });

    const passwordCorrect = psicologo === null
    ? false 
    : await bcrypt.compare(contraseña, psicologo.contraseña);

    if(!(psicologo && passwordCorrect)) {
        throw new Error('Email invalido o contraseña invalida, por favor intente de nuevo')
    }

    const tokenSession = await tokenSign(psicologo) 

     return {success: passwordCorrect, info: {
        roll: psicologo.roll,
        nombre: psicologo.nombre,
        apellido: psicologo.apellido,
        email: psicologo.email,
        tokenSession

    }};

    

}

module.exports = {
    loginController
}