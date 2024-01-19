const { body, validationResult } = require('express-validator');


exports.registerValidation = [
    body('email','plz hot email yosla7').isEmail(),
    body('password','hot mdp tasla7 ').isLength({min:8})
]

exports.loginValidation = [
    body('email','plz hot email yosla7').isEmail()
]
 

exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
next()
}