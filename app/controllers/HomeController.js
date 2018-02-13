module.exports = app => {
    app.get('/', (req, res, next) => {
        let connection = app.services.ConnectionFactory();
        let productsDAO = new app.dao.ProductsDAO(connection);
        productsDAO.list((err, results) => {
            if(err) return next(err);
            res.render('home/index', {livros: results})
        });

        connection.end();
    });
}