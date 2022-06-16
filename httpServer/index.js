const http = require('http');
const server = http.createServer((req,res) => {
    if (req.url == '/'){
        res.end('hellow from other side zabi');
    }
    else if (req.url == '/about'){
        res.end('hellow from aboutus side zabi');
    }else{
        res.writeHead('404', {'content-type' : 'text.html '})
        res.end('<h1> page not found </h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listning to port 8000');
});