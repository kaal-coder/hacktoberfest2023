const express = require('express');
const router = express.Router(),
       path = require('path') ;


       router.get('/',(req,res)=>{
              res.sendFile('/index.html', { root: path.join(__dirname, '../pages') });    
          });
          
          router.get('/registerFir',(req,res)=>{
              res.sendFile('/register_fir.html',{ root: path.join(__dirname, '../pages') })
          })

          router.get('/userDetails',(req,res)=>{
              res.sendFile('/mainpage.html',{ root: path.join(__dirname, '../pages') })
          })

          router.get('/admin',(req,res)=>{
              res.sendFile('/admin.html',{ root: path.join(__dirname, '../pages') })
          })

          router.get('/verification',(req,res)=>{
              res.sendFile('/admin_verification.html',{ root: path.join(__dirname, '../pages') })
          })

          router.get('/police',(req,res)=>{
              res.sendFile('/police.html',{ root: path.join(__dirname, '../pages') })
          })

          router.get('/login',(req,res)=>{
            res.sendFile('/login.html',{ root: path.join(__dirname, '../pages') })
        })

        router.get('/criminal',(req,res)=>{
            res.sendFile('/criminal.html',{ root: path.join(__dirname, '../pages') })
        })

module.exports=router;