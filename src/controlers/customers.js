const CustomersModel = require('../models/customers')


function add(req, res) {
const {
    name,
    age,
    email,
    password
} = req.body

const registrer = new CustomersModel({
    name,
    age,
    email,
    password,
})

registrer.save()

res.send('Cadastro realizado')

}

module.exports = {
    add
}