import React from 'react'
import ledaerSmall from '../images/ledaerSmall.png';
import shoppingCartSolid from '../images/shoppingCartSolid.png'
import './nav/nav.css'

export default () => {
    return (

        <>
            {/* <div className="container-fluid"> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}

                <div className="row">
                    <div className="col-6">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                            <div className="">
                                <div class="navbar-nav">
                                    <div className="mr-2 leader">
                                        <img src={ledaerSmall} />
                                    </div>
                                    <div class="leader">
                                        <h5 className="leader">LEADER</h5>
                                    </div>
                                    {/* <div style={{ width: '80vh' }}></div> */}
                                    <a class="nav-item nav-link active " href="#">Home <span class="sr-only">(current)</span></a>
                                    <a class="nav-item nav-link active" href="#">Features</a>
                                    <a class="nav-item nav-link active" href="#">Pricing</a>
                                    <a class="nav-item nav-link active" href="#">Disabled</a>
                                    {/* <li class="nav-item active"> */}
                                    <img className="shoppingIcon"  src={shoppingCartSolid} />

                                    <a class="nav-link logIn1" href="#">LOG IN</a>

                                    {/* </li> */}
                                    <button className="btn  align-self-center buttonLogIn">
                                        <div className="align-self-center">
                                            Sign In
                                </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>
            {/* </div> */}




            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light nav"> */}
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
            {/* <span class="navbar-toggler-icon"></span> */}
            {/* </button> */}
            {/* <div class="collapse navbar-collapse " id="navbarNav"> */}
            {/* <ul class="navbar-nav "> */}
            {/* <div className="mr-2 "> */}
            {/* <img src={ledaerSmall} /> */}
            {/* </div> */}
            {/* <div class=""> */}
            {/* <h5 className="leader">LEADER</h5> */}
            {/* </div> */}
            {/* <div style={{ width: '90vh' }}></div> */}

            {/* <div className="d-flex justify-content-end"> */}
            {/* <div className="liLink"> */}
            {/* <li class="nav-item active "> */}
            {/* <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a> */}
            {/* </li> */}
            {/* </div> */}
            {/* <div className="liLink"> */}
            {/* <li class="nav-item active "> */}
            {/* <a class="nav-link " href="#">ABOUT</a> */}
            {/* </li> */}
            {/* </div> */}

            {/* <div className="liLink"> */}
            {/* <li class="nav-item active "> */}
            {/* <a class="nav-link " href="#">FEATURES</a> */}
            {/* </li> */}
            {/* </div> */}
            {/* <div className="liLink"> */}
            {/* <li class="nav-item active "> */}
            {/* <a class="nav-link " href="#">PRICING</a> */}
            {/* </li> */}
            {/* </div> */}
            {/* <div className="liLink"> */}
            {/* <li class="nav-item active"> */}
            {/* <img className="shoppingIcon" /> */}
            {/* </li> */}
            {/* <div className="liLink"> */}
            {/* <li class="nav-item active"> */}
            {/* <a class="nav-link logIn" href="#">LOG IN</a> */}
            {/* </li> */}
            {/* </div> */}

            {/* </div> */}
            {/*  */}
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

            {/* </ul> */}
            {/* </div> */}
            {/* </div> */}
            {/* </ul> */}
            {/* </nav > */}



        </>
    );
}
