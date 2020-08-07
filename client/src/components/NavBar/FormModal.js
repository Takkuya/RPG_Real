import React, {useState} from 'react';
import { Form, Input, Button, Label} from 'reactstrap';
import {useDispatch} from 'react-redux'
import { postUser, getUser } from '../../actions/userActions';


export const FormLogin =() =>{
    const [loginInfo, setLogin] = useState({
        email: '',
        senha: ''
    });

    const dispatch = useDispatch();
    

    const handleChange = (e) => setLogin({...loginInfo, [e.target.name]: e.target.value});
    return(
    <Form>
        <Label for="email">Email</Label>
        <Input type="email" name="email"placeholder="Insira seu e-mail" value={loginInfo.email} onChange={(e) => handleChange(e)}/>
        <Label for="senha">Senha</Label>
        <Input type="password" name="senha" placeholder="Insira a sua senha" value={loginInfo.senha} onChange={(e) => handleChange(e)}/>
        <Button color="primary" onClick={() => dispatch(getUser(loginInfo))}>
            Enviar
        </Button>
    </Form>

    );
};

export const FormCadastro = () =>{
    const [cadastroInfo, setCadastro] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmacao_senha: ''
    });

    const[ mensagem,setMensagem] = useState("") 


    const dispatch = useDispatch()
    const handleChange = (e) => {setCadastro({...cadastroInfo, [e.target.name]: e.target.value})
   

   // um if pra verificar se os campos que tão mudando são ou o de senha ou de confirmar a senha
   //comparar o  confiramcao senhae o senha
   //mudar a mensagem que tá no state, pra indicar se as senhas estão iguais ou não
    
    if (e.target.name === "confirmacao_senha"){
    if (cadastroInfo.senha !== e.target.value){
         setMensagem( "A senha está errada.")
    }

    else{
         setMensagem("A senha está certa")
    }
};
    };



    return(
        <Form>
            <Label for="nome">Nome</Label>
            <Input type="text" name="nome" placeholder="Insira seu nome" value={cadastroInfo.nome} onChange={(e) => handleChange(e)}/>
            <Label for="email">Email</Label>
            <Input type="email" name="email" placeholder="Insira seu Email" value={cadastroInfo.email} onChange={(e) => handleChange(e)}/>
            <Label for="senha">Senha</Label>
            <Input type="password" name="senha" placeholder="Insira sua senha" value={cadastroInfo.senha} onChange={(e) => handleChange(e)}/>
            <Label for="confirmacao_senha">Confirmação de Senha</Label>
            <Input type="password" name="confirmacao_senha" placeholder="Insira sua senha novamente" value={cadastroInfo.confirmacao_senha} onChange={(e) => handleChange(e)}/>
            
            <div>
                {mensagem}
            </div>

            <Button color="primary" onClick={() => dispatch(postUser(cadastroInfo))}>
				Enviar
			</Button>
        </Form>
    )
}
