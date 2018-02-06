module.exports = function(app) {
    app.get('/produtos', function (req, res) {
        var connection = app.infra.ConnectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(err, results) {
            res.render('produtos/lista', {'produtos': results});
        });

        connection.end();
    });
}