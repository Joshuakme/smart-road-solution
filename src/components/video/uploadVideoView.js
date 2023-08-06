// import React from 'react';
// import VideoInput from "./videoInput";
// import "./videoStyles.css";

// const UploadVideoView = ({ state, handleInputChange, handleButtonClick }) => {
//     return (
//         <>
//             <br></br>
//             <label>Enter Lane:</label>
//             <input type='text' id="laneBox" value={state.lane}
//                 onChange={e => handleInputChange(e, 'lane')}></input>
//             <br></br><br></br>

//             <label>Enter Accident:</label>
//             <input type='text' id="accidentBox" value={state.accident}
//                 onChange={e => handleInputChange(e, 'accident')}></input>
//             <br></br><br></br>

//             <label>Enter Total Number of Car Crashes:</label>
//             <input type='number' id="totalCarCrashesBox" value={state.totalCarCrashes} pattern='[0-5]'
//                 onChange={e => handleInputChange(e, 'totalCarCrashes')}></input>
//             <br></br><br></br>

//             <div className="video">
//                 <label>Video Upload:</label>
//                 <VideoInput width={400} height={300} />
//             </div>
//             <br></br><br></br>

//             <center><button id="insertBtn" onClick={handleButtonClick}>Upload Data</button></center>
//         </>
//     );
// }

// export default UploadVideoView;