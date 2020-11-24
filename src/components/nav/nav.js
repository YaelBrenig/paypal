import React from 'react'
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './nav.css'
import ledaerSmall from '../../images/ledaerSmall.png';
import shoppingCartSolid from '../../images/shoppingCartSolid.png';
// import "../node_modules/jquery/dist/jquery.min.js";
// import "bootstrap/js/src/collapse.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Popup1 from '../popup/popup';


export default () => {
    return (
        <>
<Popup1></Popup1>        
            <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ">
                        {/* <div className="mr-2 "> */}
                            {/* <img src={ledaerSmall} /> */}
                        {/* </div> */}
                        {/* <div class=""> */}
                            {/* <h5 className="leader">LEADER</h5> */}
                        {/* </div> */}
                        {/* <div style={{ width: '90vh' }}></div> */}
                        {/* <div className="d-flex justify-content-end"> */}
                            {/* <div className="liLink"> */}
                                <li class="nav-item active link">
                                    <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                                </li>
                            {/* </div> */}
                            {/* <div className="liLink"> */}
                                <li class="nav-item active ">
                                    <a class="nav-link link" href="#">ABOUT</a>
                                </li>
                            {/* </div> */}

                            {/* <div className="liLink"> */}
                                <li class="nav-item active ">
                                    <a class="nav-link link" href="#">FEATURES</a>
                                </li>
                            {/* </div> */}
                            {/* <div className="liLink"> */}
                                <li class="nav-item active ">
                                    <a class="nav-link link" href="#">PRICING</a>
                                </li>
                            {/* </div> */}
                            {/* <div className="liLink"> */}
                            {/* <li class="nav-item active"> */}
                                {/* <img className="shoppingIcon" src={shoppingCartSolid} /> */}
                            {/* </li> */}
                            {/* <div className="liLink"> */}
                                <li class="nav-item active">
                                    <a class="nav-link logIn" href="#">LOG IN</a>
                                </li>
                            {/* </div> */}

                            {/* </div> */}

                            {/* <button className="btn  align-self-center buttonLogIn"> */}
                                {/* <div className="align-self-center"> */}
                                    {/* Sign In */}
                                {/* </div> */}
                            {/* </button> */}
                            {/* <Button className="d-flex justify-content-around mt-2" alt="150x75" variant="primary">Become A Leader</Button> */}
                            {/* <Button className="small d-flex justify-content-around signIn mt-2" variant="primary">SIGN IN</Button> */}
                        {/* </div> */}
                        {/* </div> */}

                        {/* </div> */}

                    </ul>
                </div>
            </nav >






            {/* <div className="container-fluid">
                <div className="row nav pt-3">
                    <div className="col-2"></div>
                    <div className="col-3 d-flex justify-content align-self-center"> */}
            {/* <div className=""> */}
            {/* <div className="mr-2"> */}
            {/* <img src={ledaerSmall} /> */}
            {/* </div>
                        <div class="">
                            <h5 className="leader">LEADER</h5>
                        </div> */}
            {/* </div> */}
            {/* </div> */}

            {/* <div className="col-1">Home</div>
                    <div className="col-1">ABOUT</div>
                    <div className="col-1">FEATURES</div>
                    <div className="col-1">PRICING</div>
                    <div className="col-1 d-flex justify-content-between"> */}
            {/* <img className="" src={shoppingCartSolid} /> */}
            {/* <div className="">LOG IN</div> */}
            {/* <div className="col-1 ">LOG IN</div> */}
            {/* </div> */}



            {/* <div className="col-1">
                        <button className="btn buttonLogIn">
                            <div className="">
                                Sign In
                    </div>
                        </button> */}
            {/* </div> */}


            {/* <div className="col-6 "> */}
            {/* <div className="d-flex justify-content"> */}
            {/* <div className="d-flex align-self-center link">Home</div> */}
            {/* <div className="d-flex align-self-center link">ABOUT</div> */}
            {/* <div className="d-flex align-self-center link">FEATURES</div> */}
            {/* <div className="d-flex align-self-center link">PRICING</div> */}

            {/* <button className="btn d-flex align-self-center buttonLogIn"> */}
            {/* <div className="align-self-center"> */}
            {/* Sign In */}
            {/* </div> */}
            {/* </button> */}
            {/* <Button className="d-flex justify-content-around mt-2" alt="150x75" variant="primary">Become A Leader</Button> */}
            {/* <Button className="small d-flex justify-content-around signIn mt-2" variant="primary">SIGN IN</Button> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="col-1"></div> */}

            {/* </div> */}

            {/* <div className=""> */}

            {/* </div> */}

            <div></div>
            <div></div>
            {/* </div> */}

            {/* 
            <Navbar className="nav" bg="light" variant="light" style={{ height: '8rem' }}>
                <div class="d-flex bd-highlight mb-3 mt-3">



                    <nav className="navbar navbar-default">
                        <div className="d-flex justify-content-start">
                            <div class="p-2 bd-highlight">
                                <img src={ledaerSmall} />
                            </div>
                            <div class="mr-auto p-2 bd-highlight mr-10 ml-10">
                                <h5 className="leader ">LEADER</h5>
                            </div>
                        </div>


                        <div className="d-flex justify-content-end">
                            <Nav.Link className="link" style={{ color: "black" }} href="#home">Home</Nav.Link>
                            <Nav.Link className="d-flex justify-content-end link" style={{ color: "black" }} href="#features">Features</Nav.Link>
                            <Nav.Link className="d-flex justify-content-end link" style={{ color: "black" }} href="#pricing">Pricing</Nav.Link>
                            <Nav.Link className="logIn link" href="#home">LOG IN</Nav.Link>
                            <Nav.Link className="p-2  link" href="#home"><Button className="rounded-pill signIn" alt="150x75" variant="primary">SIGN IN</Button></Nav.Link>
                        </div>
                    </nav>

                    {/* <Form inline> */}
            {/* <Button className="rounded-pill buttomThree buttom" alt="150x75" variant="primary">Become A Leader</Button> */}
            {/* <Button className="signIn" variant="primary">SIGN IN</Button> */}
            {/* </Form> */}
            {/* </div> */}
            {/* </Navbar> */}



            {/* <Navbar bg="light" expand="lg">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar> */}
            {/* <nav className="navbar-expand-lg navbar-light bg-light">
                <div class="d-flex bd-highlight mb-3 mt-3">
                    <div class="mr-auto p-2 bd-highlight">
                    </div>
                    <div class="p-2 bd-highlight">
                        <img src={ledaerSmall} />
                    </div>
                    <div class="mr-auto p-2 bd-highlight">
                        <h5>LEADER</h5>
                    </div>


                    <div class="p-2 bd-highlight">
                        <a class="ml-auto p-2 bd-highlight link" href="#">HOME</a>
                    </div>
                    <div class="p-2 bd-highlight">
                        <a class="ml-auto p-2 bd-highlight link" href="#">ABOUT</a>
                    </div>
                    <div class="p-2 bd-highlight">
                        <a class="ml-auto p-2 bd-highlight link" href="#">FEATURES</a>
                    </div>
                    <div class="p-2 bd-highlight">
                        <Button>SIGN IN</Button>
                    </div>
                </div>
            </nav> */}
        </>




    );


}