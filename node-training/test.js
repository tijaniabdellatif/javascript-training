//console.log("Hello world");
//console.log(3+2);

var fs = require("fs");
 fs.writeFile(__dirname + "/index.html","<h1>interaction avec le systeme</h1>",function(error){
  if(error)
  {
      return console.log(error);
  }

  else {

    return console.log("Bienvenue !!");
  }


 });