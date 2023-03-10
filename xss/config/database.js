const { pool, Pool } = require('pg')

const conn = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

// Testing Connexion

async function testConn() {
    try {
        await conn.query('select now()')
        console.log('*** POSTGRESS: connect stabilished')
    } catch (error) {
        console.log('*** POSTGRESS: ERROR' + error)
    }
}

testConn()

module.exports = conn