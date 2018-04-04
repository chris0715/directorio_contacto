# Back-End

## Getting Started

##### information: this project is setup using node/expressJS and mysql. In order to run the project you will need to install both on your computer to be able to run it. 

Get NodeJS from [here](https://nodejs.org/en/)

You can also get mysql server from [here](https://www.mysql.com/downloads/)

#### before start:
make sure to config this project with your database connection information.. you can modify this in the project config.js file 

````
 dbconfig: {
      database: process.env.DB_NAME || 'YOUR_DB_NAME',
      username: process.env.DB_USER || 'YOUR_DB_USER',
      password: process.env.DB_PASS || "YOUR_DB_PASS",
      dialect: 'mysql',
      pool: {
        max: 10,
        min: 0,
        idle: 10000
      }
    },
````

###### Steps to run:

1. Open up a terminal in your prefered os and run the command `` git clone https://github.com/chris0715/directorio_contacto_backend.git ``
2. Once you have clone the project access the folder with a ``cd proyect_folder_name``
3. run the command ``npm install`` from terminal to install all required dependecies
4. make sure to create a database on mysql with the name you preferred and the one you put into the config file.
4. once all dependeciens are install from terminal run the command ``npm run dbsetup`` this will popluate the tables on your database and insert the required data from the xlsx file.
5. to run the application you can either run the command from terminal ``npm run dev`` or ``npm run start``

### Endpoints:

* Base url

	``localhost:3000`` this will only apply if running in development
    
    
    
 
 ##### Details:
 this will return the whole list of employee along with its position and deparment
 
 * URL
 
 	``/api/directory/list``
    
 * Method
 	
   ``GET``
 
 ##### Details:
 this will return a single entry or sigle record base on the number provided which represent the id of that record
 
  * URL
 
 	``/api/directory/1``
    
 * Method
 	
   ``GET``
 
