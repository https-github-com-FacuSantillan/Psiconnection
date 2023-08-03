const {
  createUsuarioPsicologo,
  getDetailController,
} = require("../controllers/psicologosController.js");

// manejador de prueba
const manejadorPrueba = (req, res) => {
  res.status(200).send("Ruta de prueba");
};

const getDetailHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await getDetailController(id);
    res.status(200).json(detail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// manejador de registro psicologo http://localhost:3001/psiconection/registerPsicologo --- Psicologo
const registerHandler = async (req, res) => {
    const usuarioPsicologo = await createUsuarioPsicologo({
      nombre,
      apellido,
      email,
      usuario,
      edad,
      password,
      pais,
      genero,
      licencia,
      disponibilidad,
      tarifa,
      especialidad,
      whatsAppUrl,
      telefono,
      foto,
      descripcion,
    });

    return res.status(200).json(usuarioPsicologo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  manejadorPrueba,
  registerHandler,
  getDetailHandler,
};
