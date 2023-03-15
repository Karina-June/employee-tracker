const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
require("dotenv").config();

//connection to the db
const db = mysql.createConnection(
    {
        host: "localhost",
        user: process.env.db_user,
        password: process.env.db_password,
        database: "employee_tracker_db"
    }
);

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database.");
    startFirstPrompt();
})

const startFirstPrompt = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "userSelect",
                message: "What would you like to do?",
                choices: [
                    "View All Employees",
                    "Add Employee",
                    "View All Roles",
                    "Add Role",
                    "View All Departments",
                    "Add Department"]
            }
        ]) 
        .then((response) => {
            switch (response.userSelect) {
                case "View All Employees":
                    viewAllEmployee();
                    break;
                case "Add Employee":
                    break;
                case "View All Roles":
                    viewAllRole();
                    break;
                case "Add Role":
                    break;
                case "View All Departments":
                    viewAllDept();
                    break;
                case "Add Department":
                    break;
            }
        })
};

//path to display all the employees
const viewAllEmployee = () => {
    let employee = "SELECT * FROM employee"
    db.query(employee, (err, rows) => {
        if (err) throw err;
        console.log(rows);
    })
};
//path to display all the roles
const viewAllRole = () => {
    let role = "SELECT * FROM role"
    db.query(role, (err, rows) => {
        if (err) throw err;
        console.log(rows);
    })
};
//path to display all the departments
const viewAllDept = () => {
    let dept = "SELECT * FROM department"
    db.query(dept, (err, rows) => {
        if (err) throw err;
        console.log(rows);
    })
};


