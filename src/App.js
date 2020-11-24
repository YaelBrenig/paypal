import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav'
import Main from './components/main/main'
import Header from './components/header/header';
import ButtonTitle from './components/buttonTitle/buttonTitle';
import NavButtom from './components/navButtom/navButtom';
import NavExample from './components/navExample';
import NavAdd from './components/navAdd/navAdd'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Popup1 from './components/popup/popup';
import PopupSuccess from './components/popupSuccess/popupSuccess';
import Seats from './components/seats/seats';


function App() {
  return (
    <div className="App">
      <NavAdd></NavAdd>
      {/* <NavExample></NavExample> */}
      {/* <Nav></Nav> */}
      {/* <NavButtom></NavButtom> */}
      <Header></Header>
      {/* <ButtonTitle></ButtonTitle> */}
      <Main></Main>
      <Seats></Seats>
    </div>
  );
}

export default App;
