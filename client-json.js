let http = require('http');

let options = {
    hostname: 'localhost',
    port: 3000,
    path: '/products',
    headers: {
        'Accept': 'application/json'
    }
}

http.get(options, (res) => {
    console.log(res.statusCode);
    res.on('data', function (body) {
        console.log('body: ' + body);
    });
});