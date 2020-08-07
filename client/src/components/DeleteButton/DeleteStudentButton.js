import React, {useState} from 'react'
import {Button, Modal, ModalHeader, ModalBody, Container} from 'reactstrap'
import { useDispatch } from 'react-redux'
import {deleteStudent} from '../../actions/studentActions'

export const DeleteStudentButton = ({_id}) =>{
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(!open)

    const dispatch = useDispatch()

    return(
        <>
        <Button outline size ="lg" color="danger" onClick={handleOpen}>Deletar aluno</Button>
        <Modal isOpen={open} toggle={handleOpen}>
            <ModalHeader toggle={handleOpen}> 
            Você deseja mesmo deletar o aluno?
            </ModalHeader>           
            <ModalBody>
                Essa ação é permanente. <br/>
                <Container className="d-flex justify-content-around mt-4">
                    <Button color="danger" onClick={() =>dispatch(deleteStudent(_id))}>Confirmar</Button>
                    <Button color="success" onClick={handleOpen}>Voltar</Button>
                </Container>
            </ModalBody>
        </Modal>
        </>
    )
}



