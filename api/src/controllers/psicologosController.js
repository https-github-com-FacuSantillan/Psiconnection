const { encrypt, compare } = require('../helpers/handleBcrypt.js')

// controlador de registro para crear psicologo http://localhost:3001/psiconection/registerPsicologo --- Psicologo
const createUsuarioPsicologo = async ({ nombre, apellido, email, usuario, edad, password, pais, genero, licencia, disponibilidad, tarifa, especialidad, whatsAppUrl, telefono, foto, descripcion }) => {
    const passwordHash = await encrypt(password)
         PsicologoUser =  { 
            nombre, 
            apellido, 
            email, 
            usuario, 
            edad, 
            password: passwordHash, 
            pais, 
            genero, 
            licencia, 
            disponibilidad, 
            tarifa, 
            especialidad, 
            whatsAppUrl, 
            telefono, 
            foto, 
            descripcion 
        };
      
        return {
            Psicologo : PsicologoUser
        }
}




module.exports = {
    createUsuarioPsicologo,
}