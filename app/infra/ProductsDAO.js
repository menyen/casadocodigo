class ProdutosDAO {
    constructor(connection) {
        this._connection = connection;
    }

    list(callback) {
        this._connection.query('select * from produtos', callback);
    }

    save(product, callback) {
        this._connection.query('insert into produtos set ?', product, callback);
    }
}

module.exports = () => {
    return ProdutosDAO;
}