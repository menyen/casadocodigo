module.exports = function (app) {
    app.get('/products', (req, res) => {
        var connection = app.infra.ConnectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);
        productsDAO.list((err, results) => {
            res.format({
                html: () => res.render('products/list', {lista: results}),
                json: () => res.json(results)
            });
        });

        connection.end();
    });

    app.get('/products/form', (req, res) => {
        res.render('products/form', { validationErrors: {}, produto: {} });
    });

    app.post('/products', (req, res) => {
        var product = req.body;

        req.assert('titulo', 'Titulo obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        var errors = req.validationErrors();
        if(errors) {
            res.format({
                html: () => res.status(400).render('products/form', { validationErrors: errors, produto: product }),
                json: () => res.status(400).json(errors)
            });
            
            return;
        }

        var connection = app.infra.ConnectionFactory();
        var productsDAO = new app.infra.ProductsDAO(connection);
        productsDAO.save(product, (err, results) => {
            res.redirect('/products');
        });

        connection.end();
    });
}