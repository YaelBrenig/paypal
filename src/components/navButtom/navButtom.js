import React from 'react'
import './navButtom.css'
import searchSolid from '../../images/searchSolid.png'

export default () => {

    return (
        <>
            <div className="container mb-5">

                <div class="d-flex justify-content-between  ">

                    <div className="d-flex justify-content-around  buttonOne button">
                        <div className="align-self-center">All</div>
                        <div className="align-self-center">4</div>
                    </div>

                    <div className="d-flex justify-content-around   button">
                        <div className="align-self-center">Capture</div>
                        <div className="align-self-center">1</div>
                    </div>

                    <div className="d-flex justify-content-around   button">
                        <div className="align-self-center">Marketing</div>
                        <div className="align-self-center">3</div>
                    </div>

                    <div className="d-flex justify-content-around   button">
                        <div className="align-self-center">Sale</div>
                        <div className="align-self-center">4</div>
                    </div>

                    <div className="d-flex justify-content-around   button">
                        <div className="align-self-center">Cultivation</div>
                        <div className="align-self-center">5</div>
                    </div>

                    <div className="d-flex justify-content-around   button">
                        <div className="align-self-center">Trust</div>
                        <div className="align-self-center">6</div>
                    </div>

                    <div className="d-flex justify-content-start searchIcon">
                        <div className="mr-2 ml-2">
                            <img src={searchSolid}/>
                        </div>
                        <div className="d-flex justify-content-around">
                            <input type="text" placeholder="Search"  className="searchInput"/>
                        </div>
                    </div>
                </div>


            </div>



        </>
    );
}