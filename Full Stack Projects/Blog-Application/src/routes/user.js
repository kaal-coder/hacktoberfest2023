const { Router } = require('express');
const signIn = require('../controllers/authController/signIn');
const signUp = require('../controllers/authController/signUp');
const register = require('../controllers/authController/register');
const login = require('../controllers/authController/login.js');
const logout = require('../controllers/authController/logout');

const router = Router();

router.get('/signin', signIn);
router.get('/signup', signUp);
router.post('/signup', register);
router.post('/signin', login);
router.get('/logout', logout);
router.get('/blog');
module.exports = router;
