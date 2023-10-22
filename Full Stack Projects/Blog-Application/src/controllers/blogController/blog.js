
const addBlog = (req,res)=>{
    return res.render('addBlog',{
        user: req.user
    })
}

module.exports = addBlog;