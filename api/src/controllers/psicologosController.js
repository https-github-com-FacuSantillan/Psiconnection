


const createUsuarioPsicologo = ({nombre, usuario, contraseña, correo}) => {
        if(!nombre || !usuario || !contraseña || !correo) throw new Error('Se requieren todos los datos')
}



module.exports = {
    createUsuarioPsicologo
}