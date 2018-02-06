module.exports = function (app) {
    app.get('/products', (req, res) => {
        var connection = app.infra.ConnectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);
        productsDAO.list(function (err, results) {
            res.format({
                html: () => res.render('products/list', {lista: results}),
                json: () => res.json(results)
            });
            res.render('products/list', { 'produtos': results });
        });

        connection.end();
    });

    app.get('/products/form', (req, res) => {
        res.render('products/form');
    });

    app.post('/products', (req, res) => {
        var product = req.body;
        var connection = app.infra.ConnectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);
        productsDAO.save(product, function (err, results) {
            res.redirect('/products');
        });

        connection.end();
    });
}