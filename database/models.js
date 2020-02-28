const db = require("./index");
module.exports = {
    readALL: (callback) => {
        db.query(`SELECT * FROM tennis;`, (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        });
    },
    addItems: ({name, amount}, callback) => {
        db.query(
            `INSERT INTO tennis (item_name, amount) VALUES ("${name}", ${amount});`,
            (err) => {
                if (err) {
                    callback(err);
                } else {
                    callback(null)
                }
            }
        );
    }
};