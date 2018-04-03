const express = require('express')
const app = express()
const config = require('./config')
const sequelizeIns = require('./sequelizeIns')(config.dbconfig)

app.get('/api/list', (req, res) => {
  
})

app.listen(config.appPort, _ => {
  console.log('Application runnning on port ', config.appPort)
})

sequelizeIns.authenticate()
.then( _ => console.log('It was connected'))