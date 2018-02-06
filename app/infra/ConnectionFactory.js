let mysql = require('mysql');

class ConnectionFactory {
    constructor() {
        throw new Error('Essa classe não pode ser instanciada.');
    }

    static getConnection() {
        return mysql.createConnection({
            host : 'localhost',
            user : 'ng',
            password : '',
            database : 'casadocodigo_nodejs'
        });
    }
}

module.exports = () => {
    return ConnectionFactory.getConnection;
}