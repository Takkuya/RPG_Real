import React, {useState} from 'react'
import {
	NavLink,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import { FormCadastro } from './FormModal';

export const CadastroModal = () =>{
    const [modal, setModal] = useState(false);

    const openModal = () => [setModal(!modal)];

    return(
        <>
            <NavLink onClick={openModal} color="primary" href="#">
                Cadastro
            </NavLink>
            <Modal toggle={openModal} isOpen={modal}>
                <ModalHeader toggle={openModal}>Se Cadastra Ai Meu Jovem</ModalHeader>
                <ModalBody>
                    <FormCadastro/>
                </ModalBody>
            </Modal>
        </>
    )
}
