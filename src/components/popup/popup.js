import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import './popup.css'
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// npm install reactjs-popup --save


export default () => {

    const [degel, setDegel] = useState(true);
    const [url, setUrl] = useState(window.location);


    useEffect(() => {
        // if (degel) {
        //     window.location.href = setUrl("localhost:3000")

        // }

    })
    return (
        <Popup
            // trigger={<h1 className="button"> s </h1>}
            modal
            nested
            open={true}
            className="pop"
        >
            {close => (
                <div className="modal1">
                    {/* <button className="close" > */}
                    {/* &times; */}
                    {/* </button> */}
                    <div className="header"> Dear user</div>
                    <div className="content">

                        <h5 className="App">
                            Are you sure you want to unsubscribe?
            </h5>
                    </div>
                    <div className="actions">
                        <button style={{ width: '100px' }} className="btn btn-primary mr-4"
                            onClick={close}>
                            NO
                         </button>

                        <button
                            style={{ width: '100px' }} className="btn btn-primary">YES</button>
                    </div>
                </div>
            )}

        </Popup >
    );
}