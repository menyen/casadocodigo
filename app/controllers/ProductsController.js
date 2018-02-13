module.exports = app => {
    app.get('/products', (req, res, next) => {
        let connection = app.services.ConnectionFactory();
        let productsDAO = new app.dao.ProductsDAO(connection);
        productsDAO.list((err, results) => {
            if(err) return next(err);
            res.format({
                html: () => res.render('products/list', {produtos: results}),
                json: () => res.json(results)
            });
        });

        //connection.end();
    });

    app.get('/products/form', (req, res) => {
        res.render('products/form', { validationErrors: {}, produto: {} });
    });

    app.post('/products', (req, res, next) => {
        let product = req.body;

        req.assert('titulo', 'Titulo obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        let errors = req.validationErrors();
        if(errors) {
            res.format({
                html: () => res.status(400).render('products/form', { validationErrors: errors, produto: product }),
                json: () => res.status(400).json(errors)
            });
            
            return;
        }

        let connection = app.services.ConnectionFactory();
        let productsDAO = new app.dao.ProductsDAO(connection);
        productsDAO.save(product, (err, results) => {
            if(err) return next(err);
            res.redirect('/products');
        });

        //connection.end();
    });
}