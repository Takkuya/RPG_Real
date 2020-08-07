import React from 'react'
import { Card, CardHeader, CardImg, CardBody } from "reactstrap"
import { ModalAlunos } from './ModalAlunos'


export const Cartao = ({_id,nome, idade, curso, email,imagem}) =>{
    return(
        <Card style={{width: "auto", height: "100%", backgoundColor: "#1767C7"}}>
            <CardHeader style={{backgroundColor: "#2278FA", fontSize: "20px"}}>{nome}</CardHeader>
          
            <CardBody style={{backgroundColor: "#C0C0C0"}}>
            <CardImg 
            src = {imagem}
            style ={{
                width: "100%",
                height: "auto",
            }}
            />
                <p>{curso}</p> 
                <p>{idade}</p>  
                <p>{email}</p>
               
               
                <ModalAlunos {...{_id,nome, curso, idade, email, imagem}}/>
            </CardBody>
        </Card> 
    )
}
