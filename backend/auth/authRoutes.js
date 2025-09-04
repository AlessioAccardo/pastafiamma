const express = require('express');
const router = express.Router();
const AuthController = require('./authController');
const { registerValidator, loginValidator, validate } = require('./authValidator');


router.post('/register', registerValidator, validate, AuthController.registerAdmin);

router.post('/login', loginValidator, validate, AuthController.loginAdmin);
