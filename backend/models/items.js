const db = require('../db/database');


class Items {
    static async createItem(name, description, price, category) {
        return new Promise((resolve, reject) => {
            db.run(`
                INSERT INTO menu (name, description, price, category) VALUES (?,?,?,?)`,
                [name, description, price, category],
                function(err) {
                    if (err) return reject(err);
                    resolve({ id: this.lastID, name, description, price, category});
                }
            );
        });
    }

    static async getAllByCategory(category) {
        db.all(`
            SELECT * FROM menu WHERE category = ?`,
            [category],
            (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            }
        );
    }

    static async modifyItem() {}
}