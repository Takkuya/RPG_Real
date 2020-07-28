import React, {useState} from 'react'
import {
	NavLink,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import { FormLogin } from './FormModal';
import Styles from './NavBarStyle'

export const LoginModal =() =>{

    const [modal, setModal] = useState(false);
    const openModal = () => [ setModal(!modal)];

    return(
      <>
        <NavLink onClick={openModal} color="primary" href="#">
            Login
        </NavLink>
        <Modal toggle={openModal} isOpen={modal}>
            <ModalHeader toggle={openModal} style={Styles.ModalHeader}>Se Loga Ai Mano</ModalHeader>
            <ModalBody style={Styles.ModalBody}>
                <FormLogin/>
            </ModalBody>
        </Modal>
      </>
    )
}