const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbFile = path.join(__dirname, 'database.sqlite');

const db = new sqlite3.Database(dbFile, (err) => {
    if (err) {
        console.log(`Errore nella connessione al database`);
        return;
    }

    db.serialize(() => {
        db.run('PRAGMA foreign_keys = ON;', (err) => {
            if (err) {
                console.log(`ERRORE NELL'ATTIVAZIONE DELLE FOREIGN KEYS`);
            } else {
                console.log(`FOREIGN KEYS ATTIVATE`);
            }
        });

        db.run(`CREATE TABLE IF NOT EXISTS admins (
                id PRIMARY KEY AUTOINCREMENT,
                first_name VARCHAR(45) NOT NULL,
                last_name VARCHAR(45) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL
            )
        `);

        db.run(`CREATE TABLE IF NOT EXISTS menu (
                id PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255),
                price DECIMAL(8,2),
                category VARCHAR(45)
            )
        `);
    })
})


module.exports = db;