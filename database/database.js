//establish a mysql connection
const mysql = require('mysql');

const connection =  mysql.createConnection({
    host: process.env.MYSQLI_HOST,
    user: process.env.MYSQLI_USERNAME,
    password: process.env.MYSQLI_PASSWORD,
    port: process.env.MYSQLI_PORT
})

connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
}
);


module.exports = connection;