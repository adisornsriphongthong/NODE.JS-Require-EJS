const express = require('express');
const app = express();
const mysql = require('mysql2/promise')

app.use(express.static('public'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pim_database'
})

app.set('view engine', 'ejs');
// Mock database query
const getUsers = () => {
    return [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ];
};
app.get('/', async (req, res) => {
    const result = await connection.query('SELECT * FROM students');
    const users = getUsers(); // Replace this with your database query

    console.log(result)
    res.json(result)
    res.render('index', { users });
});

app.get('/hello', async (req, res) => {
    const result = await (await connection).query('SELECT * FROM students');

    res.render('index', { result: result[0] })
    
})
app.listen(3000, () => console.log('Server running on port 3000'));
