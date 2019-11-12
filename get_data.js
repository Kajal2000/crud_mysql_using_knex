const express = require('express');
const app = express();
const mysql = require("mysql")
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'NAVGURUKUL1',
        database: 'family_information'
    }
}
var knex = require('knex')(options)

app.get('/api',(req,res) => {
    knex.select("*").from('family').then((connection)=>{
        res.json(connection)
    })
    .catch((err) => {
        console.log("there is somthing wrong",err);
      })
})
app.listen(8006,function(){
    console.log("Started on PORT 8006");
});