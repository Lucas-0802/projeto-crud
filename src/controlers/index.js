function index(req, res) {
     res.render('register', {
        title: 'Cadastro de clientes'
    })
}

module.exports = {
    index,
}