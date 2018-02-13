module.exports = app => {
    app.get("/specialoffers/form", (req,res) => {
        let connection = app.services.ConnectionFactory();
        let productsDAO = new app.dao.ProductsDAO(connection);
        productsDAO.list((erros, resultados) => {
            res.render('specialoffers/form', {lista: resultados});
        });
        connection.end();
    });

    app.post("/specialoffers", (req,res) => {
        let promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('specialoffers/form');
    });
}