const { createUsuarioPsicologo } = require('../controllers/psicologosController.js')

// manejador de prueba
const manejadorPrueba = (req, res) => {
        res.status(200).send('Ruta de prueba')
}


// manejador de registro psicologo http://localhost:3001/psiconection/registerPsicologo --- Psicologo
const registerHandler = async (req, res) => {
    const { nombre, apellido, email, fecha_nacimiento, contraseña, pais, zona_horaria, horario, genero, licencia, tarifa, especialidad, whatsapp_url, telefono,descripcion, fecha_registro } = req.body
    
    if (!req.file || !req.file.secure_url) {
        return res.status(400).json({ error: 'Debe seleccionar una imagen válida.' });
      }

    try {
        //! validaciones

        const foto = req.file.secure_url;
        
        if(!nombre) return res.status(403).json({error: 'nombre vacio'});
        if(!apellido) return res.status(403).json({error: 'apellido vacio'});
        if(!email) return res.status(403).json({error: 'email vacio'});
        // if(!usuario) return res.status(403).json({error: 'user vacio'});
        if(!fecha_nacimiento) return res.status(403).json({age: 'nombre vacio'});
        if(!contraseña) return res.status(403).json({error: 'password vacio'});
        if(!pais) return res.status(403).json({error: 'pais vacio'});
        if(!genero) return res.status(403).json({error: 'genero vacio'});
        if(!licencia) return res.status(403).json({error: 'lecencia vacia'});
        // if(!disponibilidad) return res.status(403).json({error: 'disponibilidad vacio'});
        // if(!cronograma) return res.status(403).json({error: 'cronograma vacio'});
        if(!tarifa) return res.status(403).json({error: 'tipo de pago vacio'});
        if(!especialidad) return res.status(403).json({error: 'especialidad vacio'});
        if(!whatsapp_url) return res.status(403).json({error: 'WhatsApp vacio'});
        if(!telefono) return res.status(403).json({error: 'telefono vacio'});
        if(!foto) return res.status(403).json({error: 'foto vacio'});
        if(!descripcion) return res.status(403).json({error: 'descripcion vacio'});
        if(!zona_horaria) return res.status(403).json({error: 'zona horaria vacio'});
        if(!horario) return res.status(403).json({error: 'horario vacio'});
        if(!fecha_registro) return res.status(403).json({error: 'fecha de registro vacio'});
  
    


        const usuarioPsicologo = await createUsuarioPsicologo({ nombre, apellido, email, fecha_nacimiento, contraseña, pais, zona_horaria, horario, genero, licencia, tarifa, especialidad, whatsapp_url, telefono, foto, descripcion, fecha_registro } )

        return res.status(200).json(usuarioPsicologo)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}




module.exports = {
    manejadorPrueba,
    registerHandler
}