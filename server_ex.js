const fs = require('fs')
var h1=require('http')

const var1=h1.createServer(function(req,res){
console.log(req.url,req.method)
/*res.setHeader('content-type','text/plain')
res.write("Hello")
res.end()*/

/*res.setHeader('content-type','text/html')
res.write('<head><link rel="StyleSheet" href="#"> </head>')
res.write("<h1>Hello</h1>")
res.end()*/

res.setHeader('content-type','text/html')
fs.readFile("./html_pages/index1.html",(err,data)=>{
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
