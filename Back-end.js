const express = require('express') 
const bodyParser =require('body-parser')
const mysql =require('mysql')  
const Connection = require('mysql/lib/Connection')
const app = express()
const port = 1211

const con =mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database: "databases"
})
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))  
var obJ ={}


app.get("/",(req,res) =>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        console.log("connected id:" ,connection.threadId)
        connection.query('SELECT * FROM award016march',(err,rows)=>{
        connection.release();
        if(err){
            console.log(err)
        }    
        else{
            obJ = {Error: err,award16march: rows}
            res.render('index',obJ)
        }

        })
    })
}) 

app.get("/credit.ejs",(req,res) =>{
    res.render('credit')
}) 

app.get("/otherprizes.ejs",(req,res) =>{
    res.render('otherprizes')
}) 

app.get("/award1april.ejs",(req,res) =>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        console.log("connected id:" ,connection.threadId)
        connection.query('SELECT * FROM award01april',(err,rows)=>{
        connection.release();
        if(err){
            console.log(err)
        }    
        else{
            obJ = {Error: err,award01april: rows}
            res.render('award1april',obJ)
        }

        })
    })
}) 

app.get("/award16april.ejs",(req,res) =>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        console.log("connected id:" ,connection.threadId)
        connection.query('SELECT * FROM award016april',(err,rows)=>{
        connection.release();
        if(err){
            console.log(err)
        }    
        else{
            obJ = {Error: err,award016april: rows}
            res.render('award16april',obJ)
        }

        })
    })
}) 

app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})