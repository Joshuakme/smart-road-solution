import React from 'react';
import VideoInput from "./videoInput";
import "./videoStyles.css";

const UploadVideoView = ({ state, handleInputChange, handleButtonClick }) => {
    return (
        <>
            <br></br>
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

            <div className="video">
                <label>Video Upload:</label>
                <VideoInput width={400} height={300} />
            </div>
            <br></br><br></br>

            <center><button id="insertBtn" onClick={handleButtonClick}>Upload Data</button></center>
        </>
    );
}

export default UploadVideoView;