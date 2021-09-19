const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;

const cTable = require('console.table');

const inquirer = require('inquirer');
const fs = require('fs');


// Connect to mysql 2 database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password - empty 
    password: '',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the books_db database.`)
);

// console table test 
console.table([
  {
    name: 'foo',
    age: 10
  }, {
    name: 'bar',
    age: 20
  }
]);

// Query database

let deletedRow = 2;
let deletedRowTwo = 3;

db.query(`DELETE FROM favorite_books WHERE id = ? OR id = ?`, [deletedRow, deletedRowTwo], (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Query database
db.query('SELECT * FROM favorite_books', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Adds this info to another index page 

function writeUp(fileBody){
    fs.writeFile(" readme.txt ", fileBody , (err) => { 
        err? console.log (err) : console.log ("Write Up Complete")})
}

;

// Inquirer Prompts 
inquirer.prompt ([
    {
      type: 'input',
      name: 'title',
      message: 'Title of Repo:',
    },
    {
      type: 'input',
      message: 'Description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation Instructions:',
      name: 'install',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage Info:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Contribution Info:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Test Instructions:',
      },
      {
        type: 'list',
        message: 'Licence:',
        name: 'license',
        choices: ['MIT', 'GNU', 'NONE' ],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Github Page:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email Address: ',
      },

])
  .then ((responseObj) => {
    console.log(responseObj);
    let fileBody = `
    ${responseObj.title} 
    "Description: " ${responseObj.description}
    "Installation Instructions: "${responseObj.install} 
    "License: " ${responseObj.license}
    "Usage: " ${responseObj.usage}
    "Contribution: "${responseObj.contribution} 
    "Test Instructions: " ${responseObj.test}
    "Git Hub Page:" ${responseObj.github} 
    
    "Email Me At: "${responseObj.email}
    `; 
    
    writeUp(fileBody);

    });

