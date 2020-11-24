import React from 'react'
import './navAdd.css';
import shoppingCartSolid from '../../images/shoppingCartSolid.png'
import ledaerSmall from '../../images/ledaerSmall.png';
import leaderNew from '../../images/leaderNew.png'

export default () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 a">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navnav" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                   <div style={{width:'16vw'}}></div>
                    <div class="nav-item nav-link active">
                        <img src={leaderNew} />
                    </div>
                    {/* <div class="leader"> */}
                    <h5 className="nav-item nav-link leaderLogo" style={{color:'#4E4EFE'}}>LEADER</h5>
                    {/* </div> */}
                    <div style={{width:'15vw'}}></div>
                    <a class="nav-item nav-link active ml-2" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link active ml-2" href="#">About</a>
                    <a class="nav-item nav-link active ml-2" href="#">Features</a>
                    <a class="nav-item nav-link active ml-2" href="#">Pricing</a>
                    {/* <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
                    <a class="nav-link ml-2" href="#" style={{color:'#08A5FE'}}>
                        <img className="mr-3 ml-2" src={shoppingCartSolid}/>
                        LOG IN</a>
                    
                    <button className="btn  align-self-center buttonLogIn ml-2">
                        <div className="align-self-center">
                            Sign In
                                </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}