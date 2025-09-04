const AuthService = require('./authService');
const jwt = require('jsonwebtoken');

class AuthController {
    static async registerAdmin(req, res) {
        try {
            const { admin, token } = await AuthService.registerAdmin(req.body);
            res.status(201).json({
                success: true,
                data: admin,
                token  
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    static async loginAdmin(req, res) {
        try {
            const { email, password } = req.body;
            const { admin, token } = await AuthService.loginAdmin(email, password);

            res.json({
                success: true,
                data: admin,
                token
            });
        } catch (error) {
            res.status(401).json({
                success: false,
                message: error.message
            });
        }
    }
}

module.exports = AuthController;