const router = require('express').Router()
const User = require("../models/User")

router.get("/:_id", (req, res) =>{
    const _id = req.params._id;

    User.findOne({_id}, (err, doc) =>{
         if (err) throw (err);
         return res.json(doc);

});
});

router.post("/login", (req, res)=>{
    const{email, senha} = req.body

    if (!email || !senha){
        return res.status(400).send("Preencha todos os campos")
    }

    User.findOne({email}, (err, doc)=>{
        if(err) throw (err);
        if(doc.senha !== senha) return res.status(401).send("Seus dados estão incorretos");
        return res.json(doc)
    })
});

router.post("/cadastro", (req, res)=>{
    const{nome, email, senha} = req.body
    console.log(req.body)
    if(!nome || !email || !senha ) {
        return res.status(400).send("Preencha todos os campos")
    }

    const newUser = new User({
        nome,
        email,
        senha,
    })

    newUser.save().then((user) =>{
        return res.json(user)
    })
})

router.delete("/:_id", (req, res)=>{
    const _id = req.params._id

    User.deleteOne({_id}, (err, doc)=>{
        if (err) throw (err)
        return res.json(doc)
    })
})

router.put ("/:_id", (req, res) =>{
    const _id = req.params._id
    const {body} = req

    User.updateOne ({_id}, body, (err, doc) =>{
        if (err) throw (err)
        return res.json(doc)
    })
})

module.exports = router;