var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProductsController', () => {

    afterEach(done => {
        var conn = express.services.ConnectionFactory();
        conn.query("delete from produtos", (err, result) => {
            if(!err) {
                conn.end();
                done();
            }
        });
    });
    
    it('listing products in json', done => {
        request.get('/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('listing products in html', done => {
        request.get('/products')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });

    it('register new product with invalid arguments', done => {
        request.post('/products')
            .send({titulo: "", descricao: "new book"})
            .expect(400, done);
    });

    it('register new product with valid arguments', done => {
        request.post('/products')
            .send({titulo: "title", descricao: "new book", preco: 12.56})
            .expect(302, done);
    });
});