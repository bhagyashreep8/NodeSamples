
var path = require('path');
var website = "desktop/myDocs///myFile.txt";
var websitAbout = "desktop/myPath/about.html"
console.log(path.normalize(website));
console.log(path.dirname(websitAbout));
console.log(path.basename(websitAbout));
console.log(path.extname(websitAbout));


console.log(__dirname);
console.log(__filename);


