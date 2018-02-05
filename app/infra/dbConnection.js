var mysql = require('mysql');

module.exports = function() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'ng',
        password : '',
        database : 'casadocodigo_nodejs'
    });
}