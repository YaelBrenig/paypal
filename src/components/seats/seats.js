import React from 'react';
export default () => {
    return (
        <>
            <div class="row d-flex justify-content-around" style={{background: '#adb5bd', marginRight: '17%', marginLeft: '17%', marginTop: '5%'}} >
                <div className="col">
                    <div style={{ fontWeight: 'bold', border:'1px solid pink'}}>5 seats</div>
                </div>
                <div className="col">
                    <div style={{ fontWeight: 'bold', border:'1px solid red'}}>10 seats</div>
                </div>
                <div className="col">
                    <div style={{ fontWeight: 'bold', border:'1px solid yellow' }}>25 seats</div>
                </div>
            </div>
        </>
    );

}