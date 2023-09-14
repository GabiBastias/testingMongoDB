const Users = require('.//Users')
const {handleUserDB, handleAllUserDB }= require('./handleUserDB')

//obtener usuario por id
async function userGetController(req,res) {
    try {     
        const {id} = req.query
        if(!id) throw Error('id is invalid')
        const user = await handleUserDB(Users,id)
        if(!user?.error){
            res.status(200).json(user)
        } else throw Error(user.error)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//obtener todos los usuarios
async function userGetAllController(req,res){
    try {     
        const user = await handleAllUserDB(Users)
        if(!user?.error){
            return res.status(200).json(user)
        } else throw Error(user.error)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//registro de usuario
async function userCreateController (req,res){

    try {
        const user = req.body;
        const newUser = await Users.create(user)
        return res.status(200).json(newUser)
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message)
    }
}

// logeo del usuario
async function userLoginController(req,res){
    try {
        const {email,password} = req.body
        const user = await Users.login(email,password)
        if(!user?.error){
            res.status(200).json({"user": user._id});
        }
        else
        throw Error(response.error)
    } catch (error) {
        res.status(404).json({"error": error.message})
    }
}

module.exports = {
    userGetController,
    userCreateController,
    userLoginController,
    userGetAllController
}