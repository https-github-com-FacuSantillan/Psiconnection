const { encrypt, compare } = require('../helpers/handleBcrypt.js')
const { Psicologo } = require('../db.js')

//Controlador para búsqueda por id
const getDetailController = async (id) => {
  const detail = await Psicologo.findByPk(id);
  if(!detail) {
    throw new Error('No se encontro psicologo con ese id')
  };
  return detail;
};


// controlador de registro para crear psicologo http://localhost:3001/psiconection/registerPsicologo --- Psicologo
const createUsuarioPsicologo = async ({ nombre, apellido, email, fecha_nacimiento, contraseña, pais, zona_horaria, horario, genero, licencia, tarifa, especialidad, whatsAppUrl, telefono, foto, descripcion, fecha_registro }) => {
  const passwordHash = await encrypt(contraseña)

  //! verificamos que el usuario no se encuentre
  const verifyExist = await Psicologo.findAll({
      where: {
          email: email
      }
  })
  if(verifyExist.length) {
      throw new Error('El email ya se encuentra activo')
  }
  //! si el email al registrarse no esta en la base de datos, entonces procede a crearse el nuevo psicologo
  const newPsicologoCreate = await Psicologo.create({
      nombre, 
      apellido, 
      email, 
      fecha_nacimiento, 
      contraseña: passwordHash, 
      pais, 
      zona_horaria, 
      horario, 
      genero, 
      licencia, 
      tarifa, 
      especialidad: especialidad, 
      whatsAppUrl, 
      telefono, 
      foto,
      descripcion, 
      fecha_registro
  })

      return newPsicologoCreate;
};

module.exports = {
  createUsuarioPsicologo,
  getDetailController,
};
