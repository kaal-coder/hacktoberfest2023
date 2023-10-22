
const logout = (req,res)=>{
    res.clearCookie('token').redirect('/')
}

module.exports = logout;