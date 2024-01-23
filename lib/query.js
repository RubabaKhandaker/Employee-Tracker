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

        'INSERT INTO department SET ?',
        {

            name: departmentName

        });

    conn.release();

    return rows;
}

async function departmentRead() {
    const conn = await myPool.getConnection();
    let [rows, fields] = await conn.query(
        'SELECT * FROM department');

    conn.release();

    console.table('\n',rows);
    return rows;
}


async function roleAdd(title, salary, depID) {
    const conn = await myPool.getConnection();
    let [rows, fields] = await conn.query(

        'INSERT INTO role SET ?',
        {

            title: title,
            salary: salary,
            department_id: depID

        });

    conn.release();

    return rows;
}

async function roleRead() {
    const conn = await myPool.getConnection();
    let [rows, fields] = await conn.query(
        'SELECT * FROM role');

    conn.release();

    console.table('\n',rows);
    return rows;
}


async function employeeAdd(firstName, lastName, roleID, managerID) {
    const conn = await myPool.getConnection();
    let [rows, fields] = await conn.query(

        'INSERT INTO employee SET ?',
        {

            first_name: firstName,
            last_name: lastName,
            role_id: roleID,
            manager_id: managerID

        });

    conn.release();

    return rows;
}

async function employeeRead() {
    const conn = await myPool.getConnection();
    let [rows, fields] = await conn.query(
        'SELECT * FROM employee');

    conn.release();

    console.table('\n',rows);
    return rows;
}


module.exports = {
    departmentAdd,
    departmentRead,
    roleAdd,
    roleRead,
    employeeAdd,
    employeeRead
}