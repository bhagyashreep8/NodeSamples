var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

//Array of mimetypes
var mimeTypes = {
    "html" : "text/html",
    "jpeg" : "image/jpeg",
    "jpg" : "image/jpeg",
    "png" : "image/png",
    "js"  : "text/javascript",
    "css"  :"text/css"
};

//create server
http.createServer(function (req,res) {
   const uri = url.parse(req.url).pathname;
   const fileName = path.join(process.cwd(),unescape(uri))//process.cwd returns the current working directory of the process
    console.log('loading'+ uri);
    var stat;

    try{
        stat = fs.lstatSync(fileName);
    }catch (e){
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.write('404 not found');
        res.end();
        return;
}

//check if file/directory

    if(stat.isFile()){
        var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
        res.writeHead(200,{'Content-Type': mimeType});
        var fileStream = fs.createReadStream(fileName);
        fileStream.pipe(res);
    }else if(stat.isDirectory()){
res.writeHead(302,{
    'Location': 'index.html'
});
res.end();
    }else {
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.write('500 internal server error');
        res.end();
    }
}).listen(8082);