import mysql2 from "mysql2"

var con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "@Lethebao2507",
    database: "demo",
    port: 3306
});

con.connect((err) => {
    if (err) {
        console.error('Error is connect to database:', err);
        return;
    }
    console.log('Connect database successfully!');
});

export default con