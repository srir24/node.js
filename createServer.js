var h1=require('http')

h1.createServer(function(req,res){
    res.write("Hello")
    res.end()
    }).listen(8010)

