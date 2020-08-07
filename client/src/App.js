import React from 'react';
import { Header } from './components/NavBar/Header';
import './App.css'
import { Col, Row} from 'reactstrap'
import { Cartao } from './components/Card/Cartao';
import {useSelector,useDispatch } from 'react-redux'
import {StudentModal, AddStudent } from './components/NavBar/addStudentModal';
import { useEffect } from 'react';
import {getStudents} from './actions/studentActions'



function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStudents())
  }, [])
  const alunos = useSelector(state => state.Student.student)
  return (
    <div className="App">
      <Header/>
      <StudentModal/>
      <Row style={{width:'100%'}} className="p-4">

        {


  alunos.map(alunos=> (
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
