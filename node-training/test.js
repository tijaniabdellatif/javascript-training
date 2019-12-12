//console.log("Hello world");
//console.log(3+2);

 var fs = require("fs");
var https = require('https');
 fs.writeFile(__dirname + "/index.html","<h1>interaction avec le systeme</h1>",function(error){
  if(error)
  {
      return console.log(error);
  }

  else {

    return console.log("Bienvenue !!");
  }
 });

 let myphoto="https://raw.githubusercontent.com/tijaniabdellatif/images/master/Web-Designing-Training.jpg";

 https.get(myphoto,function(response){
  
response.pipe(fs.createWriteStream(__dirname + "/image2.jpg"));

 });


