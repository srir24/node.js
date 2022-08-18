var h1= require("fs")

h1.writeFile('sample.js','console.log("Hello")',
                                    function(err){console.log("Done")})

h1.appendFile('sample.js','console.log("Hello 123")',
                            function(err){console.log("Hi in append")})


//Reading file Option-1
h1.readFile('sample.js','utf-8',function(err,data){console.log(data)})

//Reading file Option-2
h1.readFile('sample.js',function(err,data){
  if(err){
    console.log(err)
  }
  console.log(data)
})

//Reading file Option-2
h1.readFile('sample.js',(err,data)=>{
  if(err){
    console.log(err)
  }
  console.log(data)
})


//Folder/Directory creation and deletion
if(!h1.existsSync("./test"))
  h1.mkdir("./test",(err)=>{
  if(err){ 
console.log(err)
  }
  console.log("Folder created")
})
else{
  h1.rmdir("./test",(err)=>{
    if(err){
      console.log(err)
    }
  })
  console.log("Folder removed")
}

//Removing/Deleting the file
if(h1.existsSync("./sample.js")){
    h1.unlink('sample.js',function(err){
    if(err){
      console.log(err)
    }
    console.log("File removed")
  })

