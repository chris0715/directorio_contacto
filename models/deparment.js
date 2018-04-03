const Sequelize = require('sequelize')

function getModel (sequelizeIns) {
  const department = sequelizeIns.define('Department', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  })

  return department

}


module.exports = getModel