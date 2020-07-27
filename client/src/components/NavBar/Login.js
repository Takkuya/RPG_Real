import React, {useState} from 'react'
import {
	NavLink,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import { FormLogin } from './FormModal';

export const LoginModal =() =>{
    const [modal, setModal] = useState(false);
    const openModal = () => [ setModal(!modal)];

    return(
      <>
        <NavLink onClick={openModal} color="primary" href="#">
            Login
        </NavLink>
        <Modal toggle={openModal} isOpen={modal}>
            <ModalHeader toggle={openModal}>Se Loga Ai Mano</ModalHeader>
            <ModalBody>
                <FormLogin/>
            </ModalBody>
        </Modal>
      </>
    )
}