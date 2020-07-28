import React from 'react';
import { Header } from './components/NavBar/Header';
import './App.css'
import { Col, Row} from 'reactstrap'
import { Cartao } from './components/Card/Cartao';
import {Alunos} from './components/assets/PlaceHolder/PlaceHolder'
import { ModalAlunos } from './components/Card/ModalAlunos';


function App() {
  return (
    <div className="App">
      <Header/>
      <Row style={{width:'100%'}} className="p-4">{

Alunos.map(alunos=> (
  <Col xs='12' sm='6' md='4' lg='3' className="mb-4 mt-">
  <Cartao {...alunos}></Cartao>
  </Col>
))
}

</Row>
    </div>
  );
}

export default App;
