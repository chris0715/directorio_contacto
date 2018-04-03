
const Sequelize = require('sequelize')

let sequelizeIns

function CreateConnection(dbConfig) {
    if (!sequelizeIns) {
        sequelizeIns = new Sequelize(dbConfig)
    }
    return sequelizeIns
}

module.exports = CreateConnection