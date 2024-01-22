const http = require('http');

http.createServer(( req, res ) => {
    // console.log( req.url );
    // res.write( 'Hello World!' );
    // res.end();
    if(req.url === '/'){

    }else{
        res.writeHead(404);
    }
}).listen( 3000, () => {
    console.log('server started!')
} );