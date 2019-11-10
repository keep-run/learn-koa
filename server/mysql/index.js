const mysql = require('mysql');
const config = require('../config/index.js')

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

class Mysql {
    query() {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    return reject(err);
                } else {
                    connection.query('SELECT * from test1', function (error, results, fields) {
                        connection.release()
                        if (error) {
                            reject(error)
                        };
                        resolve(results)
                    });
                }
            })

        })

    }
}

module.exports = new Mysql()