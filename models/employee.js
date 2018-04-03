const Sequelize = require('sequelize')

function getModel (sequelizeIns) {
  const Employee = sequelizeIns.define('Employee', {
    fullName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    internalEmail: {
      type: Sequelize.STRING,
      allowNull: false
    },
    personalEmail: {
      type: Sequelize.STRING,
      allowNull: false
    },
    personalPhone: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    position: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  return Employee

}


module.exports = getModel