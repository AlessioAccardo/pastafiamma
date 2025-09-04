const Admin = require('./admin');
const jwt = require('jsonwebtoken');

class AuthService {
    static async registerAdmin(adminData) {
        try {
            const existingAdmin = Admin.getByEmail(adminData.email);
            if (existingAdmin) throw new Error(`Email gia' in uso!`);

            const admin = Admin.createAdmin(adminData);
            const token = jwt.sign(
                { id: admin.id },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );

            return { admin, token };
        } catch (error) {
            console.log(error);
        }
    }


    static async loginAdmin(email, password) {
        try {
            const adminRecord = await Admin.getByEmail(email);
            if (!adminRecord) throw new Error(`Non esiste alcun utente con questa email`);
            
            const isMatch = await Admin.comparePassword(password, adminRecord.password);
            if (!isMatch) throw new Error(`Password errata`);         

            const { password: _, ...admin } = adminRecord;

            const token = jwt.sign(
                { id: adminRecord.id },
                process.env.JWT_SECRET,
                { expiresIn: '2h' }
            );

            return { admin, token };
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = AuthService;