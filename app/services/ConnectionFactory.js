const Knex = require('knex');
let knex = null;

class ConnectionFactory {
    constructor() {
        throw new Error('Essa classe não pode ser instanciada.');
    }

    static getConnection() {
        if(!knex) {
            knex = Knex({
                client: 'mysql',
                connection: {
                    host: 'localhost',
                    user: 'ng',
                    password: '',
                    database: 'casadocodigo_nodejs' + (process.env.NODE_ENV == 'test' ? '_test' : '')
                },
                pool: {min: 0, max: 7}
            });
        }
        return knex;
    }
}

module.exports = () => {
    return ConnectionFactory.getConnection;
}