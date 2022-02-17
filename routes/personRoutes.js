const router = require('express').Router()
const Person = require('../models/Person')

router.post('/', async(req, res) => {

    //req.body  
    const {name, salary, aproved} = req.body

    if(!name){
        res.status(422).json({ error: 'O nome é obrigaatorio!' })
        return
    }
    
    const person = {
        name,
        salary,
        aproved,
    }

    try {
        await Person.create(person)
        res.status(201).json({ message: 'Pessoa inserida com sucesso!' })
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

// Read - leitura de dados
router.get('/', async(req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    }catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/:id', async(req, res) => {
    const id = req.params.id
    try {
       const person = await Person.findOne({ _id: id})
       if (!person){
           res.status(404).json({ message: " O usuario não foi encontrado! "})
           return
       }
       res.status(200).json(person)
    }catch(error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router
