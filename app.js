const app = require('./config/express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('io', io);

app.listen(3000, () => {
    console.log('servidor de pé');
});