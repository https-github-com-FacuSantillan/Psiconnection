const { encrypt, compare } = require('../helpers/handleBcrypt.js')

// controlador de registro usuario http://localhost:3001/psiconection/registerUsuario --- Usuario
const createUserController = async ({nombre, apellido, edad, pais, genero, email, password, telefono, foto, estado}) => {

    const passwordHash = await encrypt(password);

    const newUser = {
        nombre, 
        apellido, 
        edad, 
        pais, 
        genero, 
        email, 
        password: passwordHash, 
        telefono, 
        foto, 
        estado
    };

    return {
        Usuario: newUser
    }
};


module.exports = {
    createUserController
}