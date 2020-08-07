import React, {useState} from 'react'
import {
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import { LoginModal } from './Login';
import { CadastroModal } from './Cadastro';
import {useSelector} from 'react-redux'
import {StudentModal} from './addStudentModal'

export const Header = () =>{
    const [isOpen, toggle] = useState(false);
    // const [nomeAluno, setAluno] = useState("")

    const users = useSelector(state => state.User.nome)

    return (
        <Navbar color="primary" dark expand="md">
            <NavbarBrand>NSA Bom</NavbarBrand>
            <NavbarToggler onclick={() => toggle(isOpen)}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav classname="ml-2" navbar>
                    <NavItem>
                       <LoginModal>aaa</LoginModal>
                    </NavItem>
                    <NavItem>
                        <CadastroModal>Eita</CadastroModal>
                    </NavItem>

          
                    {
                        users !== "" ? 
                    <NavItem >
                        <NavLink>Seja bem vindo {users}</NavLink>
                    </NavItem> :null
                    }

                 

              

            
                </Nav>
            </Collapse>
        </Navbar>

        
    )
}