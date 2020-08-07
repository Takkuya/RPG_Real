import React, {useState} from 'react'
import { Col, Row, Form, Input, Button, Label, InputGroup, Modal, ModalBody, ModalHeader, } from 'reactstrap';
import {useDispatch} from 'react-redux'
import {postStudent} from '../../actions/studentActions'
import NavBarStyle from './NavBarStyle';

export const StudentModal = () => {
    const [modal, setModal] = useState(false)
    const openModal = () => setModal(!modal)

    return(
        <>
        <Button outline color="primary" onClick={openModal}>Adiconar estudante.</Button>
        <Modal toggle={openModal} isOpen={modal}>
         <ModalHeader toggle={openModal} style={NavBarStyle.ModalHeader}>Adicione um aluno</ModalHeader>
         <ModalBody style={NavBarStyle.ModalBody}></ModalBody>
            <AddStudent/>
        </Modal>
        </>
    )

}

export const AddStudent = () =>{
    const [studentInfo, setInfo] = useState({
        nome: "",
        curso: "",
        idade: "",
        email: "",
        imagem: ""
    })

    const dispatch = useDispatch()

    const handleChange = (m) => setInfo({...studentInfo, [m.target.name]:m.target.value})

    return (
        <>
            <Form>
                <Label for="nome">Qual o nome do aluno?</Label>
                <Input type="text" name="nome" value={studentInfo.nome} onChange={(m) =>handleChange(m)}/>
                <Label for="curso">CSurso</Label>
                <Input type="text" name="curso" value={studentInfo.curso} onChange={(m) =>handleChange(m)}/>
                <Label for="idade">Qual a idade do aluno?</Label>
                <Input type="text" name="idade" value={studentInfo.idade} onChange={(m) =>handleChange(m)}/>
                <Label for="email">Qual o email do aluno?</Label>
                <Input type="text" name="email" value={studentInfo.email} onChange={(m) =>handleChange(m)}/>
                <Label for="imagem">Link da imagem?</Label>
                <Input type="text" name="imagem" value={studentInfo.imagem} onChange={(m) =>handleChange(m)}/>
                <Button outline color="primary" onClick={() => dispatch(postStudent(studentInfo))}>Enviar</Button>

            </Form>

        </>
    )
}