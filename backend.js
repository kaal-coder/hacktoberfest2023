const express = require('express');
const authRouter = express.Router();
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const JWT_KEY = require('secret.js');

authRouter
    .route('/signup')
    .get(middleware1, getSignup, middleware2)
    .post(postSignup);

authRouter
    .route('/login')
    .post(loginUser);


function middleware1(req, res, next) {
    console.log('Middleware encountered.');
    next();
}
function middleware2(req, res) {
    console.log('Middleware2 encountered');
    res.sendFile('/public/signup.html', { root: __dirname });
    console.log('res/res cycle completed');
}

function getSignup(req, res, next) {
    console.log('Getsignup encountered');
    next();//to call the next
}

async function postSignup(req, res) {
    let objData = req.body;
    let user = await userModel.create(objData);
    // console.log(user);
    res.json({
        message: "User signed up"
    });
}

async function loginUser(req, res) {
    try {
        let obj = req.body;
        let userPassword = obj.password;
        if (obj.email) {
            let user = await userModel.findOne({ email: obj.email });
            if (user) {
                // userPassword(string) but user.password(hashed) so use bcrypt's compare function
                // therefore we will not use bcrypt in this project.
                if (userPassword == user.password) {
                    let uid = user['_id'];
                    let token = jwt.sign({ payload: uid }, JWT_KEY);// to create signature. and jwt will contain header payload and signature.
                    res.cookie('login', token, { httpOnly: true });  //now we will use jwt for authentication // rather than using cookies.
                    return res.json({
                        message: "User login successfull",
                        data: obj
                    })
                }
                else {
                    return res.json({
                        message: "Wrong credentials",
                        data: obj
                    })
                }
            }
            else {
                return res.json({
                    message: "User not found",
                    data: obj
                })
            }
        }
        else {
            res.json({
                message: "Empty field found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
module.exports = authRouter;
