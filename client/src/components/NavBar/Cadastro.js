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
    const styles= {
        modalBody: {
            backgroundColor: "#333333",
            color: "white",
        },

        ModalHeader: {
            backgroundColor: "#2278FA",
            color: "white",
        },
        cardImgStyle:{
            width: "100%",
            height: "100%",
        }
    }
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
