var h1= require("fs")

h1.writeFile('sample.js','console.log("Hello")',
                                    function(err){console.log("Done")})

h1.appendFile('sample.js','console.log("Hello 123")',
                            function(err){console.log("Hi in append")})

h1.readFile('sample.js','utf-8',function(err,data){console.log(  data)})

h1.unlink('sample.js',function(err){console.log("Hi i am in delete")})

