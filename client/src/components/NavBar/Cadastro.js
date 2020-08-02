import React, {useState} from 'react'
import {
	NavLink,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import { FormCadastro } from './FormModal';
import Styles from './NavBarStyle'

export const CadastroModal = () =>{
    const [modal, setModal] = useState(false);

    const openModal = () => [setModal(!modal)];

    return(
        <>
            <NavLink onClick={openModal} color="primary" href="#">
                Cadastro
            </NavLink>
            <Modal toggle={openModal} isOpen={modal}>
                <ModalHeader toggle={openModal} style={Styles.ModalHeader}>Se Cadastra Ai Meu Jovem</ModalHeader>
                <ModalBody style={Styles.ModalBody}>
                    <FormCadastro/>
                </ModalBody>
            </Modal>
        </>
    )
}
