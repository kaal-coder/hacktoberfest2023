const User = require('../../models/user')

const register = async(req,res)=>{
    const {fullName,email,password} = req.body; 
    await User.create({
        fullName,
        email,
        password
    });
    return res.redirect('/user/signin')
}

module.exports = register;
