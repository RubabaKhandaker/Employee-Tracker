const mySql = require('mysql2/promise');

const myPool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employees_db'
});

async function departmentAdd(departmentName) {
    const conn = await myPool.getConnection();
    let [rows, fields] = await conn.query(

        'INSERT INTO departments SET ?',
        {

            name: departmentName

        });

    conn.release();

    return rows;
}


async function roleAdd(title, salary, depID) {
    const conn = await myPool.getConnection();
    let [rows, fields] = await conn.query(

        'INSERT INTO roles SET ?',
        {

            title: title,
            salary: salary,
            department_id: depID

        });

    conn.release();

    return rows;
}


async function employeeAdd(firstName, lastName, roleID, managerID) {
    const conn = await myPool.getConnection();
    let [rows, fields] = await conn.query(

        'INSERT INTO employees SET ?',
        {

            first_name: firstName,
            last_name: lastName,
            role_id: roleID,
            manager_id: managerID

        });

    conn.release();

    return rows;
}


module.exports = {
    departmentAdd,
    roleAdd,
    employeeAdd
}