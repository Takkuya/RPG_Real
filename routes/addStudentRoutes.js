const router = require("express").Router()
const Student = require('../models/Student')

router.get("/:_id", (req, res) =>{
    const _id = req.params._id

    Student.findOne({_id}, (err, doc) => {
        if(err) throw err
        return res.json(doc)       
    })
})

router.post("/cadastro", (req, res) => {
    const{nome, curso, idade, email, imagem} = req.body

    if(!nome || !curso || !idade || !email || !imagem){
        return res.status(400).send("Preencha todos os campos")
    }

    const addStudent = new Student({
        nome, 
        curso, 
        idade,
        email,
        imagem
    })

    addStudent.save().then((student) =>{
        return res.json(student)
    })
})

module.exports = router


