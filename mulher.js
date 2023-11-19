const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Proxy Go',
        imagem: 'https://avatars.githubusercontent.com/u/53207638?v=4',
        minibio: 'Designer, Escritora, Ilustradora, Desenvolvedora web e Pilota de Drone'
    })
}

function mostraPorta(){

    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)