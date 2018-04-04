const express = require('express')
const app = express()
const path = require('path')
const config = require('./config')
const models = require('./models')

if (process.env.NODE_ENV != 'production') {
  const cors = require('cors')
  app.use(cors())
}

app.get('/api/directory/list', (req, res) => {
  const defaultOptions = {
    include: { all: true }
  }
  models.employeeModel.findAndCountAll(defaultOptions)
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).send({err})
  })
})

app.get('/api/directory/:id', (req, res) => {
  models.employeeModel.findOne({
    where: {id: req.params.id},
    include:{all: true}
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.status(500).send({error: err})
  })
})

app.get('*', (req, res) => {
  res.send('<H1>Not found</h1>')
})


app.listen(config.appPort, _ => {
  console.log('Application runnning on port ', config.appPort)
})