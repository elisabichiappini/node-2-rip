const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 'NESSUNA PORTA';
const host = process.env.HOST || 'nessun hosting';

const body = process.env.BODY || '<h1>body non trovato</h1>';
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end(body);
}).listen(port, host, () => {
    console.log(`Server attivato su http://${host}:${port}`)
});