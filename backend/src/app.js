const express = require('express') //importacao do pacote
const app = express() //instanciando express
const cors = require('cors')
const calls = require('./calls')

app.use(cors())

app.get('/', async function (req, res) {
    res.send(await calls.testConnection())
})
app.get('/json/', async function (req, res) {
    res.send(await calls.insertJSON())
})
app.get('/sql/',async function (req, res) {
    res.send(await calls.insertSQL())
})

app.listen(process.env.PORT || 3000, () => {
    console.info(`service online\n`);
   }); //execucao do servidor
