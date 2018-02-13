class ProdutosDAO {
    constructor(connection) {
        this._connection = connection;
    }

    list(callback) {
        this._connection
            .select()
            .from('produtos')
            .asCallback(callback);
    }

    save(product, callback) {
        this._connection
            .insert(product)
            .into('produtos')
            .then(callback());
    }
}

module.exports = () => {
    return ProdutosDAO;
}