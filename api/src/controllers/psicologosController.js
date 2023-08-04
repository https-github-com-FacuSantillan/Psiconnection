
require('dotenv').config();
const { encrypt, compare } = require('../helpers/handleBcrypt.js')
const { Psicologo } = require('../db.js')



//Controlador para búsqueda por id
const getDetailController = async (id) => {
  const detail = await Psicologo.findByPk(id);
  return detail;
};

// controlador de registro para crear psicologo http://localhost:3001/psiconection/registerPsicologo --- Psicologo

const createUsuarioPsicologo = async ({
  nombre,
  apellido,
  email,
  fecha_nacimiento,
  contraseña,
  pais,
  zona_horaria,
  horario,
  genero,
  licencia,
  tarifa,
  especialidad,
  whatsAppUrl,
  telefono,
  descripcion,
  fecha_registro
}) => {
  const passwordHash = await encrypt(contraseña)

  // ! verificamos que el usuario no se encuentre
  const verifyExist = await Psicologo.findAll({
    where: {
      email: email
    }
  })
  if (verifyExist.length) {
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
    descripcion,
    fecha_registro
  })

  return newPsicologoCreate;
};


//controlador asociacion de URL de foto a psicologo
const uploadFoto = async ({ fotoURL, id}) => {
  const updateFotoPsico = await Psicologo.update({ foto: fotoURL }, {
    where: {
      id: id
    }
  })

  return updateFotoPsico
};


// Controlador para actualizar datos de un psicólogo
const putController = async (req, res) => {
  try {
    const psicologoId = req.body.id;

    const psicologo = await Psicologo.findByPk(psicologoId);

    if (!psicologo) {
      return res
        .status(404)
        .send("El psicólogo no existe en la base de datos.");
    }

    const dataToUpdate = req.body;

    for (const campo in dataToUpdate) {
      psicologo[campo] = dataToUpdate[campo];
    }

    await psicologo.save();

    res.status(200).send({
      message: "Los datos del psicólogo se actualizaron correctamente.",
      psicologoActualizado: psicologo,
    });
  } catch (error) {
    console.error("Error al actualizar datos del psicólogo:", error);
    res
      .status(500)
      .send("Ocurrió un error al actualizar los datos del psicólogo.");
  }
};

// Controlador cambiar el estado "estado_cuenta" a Inactivo
const deleteController = async (req, res) => {
  const { id } = req.body;

  try {
    const psicologo = await Psicologo.findByPk(id);
    if (!psicologo) {
      return res
        .status(404)
        .send("El psicólogo con el id proporcionado no fue encontrado.");
    }

    // Cambiar el estado_cuenta a "Inactivo"
    await psicologo.update({ estado_cuenta: "Inactivo" });

    // Devolver el psicólogo actualizado
    return res.status(200).json(psicologo);
  } catch (error) {
    return res
      .status(500)
      .send("Ocurrió un error al marcar al psicólogo como 'Inactivo'.");
  }
};

module.exports = {
  createUsuarioPsicologo,
  getDetailController,
  uploadFoto,
  putController,
  deleteController
};
