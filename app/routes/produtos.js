module.exports = function(app) {
    app.get('/produtos', function (req, res) {
        console.log('pegando lista de produtos');
        res.render('produtos/lista');
    });
}