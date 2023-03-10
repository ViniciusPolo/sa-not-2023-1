const conn = require('../config/database')

const controller = {}

controller.login = async (req,res) => {
    try {
    //    const sql = `
    //     select * from users where username = '${req.body.username}'and password = '${req.body.password}'
    //    ` 

    const sql = `select * from users where username = $1 and password = $2`
       console.log('SQL', sql)

       //const result = await conn.query(sql)
       const result = await conn.query(sql, [
           req.body.username,
           req.body.password
       ])

       if (result){
        res.render('loggedin',{
            title: 'Seja Bem Vindo',
            message: 'Usuário autenticado com sucesso',
        })
       }else {
        res.render('loggedin',{
            title: 'Acesso Negado',
            message: 'Usuário o senha incorretos',
        })
       }

    } catch (error) {
       console.error(error)
        
    }
};

module.exports = controller