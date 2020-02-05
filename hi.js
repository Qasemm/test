const http = require('http');

const fs = require('fs');

const hostname = "127.0.0.1"
const port = 3000;

//display text in browser//
// const server  = http.createServer((req,res)=>{


//         res.setStatusCode=200;
//         res.setHeader('Content-Type','text/plain');
//         res.write(data);
//         res.end('helloin browser');

// });
/////////////////////////////////////////////////////////////////
//read file 
// const server  = http.createServer((req,res)=>{

//     fs.readFile('inder.html',(err,data)=>{
//         res.setStatusCode=200;
//         res.setHeader('Content-Type','text/html');
//         res.write(data);
//         res.end();
//     })
// });

//////////////////////////////////////////////////////////////

function route(page, res) {
    fs.readFile(page,(err,data)=>{
        res.setStatusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    })
   
}

const server = http.createServer((req, res) => {
    page = req.url;

    switch (page) {
        case '/':
            route('inder.html', res)
            break;

        case '/content':
            route('content.html', res)
            break;

        case '/about':
            route('about.html', res)
            break;
        default:
            route('inder.html', res)
            break;
    }

});








server.listen(port, hostname, () => {
    console.log('Server is ruuning on port ' + port);
})