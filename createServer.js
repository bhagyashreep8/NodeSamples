var http = require('http');
/* now the parameter of this create sever is taking one thing and thats
 request listener(this is what the code we want to run when user tries to connect to your website)
 and this function will return some webpage or some info from the data base to the client*/
function onRequest(request,response) {
console.log("a user made a request"+request.url);
response.writeHead(200,{"Content-Type":"text/plain"});
response.write("HERE IS YOUR RESPONSE!!!");
response.end();
}

http.createServer(onRequest).listen(8082);
//onRequest is the function which takes 2 parameters ;request and response
console.log("server is now running");