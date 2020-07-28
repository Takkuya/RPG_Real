import React, {useState} from 'react'
import { Modal, ModalBody, ModalHeader, Row, Col, Button } from "reactstrap"

export const ModalAlunos = ({nome, idade, curso, email, imagem}) =>{
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

    const[open, setOpen]=useState(false)
    const handleOpen = () => setOpen(!open)

    return(
        <>
            <Button outline color="primary" size="lg" block onClick={handleOpen} className="mt-2">
                Mais informações
            </Button>
            <Modal isOpen={open} toggle={handleOpen} size="lg">
                <ModalHeader toggle={handleOpen} style={styles.ModalHeader}>
                    {nome}
                </ModalHeader>
                <ModalBody style={styles.modalBody}>
                    <Row>
                        <Col xs={12} md={6}>
                            <img src={imagem} alt={nome} style={styles.cardImgStyle}/>
                        </Col>
                        <Col xs={12}md={6}>
                            <p>{idade}</p>
                            <p>{curso}</p>
                            <p>{email}</p>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </>
    )
}
