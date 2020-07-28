import React from 'react'
import Corno from  '../assets/Jesus.jpg'
import { Card, CardHeader, CardImg, CardBody, Button } from "reactstrap"
import { ModalAlunos } from './ModalAlunos'


export const Cartao = ({nome, idade, curso, email,imagem}) =>{
    return(
        <Card style={{width: "auto", height: "100%", backgoundColor: "#1767C7"}}>
            <CardHeader style={{backgroundColor: "#2278FA", fontSize: "25px"}}>{nome}</CardHeader>
          
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
               
               
                <ModalAlunos {...{nome, curso, idade, email, imagem}}/>
            </CardBody>
        </Card> 
    )
}
