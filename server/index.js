const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const cors = require('cors')
require('dotenv').config()
const app = express()
const controller = require('./controller')

app.use(bodyParser.json())
massive(process.env.CONNECTIONSTRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
})
app.get('/api/getSkate', controller.getSkate)

port= 3001
app.listen(port, ()=>{console.log(`listening on ${port}`)})