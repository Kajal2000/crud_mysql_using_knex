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
app.delete('/api',(req,res) => {
    var family_data = {
        MOTHER_NAME  : req.body.MOTHER_NAME,
        FATHER_NAME : req.body.FATHER_NAME,
        STUDENT_NAME : req.body.STUDENT_NAME,
        AGE : req.body.AGE,
        ADRESS : req.body.ADRESS ,
        EMAIL_ID : req.body.EMAIL_ID 
    }
    knex('family')
        .where({ID:req.body.ID})
        .del(family_data).then((data) => {
            Console.log("delete ho gya")
    })
})
app.listen(8003,function(){
    console.log("Started on PORT 8003");
});
