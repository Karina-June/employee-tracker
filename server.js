const mysql = require("mysql2");
const inquirer = require("inquirer");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: process.env.db_user,
        password: process.env.db_password,
        database: 'track_db'
    },
    console.log("Connected to the database.")
);