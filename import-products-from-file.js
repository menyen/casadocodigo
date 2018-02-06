var http = require('http');

var options = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

var client = http.request(options, res => {
    console.log(res.statusCode);
    res.on('data', body => {
        console.log('body: ' + body);
    });
});

var produto = {
    titulo: '',
    descricao: 'teste teste test',
    preco: 12.90
}

client.end(JSON.stringify(produto));