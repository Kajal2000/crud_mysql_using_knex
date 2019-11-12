var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'NAVGURUKUL1',
        database: 'family_information'
    },
    useNullAsDefault: true
})
module.exports = knex;

knex.schema.hasTable('family').then ((exists) => {
    if (!exists){
        return knex.schema.createTab("family", (table) => {
            table.increments('ID')
            table.string('MOTHER_NAME')
            table.string('FATHER_NAME')
            table.string('STUDENT_NAME')
            table.string('AGE')
            table.string('ADRESS')
            table.string('EMAIL_ID')
        })
        .catch((err) => {
            console.log(err,"kyajasj")
        })
    }
    return console.log("success")
})

    