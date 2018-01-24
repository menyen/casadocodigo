var app = require('./config/express')();

require('./app/routes/produtos')(app);

app.listen(3000, function () {
    console.log('servidor de pé');
});