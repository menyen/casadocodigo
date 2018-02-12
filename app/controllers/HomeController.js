module.exports = app => {
    app.get('/', (req, res, next) => {
        var connection = app.services.ConnectionFactory();
        var productsDAO = new app.dao.ProductsDAO(connection);
        productsDAO.list((err, results) => {
            if(err) return next(err);
            res.render('home/index', {livros: results})
        });

        connection.end();
    });
}