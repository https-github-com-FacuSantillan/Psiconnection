const { encrypt, compare } = require('../helpers/handleBcrypt.js')

// controlador de registro para crear psicologo http://localhost:3001/psiconection/registerPsicologo --- Psicologo
const createUsuarioPsicologo = async ({ name, email, user, age, password, country, gender, license, openingHours, schedule, paymentDetails, speciality}) => {
    if(!name || !email || !user || !age || !password || !country || !gender || !license || !openingHours || !schedule || !paymentDetails || !speciality) throw new Error('Se requieren todos los datos');
    const passwordHash = await encrypt(password)
         PsicologoUser =  { 
            name, 
            email, 
            user, 
            age, 
            password: passwordHash, 
            country, 
            gender, 
            license, 
            openingHours, 
            schedule,
            paymentDetails,
            speciality,
        };
      
        return {
            Psicologo : PsicologoUser
        }
}




module.exports = {
    createUsuarioPsicologo,
}