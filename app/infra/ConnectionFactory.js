var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'ng',
        password : '',
        database : 'casadocodigo_nodejs'
    });
}

module.exports = function() {
    return createDBConnection;
}