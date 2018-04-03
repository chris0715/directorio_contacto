const config = require('../config')
const sequelizeIns = require('../lib/sequelizeIns')(config.dbconfig)
const employeeModel = require('./employee')(sequelizeIns)
const deparmentModel = require('./deparment')(sequelizeIns)

employeeModel.belongsTo(deparmentModel)

module.exports = {
    employeeModel,
    deparmentModel
}