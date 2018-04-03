module.exports = {
    dbconfig: {
      database: process.env.DB_NAME || 'your_DBNAME',
      username: process.env.DB_USER || 'YOUR_USER',
      password: process.env.DB_PASS || "YOUR_PASS!",
      dialect: 'mysql',
      pool: {
        max: 10,
        min: 0,
        idle: 10000
      }
    },
    appPort: process.env.PORT || 3000
}