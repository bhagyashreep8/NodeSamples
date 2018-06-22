//apart from costumized modules we have some core modules where we dont have to give the path while importing
//ine of the example is file system

// var fs = require('fs');
// fs.writeFileSync("myFirstFile.txt","hi iam inside new file");
//
//
// //reading contents from the file
// console.log(fs.readFileSync("myFirstFile.txt").toString());

var path = require('path');
var website = "desktop/myDocs///myFile.txt";
var websitAbout = "desktop/myPath/about.html"
console.log(path.normalize(website));
console.log(path.dirname(websitAbout));
console.log(path.basename(websitAbout));
console.log(path.extname(websitAbout));


console.log(__dirname);
console.log(__filename);


