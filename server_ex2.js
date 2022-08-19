const fs = require('fs')
var h1=require('http')

const var1=h1.createServer(function(req,res){
console.log(req.url,req.method)
//res.write("Hello")
res.setHeader('content-type','text/html')

//Routing
let path="./html_pages/"
switch(req.url){
  case "/":
    path+="index1.html"
    res.statusCode=200
    break
  case "/about":
    path+="about.html"
    res.statusCode=200
    break
  case "/about-sri": //REdirect - about-sri ==> about
      res.statusCode=301
      res.setHeader('Location','/about')
      res.end()
      break
  default:
    path+="404.html"
    res.statusCode=404
  }
fs.readFile(path,(err,data)=>{
  if(err){
    console.log(err)
    res.write(err)
    res.end()
  }
  else{
    /*res.write(data)
    res.end()*/
    res.end(data)
  }
})
//res.end()
    })
  var1.listen(8010,'localhost',()=>{
      console.log("Listening on port 8010")
    })
