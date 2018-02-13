const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = () => {
    const app = express();

    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressValidator());

    consign({ cwd: 'app' })
        .include('controllers')
        .then('services')
        .then('dao')
        .into(app);

    app.use((req, res, next) => {
        res.status(404).render('errors/404');
        next();
    });

    app.use(function (error, req, res, next) {
        if(process.env.NODE_ENV == 'production') {
            res.status(500).render('error/500');
            return;
        }
        next(error);
    });

    return app;
}