const dbConfig = require('./config').dbconfig
const sequelizeIns = require('./lib/sequelizeIns')(dbConfig)
const Models = require('./models')
const xlsx = require('xlsx-to-json')
const fs = require('fs')

async function processDb() {

  try {
    await sequelizeIns.sync({force: true})
    console.log('Sucessfully created database tables')
  } catch(e) {
    console.log('unable to create db tables', e)
    process.exit(1)
  }

  xlsx({
    input:  `${__dirname}/directory.xlsx`,
      output: null
  }, async (err, result) => {
      if (err) {
          console.log('There was an error ', err)
          process.exit(1)
      }
      
      for (let data of result) {
       await Models.deparmentModel.findOrCreate({
            where: {name: data['Departamento'] }
        })
    }

      for (let data of result) {
        console.log(result)
        const dp = await Models.deparmentModel.findOne({
          where: {name: data['Departamento'] }
        })
          Models.employeeModel.create({
              fullName: data['Nombre completo'],
              internalEmail: data['Email de la empresa'],
              personalEmail: data['Email personal'],
              personalPhone: data['Celular personal'],
              position: data['Posición'],
              DepartmentId: dp.id
              
          })
      }
  })
}

processDb()
