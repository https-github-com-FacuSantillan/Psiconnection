const { verifyToken } = require('../helpers/generateTokens.js');
const { Psicologo } = require('../db.js');


const checkRollAuth = (roles) => async (req, res, next)  => { 
    try {
        const token = req.headers.authorization.split(' ').pop(); //TODO: 23232323
        const tokenData = await verifyToken(token);
        const psicologo = await Psicologo.findByPk(tokenData.id);

        //TODO: [''].includes('psicologo')
        if([].concat(roles).includes(psicologo.roll)){
            next()
        } else {
            res.status(409).json({Error:'No tienes permiso para esta funcionalidad'})
        }
    } catch (error) {
        res.status(409).json({error:error.message})
    }
}



module.exports = checkRollAuth;