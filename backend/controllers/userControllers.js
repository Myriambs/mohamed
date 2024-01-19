const userSchema = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.register=async(req,res)=>{
    try{
        //envoi de data 
        const {name,email,password} = req.body

        const found = await userSchema.findOne({email})
        if(found){ return res.json ({msg:'dsl c deja fait, svp imchy logi toul'})}


        const newUser = await new userSchema(req.body)

        // l'utilisation de bcrypt
        const saltRounds = 10 
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password,salt);

        newUser.password = hash 





        newUser.save()
        res.status(200).json({msg:'u did it , welcome the jungle ',newUser})
    }catch(err){
        console.log(err)
    }
}


exports.login=async(req,res)=>{
    try{

        const {password,email} = req.body
        const found = await userSchema.findOne({email})
        if (!found) {return res.json({msg:"email introuvable bara sajel"})}
        const match = bcrypt.compare(password, found.password)
        if (!match)  {return res.json({msg:'password est erronee'})}
        //token 
        const payload = {id : found._id}
        var token = jwt.sign(payload,process.env.privatekey)
        res.json({msg:"ur welcome" , found,token})


    }catch(err){
        console.log(err)
    }
}