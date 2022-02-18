require('dotenv').config()
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
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

    mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.cymoa.mongodb.net/bancodaapi?retryWrites=true&w=majority`
        )
    .then(() => {
        console.log("Conectamos ao MongoDB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))


