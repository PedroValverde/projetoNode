const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require ('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))


app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos()) //COnverter para json

})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //json
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //json
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.excluirProduto(req.params.id)
    res.send(produto) //json
})

app.listen(porta, () =>{
    console.log(`Servidor está executando na porta ${porta}.`)
})