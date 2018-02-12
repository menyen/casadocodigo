let mysql = require('mysql');

class ConnectionFactory {
    constructor() {
        throw new Error('Essa classe não pode ser instanciada.');
    }

    static getConnection() {
        let database = 'casadocodigo_nodejs';
        if(process.env.NODE_ENV == 'test') database += '_test';
        return mysql.createConnection({
            host : 'localhost',
            user : 'ng',
            password : '',
            database : database
        });
    }
}

module.exports = () => {
    return ConnectionFactory.getConnection;
}