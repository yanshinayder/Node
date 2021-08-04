module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimento e realizando um GET'))
    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você esta na rota de atendimento realizando um POST')

    })    
}

