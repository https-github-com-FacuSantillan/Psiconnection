const { encrypt, compare } = require('../helpers/handleBcrypt.js')

// controlador de registro usuario http://localhost:3001/psiconection/registerUsuario --- Usuario
const createUserController = async ({ name, age, email, user, paymentDetails, password }) => {
    if(!name || !age || !email || !user || !paymentDetails || !password) throw new Error("Se requiren todos los datos");
    const passwordHash = await encrypt(password);

    const newUser = { 
        name, 
        age, 
        email, 
        user, 
        paymentDetails, 
        password: passwordHash
    };
    return {
        Usuario: newUser
    }
};


module.exports = {
    createUserController
}