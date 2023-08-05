import React from 'react';

const UploadVideoView = ({ state, handleInputChange, handleButtonClick }) => {
    return (
        <>
            <label>Enter Traffic:</label>
            <input type='text' id="trafficBox" value={state.traffic}
                onChange={e => handleInputChange(e, 'traffic')}></input>
            <br></br><br></br>

            <label>Enter Reason:</label>
            <input type='text' id="reasonBox" value={state.reason}
                onChange={e => handleInputChange(e, 'reason')}></input>
            <br></br><br></br>

            <label>Enter Total Number of Cars:</label>
            <input type='number' id="totalCarBox" value={state.totalCar} pattern='[0-3]'
                onChange={e => handleInputChange(e, 'totalCar')}></input>
            <br></br><br></br>

            <button id="insertBtn" onClick={handleButtonClick}>Upload Data</button>
        </>
    );
}

export default UploadVideoView;