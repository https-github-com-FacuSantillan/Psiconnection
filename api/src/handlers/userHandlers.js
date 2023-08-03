const { createUserController } = require('../controllers/userControllers.js');


const userCreateHandler = async (req,res) => {
    const { name, age, email, user, paymentDetails, password } = req.body
    try {
        if(!name || !age || !email || !user || !paymentDetails || !password) throw new Error("Se requiren todos los datos");
        const newUser = await createUserController({ name, age, email, user, paymentDetails, password });
        return res.status(200).json(newUser);
    } catch (error) {
        return  res.status(400).json({error:error.message});
    }
}



module.exports = {
    userCreateHandler
}