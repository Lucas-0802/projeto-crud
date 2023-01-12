const CustomersModel = require('../models/customers')
const {crypto} = require('../utils/password')

function index(req, res) {
    res.render('register', {
        title: 'Cadastro de clientes'
    })
}


async function add(req, res) {
const {
    name,
    age,
    email,
    password
} = req.body

const passwordCripto = await crypto(password)

const registrer = new CustomersModel({
    name,
    age,
    email,
    password: passwordCripto,
})

registrer.save()

res.send('Cadastro realizado')

}

function listUsers(req, res) {
    res.render('listUsers', {
        title:'Listagem de usuários',
        users: []
    })
}

module.exports = {
    add,
    index,
    listUsers,
}