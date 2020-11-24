import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import PageOne from '../../images/PageOne.png';
import PageTwo from '../../images/PageTwo.png';
import PageThree from '../../images/PageThree.png';
import PageFor from '../../images/PageFor.png';
import PageFive from '../../images/PageFive.png';
import PageSix from '../../images/PageSix.png';
import PageSeven from '../../images/PageSeven.png';
import PageEigth from '../../images/PageEigth.png';
import './main.css'
import union from '../../images/union.png';
import networkWiredSolid from '../../images/networkWiredSolid.svg';
import handshakeSolid from '../../images/handshakeSolid.svg'
import filterSolid from '../../images/filterSolid.svg';
import lightbulbRegular from '../../images/lightbulbRegular.svg';
import calendarAltSolid from '../../images/calendarAltSolid.svg';
import dataBaseSolid from '../../images/databaseSolid.svg';
import fileAltSolid from '../../images/fileAltSolid.svg';
import Popup from '../popup/popup';
import Group from '../../images/Group.png';
import leaderNew from '../../images/leaderNew.png'
import PopupCancel from '../popup/popup'
import PopupSuccess from '../popupSuccess/popupSuccess'

export default () => {

    const [over1, setOver1] = useState(true);
    const [over2, setOver2] = useState(true);
    const [over3, setOver3] = useState(true);
    const [over4, setOver4] = useState(true);
    const [over5, setOver5] = useState(true);
    const [over6, setOver6] = useState(true);
    const [over7, setOver7] = useState(true);
    const [over8, setOver8] = useState(true);
    const [over9, setOver9] = useState(true);

    const [style, setStyle] = useState({ height: '0px' });
    const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
    const [openAlertCancel, setOpenAlertCancel] = useState(false);

    const [degel, setDegel] = useState(true);
    const [user_id, setUser_id] = useState("");
    const [url, setUrl] = useState(window.location);
    const [urlString, setUrlString] = useState(new URL(url));
    const [params, setParams] = useState(new URLSearchParams(url.search));
    const [status, setStatus] = useState(urlString.searchParams.get("status"))
    const [userName, setUserName] = useState(url.pathname.split('/')[1]);
    // const [degel, setDegel] = useState(true);

    // const style = {
    //     height: '20px'
    // }
    const ref = React.createRef();
    const ref1 = React.createRef();


    useEffect(() => {
        if (degel) {
            // let url = window.location.href;
            // let urlString = new URL(url);
            // let status = urlString.searchParams.get("status");
            if (status == "success") {
                // setStatus(null)
                // status = null;
                window.history.pushState({}, document.title, "/");
                // alert("!!!!!הקניה בוצעה בהצלחה");
                setOpenAlertSuccess(true);
            }
            else if (status == "cancel") {

                window.history.pushState({}, document.title, "/");
                // status = null;
                setOpenAlertCancel(true);


                // window.location.href =  setUrl("localhost:3000")
                // setStatus(null)
                // debugger;
                // alert("הביטול הצליח");
                if (window.location.url == "")
                    setOpenAlertCancel(true);

            }
            fetch(`https://pay.leader.codes/getUser_Id/` + userName, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((resJson) => {
                    console.log("got id!!!!!!!!!!!!1");
                    setUser_id(resJson._Id);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        setDegel(false);
    });

    const pay = (aplicationName) => {
        console.log(aplicationName)
        debugger;
        fetch("https://pay.leader.codes/createagreement/" + user_id, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: aplicationName,
                //    url לקבל אותו מה
                // uid: "5efda222c7809538745581ad"
                //   user_id,
            }),
        })
            .then((res) => res.json())
            .then((resJson) => {
                console.log(user_id);
                if (resJson.href) {
                    window.location.href = resJson.href
                }
                //   popup
                else {
                    console.log(resJson.massage);
                    alert("you have subscribe for this application")
                }

            })
            .catch((err) => {
                console.log(err);
            });
    };



    return (

        <>
            {
                openAlertCancel &&
                <PopupCancel></PopupCancel>
            }
            {
                openAlertSuccess &&
                <PopupSuccess></PopupSuccess>
            }

            {/* <div class="d-flex justify-content-center flex-nowrap card1 mt-0 "> */}
            <div className="row" style={{ marginRight: '17%', marginLeft: '17%' }}>

                <div className="col-12" style={{ textAlign: 'left', marginLeft: '1%' }}>
                    <h5 className="buttonTytle" style={{ letterSpacing: 'normal' }}>Pick a task:</h5>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xs-12 mb-4">                  <div className="offsetCard">
                    <Card
                        onClick={() => { pay("llForms") }}
                        // style={{ width: '20rem' }} 
                        className="rounded mb-0 cardAll" alt="100x100" border="white">
                        <div className="cardTopOne" ref={ref1}>
                            <div className="container mt-2" style={{ height: 'inherit' }}>
                                {/* <div className="row">
                                        <div className="col-xs-9">
                                        </div>
                                        <div className="col-xs-3"> */}
                                <div className="d-flex " style={{ justifyContent: 'flex-end' }}>
                                    <Button style={{ marginRight: '2%' }} className="buttonCapture" variant="light">9$</Button>
                                </div>
                                {/* 
                                        </div>
                                    </div> */}
                                <div className="row">
                                    <div className="col" >
                                        <Card.Img className="imgOne" variant="top" src={PageOne} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <Card.Body style={{ height: '12rem' }} className="cardBody">
                            <div className="container mb-2"  >
                                <div className="row" style={{ height: '7rem' }}>
                                    <div className="col-2"><img src={union} className="iconImg" /></div>
                                    <div className="col-10 text">
                                        <Card.Title className="mt-2 cardTitle">Leader Box</Card.Title>
                                        <Card.Text className="text">
                                            Add contact details for your new sales leads.
                                        </Card.Text></div>
                                </div>
                                <div className="row" >
                                    <div className="col-12">
                                        {
                                            !over1 ||
                                            <Button
                                                onMouseEnter={() => {
                                                    setOver1(!over1)
                                                }}
                                                // onClick={() => { pay("Leader Box") }}
                                                className="rounded-pill buttomOne buttom" alt="150x75" variant="primary">Become A Leader</Button>
                                        }
                                        {
                                            over1 ||
                                            <Button
                                                onMouseOut={() => {
                                                    setOver1(!over1)
                                                }}
                                                // onClick={() => { pay("Leader Box") }}
                                                style={{ backgroundColor: 'white', color: '#3598F4', border: '1px solid #3598F4', width: '124px' }}
                                                className="rounded-pill buttomOne buttom" alt="150x75" variant="primary">Leader</Button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xs-12 mb-4">
                    <div className="offsetCard">
                        <Card
                            onClick={() => { pay("Leader Funnel") }}
                            // style={{ width: '20rem' }}
                            border="white" className="cardAll">
                            <div className="cardTopTwo">
                                <div className="container mt-2" style={{ height: 'inherit' }}>
                                    {/* <div className="row">
                                        <div className="col-xs-9">
                                        </div>
                                        <div className="col-xs-3"> */}
                                    <div className="d-flex " style={{ justifyContent: 'flex-end' }}>
                                        <Button style={{ marginRight: '2%' }} className="buttonCapture" variant="light">9$</Button>
                                    </div>
                                    {/* 
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col" >
                                            <Card.Img className="imgOne" variant="top" src={PageTwo} />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <Card.Body style={{ height: '12rem' }} className="cardBody" >
                                <div className="container mb-2">
                                    <div className="row" style={{ height: '7rem' }}>
                                        <div className="col-2">
                                            <img src={filterSolid} className="iconImg" /></div>
                                        <div className="col-10 text">
                                            <Card.Title className="mt-2 cardTitle">Leader Funnel</Card.Title>
                                            <Card.Text className="text">
                                                Create a campaign landing page for your website.
                                        </Card.Text></div>
                                    </div>

                                    <div className="row" >
                                        <div className="col-12">
                                            {
                                                !over2 ||
                                                <Button
                                                    onMouseEnter={() => {
                                                        setOver2(!over2)
                                                    }}
                                                    // onClick={() => { pay("Leader Funnel") }}
                                                    className="rounded-pill buttomTwo buttom" alt="150x75" variant="primary">Become A Leader</Button>
                                            }
                                            {
                                                over2 ||
                                                <Button
                                                    onMouseOut={() => {
                                                        setOver2(!over2);
                                                    }}
                                                    // onClick={() => { pay("Leader Funnel") }}
                                                    style={{ backgroundColor: 'white', color: '#44D7B6', border: '1px solid #44D7B6', width: '124px' }} className="rounded-pill buttomTwo buttom" alt="150x75" variant="primary">Leader</Button>

                                            }
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xs-12 mb-4">
                    <div className="offsetCard">
                        <Card
                            onClick={() => { pay("Leader Hub") }}
                            // style={{ width: '20rem' }} 
                            border="white" className="cardAll">
                            <div className="cardTopThree">
                                <div className="container mt-2" style={{ height: 'inherit' }}>
                                    <div className="row" >
                                        <div className="col-9">
                                        </div>
                                        <div className="col-3">
                                            <Button className="buttonCapture" variant="light">9$</Button>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col align-self-center" >
                                            <Card.Img variant="top" src={PageThree} className="imgOne" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <Card.Body style={{ height: '12rem' }} className="cardBody">
                                <div className="container mb-2">
                                    <div className="row" style={{ height: '7rem' }} >
                                        <div className="col-2">
                                            <img src={lightbulbRegular} className="iconImg" /></div>
                                        <div className="col-10 text">
                                            <Card.Title className="mt-2 cardTitle">Leader Hub</Card.Title>
                                            <Card.Text className="text">
                                                Plan a new project with goals & a timeline.
                                        </Card.Text></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {!over3 ||
                                                <Button
                                                    onMouseEnter={() => {
                                                        setOver3(!over3)
                                                    }}
                                                    // onClick={() => { pay("Leader Hub") }}
                                                    className="rounded-pill buttomThree buttom" alt="150x75" variant="primary">Become A Leader</Button>}
                                            {over3 ||
                                                <Button
                                                    onMouseOut={() => {
                                                        setOver3(!over3)
                                                    }}
                                                    // onClick={() => { pay("Leader Hub") }}
                                                    style={{ backgroundColor: 'white', color: '#6DD400', border: '1px solid #6DD400', width: '124px' }} className="rounded-pill buttomThree buttom" alt="150x75" variant="primary">Leader</Button>}

                                        </div>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xs-12 mb-4">
                    <div className="offsetCard">
                        <Card
                            onClick={() => { pay("Leader Time") }}
                            className="cardAll" border="white">
                            <div className="cardTopFor">
                                <div className="container mt-2" style={{ height: 'inherit' }}>
                                    <div className="row">
                                        <div className="col-9">
                                        </div>
                                        <div className="col-3">
                                            <Button className="buttonCapture" variant="light">9$</Button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col align-self-center">
                                            <Card.Img variant="top" src={PageFor} className="imgOne" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <Card.Body style={{ height: '12rem' }} className="cardBody">
                                <div className="container">
                                    <div className="row" style={{ height: '7rem' }}>
                                        <div className="col-2">
                                            <img src={calendarAltSolid} className="iconImg" /></div>
                                        <div className="col-10 text">
                                            <Card.Title className="mt-2 cardTitle">Leader Time</Card.Title>
                                            <Card.Text className="text">
                                                Plan your meetings for the coming week.
                                        </Card.Text></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {!over4 ||
                                                <Button
                                                    onMouseEnter={() => {
                                                        setOver4(!over4)
                                                    }}
                                                    // onClick={() => { pay("Leader Time") }}
                                                    className="rounded-pill buttomFour buttom" alt="150x75" variant="primary">Become A Leader</Button>}
                                            {
                                                over4 ||
                                                <Button
                                                    onMouseOut={() => {
                                                        setOver4(!over4)
                                                    }}
                                                    // onClick={() => { pay("Leader Time") }}
                                                    style={{ backgroundColor: 'white', color: '#B620E0', border: '1px solid #B620E0', width: '124px' }} className="rounded-pill buttomFour buttom" alt="150x75" variant="primary">Leader</Button>}

                                        </div>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xs-12 mb-4">
                    <div className="offsetCard">
                        <Card
                            onClick={() => { pay("Leader Stories") }}
                            className="cardAll" border="white">
                            <div className="cardTopFive">
                                <div className="container mt-2" style={{ height: 'inherit' }}>
                                    <div className="row">
                                        <div className="col-9">
                                        </div>
                                        <div className="col-3">
                                            <Button className="buttonCapture" variant="light">9$</Button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col align-self-center">
                                            <Card.Img variant="top" src={PageFive} className="imgOne" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Card.Body style={{ height: '12rem' }} className="cardBody">
                                <div className="container mb-2">
                                    <div className="row" style={{ height: '7rem' }}>
                                        <div className="col-2"><img src={dataBaseSolid} className="iconImg" /></div>
                                        <div className="col-10 text">
                                            <Card.Title className="mt-2 cardTitle">Leader Stories</Card.Title>
                                            <Card.Text className="text">
                                                Write a story to share with potential clients.
                                        </Card.Text>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {!over5 ||
                                                <Button
                                                    onMouseEnter={() => {
                                                        setOver5(!over5)
                                                    }}
                                                    // onClick={() => { pay("Leader Stories") }}
                                                    className="rounded-pill buttomFive buttom" alt="150x75" variant="primary">Become A Leader</Button>
                                            }
                                            {over5 ||
                                                <Button
                                                    onMouseOut={() => {
                                                        setOver5(!over5)
                                                    }}
                                                    // onClick={() => { pay("Leader Stories") }}
                                                    style={{ backgroundColor: 'white', color: '#FF808B', border: '1px solid #FF808B', width: '124px' }} className="rounded-pill buttomFive buttom" alt="150x75" variant="primary"> Leader</Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xs-12 mb-4">
                    <div className="offsetCard">
                        <Card
                            onClick={() => { pay("Leader Forms") }}
                            className="cardAll" border="white">
                            <div className="cardTopSix">
                                <div className="container mt-2" style={{ height: 'inherit' }}>
                                    <div className="row">
                                        <div className="col-9">
                                        </div>
                                        <div className="col-3">
                                            <Button className="buttonCapture" variant="light">9$</Button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col align-self-center">
                                            <Card.Img variant="top" src={PageSix} className="imgOne" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Card.Body style={{ height: '12rem' }} className="cardBody">
                                <div className="container mb-2" >
                                    <div className="row" style={{ height: '7rem' }}>
                                        <div className="col-2"><img src={fileAltSolid} className="iconImg" /></div>
                                        <div className="col-10 text">
                                            <Card.Title className="mt-2 cardTitle">Leader Forms</Card.Title>
                                            <Card.Text className="text">
                                                Write a proposal for a new client project.
                                        </Card.Text></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {
                                                !over6 ||
                                                <Button
                                                    onMouseEnter={() => {
                                                        setOver6(!over6)
                                                    }}
                                                    // onClick={() => { pay("Leader Forms") }}
                                                    className="rounded-pill buttomSix buttom mb-2 mt-2" alt="150x75" variant="primary">Become A Leader</Button>
                                            }
                                            {
                                                over6 ||
                                                <Button
                                                    onMouseOut={() => {
                                                        setOver6(!over6)
                                                    }}
                                                    // onClick={() => { pay("Leader Forms") }}
                                                    style={{ backgroundColor: 'white', color: '#F7B500', border: '1px solid #F7B500', width: '124px' }} className="rounded-pill buttomSix buttom mb-2 mt-2" alt="150x75" variant="primary">Leader</Button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xs-12 mb-4">
                    <div className="offsetCard">
                        <Card
                            onClick={() => { pay("Leader Quote") }}
                            className="cardAll" border="white">
                            <div className="cardTopSeven">
                                <div className="container mt-2" style={{ height: 'inherit' }}>
                                    <div className="row">

                                        <div className="col-9">
                                        </div>
                                        <div className="col-3">
                                            <Button className="buttonCapture" variant="light">9$</Button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col align-self-center">
                                            <Card.Img variant="top" src={PageSeven} className="imgOne" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Card.Body style={{ height: '12rem' }} className="cardBody">
                                <div className="container">
                                    <div className="row" style={{ height: '7rem' }}>
                                        <div className="col-2"><img src={handshakeSolid} className="iconImg" /></div>
                                        <div className="col-10 text">
                                            <Card.Title className="mt-2 cardTitle">Leader Quote</Card.Title>
                                            <Card.Text className="text">
                                                Create a customer chat window on your website.
                                        </Card.Text></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {!over7 ||
                                                <Button
                                                    onMouseEnter={() => {
                                                        setOver7(!over7)
                                                    }}
                                                    onClick={() => { pay("Leader Quote") }}
                                                    className="rounded-pill buttomSeven buttom" alt="150x75" variant="primary">Become A Leader</Button>}
                                            {
                                                over7 ||
                                                <Button
                                                    onMouseOut={() => {
                                                        setOver7(!over7)
                                                    }}
                                                    onClick={() => { pay("Leader Quote") }}
                                                    style={{ backgroundColor: 'white', color: '#6236FF', border: '1px solid #6236FF', width: '124px' }} className="rounded-pill buttomSeven buttom" alt="150x75" variant="primary">Leader</Button>}
                                        </div>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xs-12 mb-4">
                    <div className="offsetCard">
                        <Card
                            onClick={() => { pay("Leader Live Chat") }}
                            className="cardAll" border="white">
                            <div className="cardTopEigth" >
                                <div className="container mt-2" style={{ height: 'inherit' }}>
                                    <div className="row" >
                                        <div className="col-9">
                                        </div>
                                        <div className="col-3">
                                            <Button className="buttonCapture" variant="light">9$</Button>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col align-self-center" >
                                            <Card.Img variant="top" src={PageEigth} className="imgOne" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Card.Body style={{ height: '12rem' }} className="cardBody">
                                <div className="container mb-2" >
                                    <div className="row" style={{ height: '7rem' }}>
                                        <div className="col-2 sharpe"></div>
                                        <div className="col-10 text">
                                            <Card.Title className="mt-2 cardTitle">Leader Live Chat</Card.Title>
                                            <Card.Text className="text">
                                                Add your team to Leader and work better together.
                                        </Card.Text>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {!over8 ||
                                                <Button
                                                    onMouseEnter={() => {
                                                        setOver8(!over8)
                                                    }}
                                                    onClick={() => { pay("Leader Live Chat") }}
                                                    className="rounded-pill buttomEigth buttom" alt="150x75" variant="primary">Become A Leader</Button>
                                            }
                                            {over8 ||
                                                <Button
                                                    onMouseOut={() => {
                                                        setOver8(!over8)
                                                    }}
                                                    onClick={() => { pay("Leader Live Chat") }}
                                                    style={{ backgroundColor: 'white', color: '#9698D6', border: '1px solid #9698D6', width: '124px' }} className="rounded-pill buttomEigth buttom" alt="150x75" variant="primary">Leader</Button>
                                            }
                                        </div>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                </div>

                <div className="col-sm-6 col-md-6 col-lg-4 col-xs-12 mb-4">
                    <div className="offsetCard cardAll"  >
                        <Card

                            // ref={ref}
                            onClick={() => { pay("All In One") }}
                            className="cardAll" border="white">
                            <div className="cardTopNine" >
                                <div className="container mt-2" style={{ height: 'inherit' }}>
                                    <div className="row" >
                                        <div className="col-9">
                                        </div>
                                        <div className="col-3">
                                            <Button className="buttonCapture" variant="light">9$</Button>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col align-self-center" >
                                            <Card.Img variant="top" src={Group} className="imgOne" />
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <Card.Body style={{ height: '12rem' }} className="cardBody">
                                <div className="container mb-2" >
                                    <div className="row" style={{ height: '7rem' }}>
                                        <div className="col-2">
                                            <img src={leaderNew} style={{ height: '30px', width: '30px' }} />
                                        </div>
                                        <div className="col-10 text">
                                            <Card.Title className="mt-2 cardTitle">All In One</Card.Title>
                                            <Card.Text className="text">
                                                Chat Bot System For Live Chat Converstations Saved
                                        </Card.Text>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            {!over9 ||
                                                <Button
                                                    onMouseEnter={() => {
                                                        setOver9(!over9)
                                                    }}
                                                    // onClick={() => { pay("All In One") }}
                                                    className="rounded-pill buttomNine buttom" alt="150x75" variant="primary">Become A Leader</Button>
                                            }
                                            {over9 ||
                                                <Button
                                                    onMouseOut={() => {
                                                        setOver9(!over9)
                                                    }}
                                                    // onClick={() => { pay("All In One") }}
                                                    style={{ backgroundColor: 'white', color: '#007FFF', border: '1px solid #007FFF', width: '124px' }} className="rounded-pill buttomEigth buttom" alt="150x75" variant="primary">Leader</Button>
                                            }
                                        </div>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </div>


                </div>


            </div>
            {/* </div> */}

            {/* <div class="d-flex justify-content-center flex-nowrap card1"> */}



            {/* </div> */}


            {/* <div className="d-flex justify-content flex-nowrap card1"> */}


            {/* </div> */}

            {/* <div className="cardTopOne leaderImg" style={style}>
                                <div className="container mt-2 " >

                                <div className="row" >
                                        <div className="col-9">
                                        </div>
                                        <div className="col-3">
                                            <Button className="buttonCapture" variant="light">29$</Button>
                                        </div>
                                    </div>

                                </div> */}
            {/* <div className="container mt-2 leaderImg" style={style}>
                                    dsf

                            </div> */}

            {/* </div> */}


        </>
    );

}