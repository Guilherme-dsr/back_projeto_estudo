// -q$7e_V-@r-X64g
// Config inicial
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// forma de ler JSON / middlewares
app.use(express.urlencoded({
     extended: true
    }), 
)

app.use(express.json())

// Rotas da aplicação
const personRoutes = require('./routes/personRoutes');
app.use("/person", personRoutes)

// Rota  inicial / endpoinnt 
app.get('/', (req, res) => {
    res.json({ message: 'Oi Express!'})
})
/// Entregar porta
const DB_USER = "Guilherme"
const DB_PASSWORD = encodeURIComponent("-q$7e_V-@r-X64g")

    mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.cymoa.mongodb.net/bancodaapi?retryWrites=true&w=majority`
        )
    .then(() => {
        console.log("Conectamos ao MongoDB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))


