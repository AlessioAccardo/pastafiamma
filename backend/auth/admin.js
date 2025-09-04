const db = reuqire('../db/database');
const bcrypt = require('bcrypt');


class Admins {
    static async createAdmin(firstName, lastName, email, password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO admins (first_name, last_name, email, password) VALUES (?,?,?,?)`,
                [firstName, lastName, email, hashedPassword],
                function(err) {
                    if (err) return reject(err);
                    resolve({ id: this.lastID, firstName, lastName, email });
                }
            );
        });
    }

    static async getByEmail(email) {
        return new Promise((resolve, reject) => {
            db.get(`SELECT email FROM admins WHERE email = ?`,
                [email],
                (err, row) => {
                    if (err) return reject(err);
                    resolve(row);
                }
            );
        });
    }

    static async comparePassword(candidatePassword, hash) {
        return await bcrypt.compare(candidatePassword, hash);
    }
}

module.exports = Admins;