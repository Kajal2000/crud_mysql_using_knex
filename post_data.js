const express = require('express');
const app = express();
const mysql = require("mysql")
const knex = require("./connect_table.js")
const bodyParser = require("body-parser");
app.use(bodyParser.json())

const options = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'NAVGURUKUL1',
        database: 'family_information'
    })

options.connect((err) =>{
    if (!err)
        console.log("db connect")
    else
        console.log("not connect")
}) 
// var knex = require('knex')(options)
app.post('/api',(req,res) => {
    const family_data = {
        ID : req.body.ID,
        MOTHER_NAME  : req.body.MOTHER_NAME,
        FATHER_NAME : req.body.FATHER_NAME,
        STUDENT_NAME : req.body.STUDENT_NAME,
        AGE : req.body.AGE,
        ADRESS : req.body.ADRESS ,
        EMAIL_ID : req.body.EMAIL_ID 
    }
    knex('family').insert(family_data).then(()=>{
        Console.log("data insert ho gya")
    })
    // .catch((err) => {
    //     console.log("there is somthing wrong",err);
    // })
})
app.listen(8005,function(){
    console.log("Started on PORT 8005");
});