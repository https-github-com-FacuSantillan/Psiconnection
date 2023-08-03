const { createUserController } = require('../controllers/userControllers.js');


const userCreateHandler = async (req,res) => {
    const {nombre, apellido, edad, pais, genero, email, password, telefono, foto, estado} = req.body
    try {
        //! validaciones
        if(!nombre) return res.status(403).json({error:"Nombre vacio."});
        if(!apellido) return res.status(403).json({error:"Apellido vacio."});
        if(!edad) return res.status(403).json({error:"Edad vacio."});
        if(!pais) return res.status(403).json({error:"Pais vacio."});
        if(!genero) return res.status(403).json({error:"Genero vacio."});
        if(!telefono) return res.status(403).json({error:"Telefono vacio."});
        if(!foto) return res.status(403).json({error:"Foto vacio."});
        if(!estado) return res.status(403).json({error:"Estado vacio."});

       const newUser = await createUserController({nombre, apellido, edad, pais, genero, email, password, telefono, foto, estado});
        return res.status(200).json(newUser);

        
    } catch (error) {
        return  res.status(400).json({error:error.message});
    }
}



module.exports = {
    userCreateHandler
}