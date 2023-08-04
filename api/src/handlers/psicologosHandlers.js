const {
    createUsuarioPsicologo,
    getDetailController,
    uploadFoto
} = require("../controllers/psicologosController.js");
const cloudinary = require('../utils/cloudinary.js');


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
    const {
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
        whatsapp_url,
        telefono,
        descripcion,
        fecha_registro
    } = req.body;


    try {
     //! validaciones
        if (!nombre) return res.status(403).json({ error: 'nombre vacio' });
        if (!apellido) return res.status(403).json({ error: 'apellido vacio' });
        if (!email) return res.status(403).json({ error: 'email vacio' });
        if (!fecha_nacimiento) return res.status(403).json({ age: 'nombre vacio' });
        if (!contraseña) return res.status(403).json({ error: 'password vacio' });
        if (!pais) return res.status(403).json({ error: 'pais vacio' });
        if (!genero) return res.status(403).json({ error: 'genero vacio' });
        if (!licencia) return res.status(403).json({ error: 'lecencia vacia' });
        if (!tarifa) return res.status(403).json({ error: 'tipo de pago vacio' });
        if (!especialidad) return res.status(403).json({ error: 'especialidad vacio' });
        if (!whatsapp_url) return res.status(403).json({ error: 'WhatsApp vacio' });
        if (!telefono) return res.status(403).json({ error: 'telefono vacio' });
        if (!descripcion) return res.status(403).json({ error: 'descripcion vacio' });
        if (!zona_horaria) return res.status(403).json({ error: 'zona horaria vacio' });
        if (!horario) return res.status(403).json({ error: 'horario vacio' });
        if (!fecha_registro) return res.status(403).json({ error: 'fecha de registro vacio' });




        const usuarioPsicologo = await createUsuarioPsicologo({
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
            whatsapp_url,
            telefono,
            descripcion,
            fecha_registro
        })

        return res.status(200).json(usuarioPsicologo)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};



const subirFoto = async (req, res) => {

    function getUrlImage() {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(req.file.path, function (err, result) {
                if (err) {
                    reject(new Error("No se pudo subir la imagen"));
                } else {
                    const data = result.url;
                    resolve(data);
                }
            });
        });
    }

    try {
        const { id } = req.params;
        const fotoURL = await getUrlImage();
        const updateFoto = await uploadFoto({ fotoURL, id });
        return res.status(200).json(updateFoto)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    registerHandler,
    getDetailHandler,
    subirFoto
};
