const express = require('express') 
const bodyParser =require('body-parser')
const mysql =require('mysql')  
const app = express()
const port = 1211

const con =mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "databases"
})

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))  



app.get("/",(req,res) =>{
    res.render('index')
}) 

app.get("/credit.ejs",(req,res) =>{
    res.render('credit')
}) 

app.get("/otherprizes.ejs",(req,res) =>{
    res.render('otherprizes')
}) 

app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})