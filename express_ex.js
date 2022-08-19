const express = require('express')
const app = express()

app.listen(3000)

app.get('/', function (req, res) {
  res.sendFile("./html_pages/index1.html",{root: __dirname})
  //res.send('<h1>Home page1</h1>')
  //res.send('Hello World')
})

app.get('/about', function (req, res) {
  res.sendFile("./html_pages/about.html",{root: __dirname})
 // res.send('<h1>Home page1</h1>')
  //res.send('Hello World')
})
//Redirect -- and automatically sets the statuscode
app.get('/about-me', function (req, res) {
  res.redirect("/about")
})

app._router.use((req,res)=>{
  //Setting the status
  res.status(404).sendFile("./html_pages/404.html",{root: __dirname})
  //res.sendFile("./html_pages/404.html",{root: __dirname})
})
