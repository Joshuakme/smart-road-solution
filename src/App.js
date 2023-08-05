import { RealTimeTrafficData } from './components/trafficRealtime/trafficIndex';
import { UploadTraffic } from './components/video/uploadVideoIndex';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Nav from 'react-bootstrap/Nav';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <>
    <Nav justify variant="tabs" activeKey={activeTab} onSelect={handleTabChange}>
      <Nav.Item>
        <Nav.Link href="upload">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="traffic">Traffic</Nav.Link>
      </Nav.Item>
    </Nav>

      {activeTab === 'home' && <UploadTraffic />}
      {activeTab === 'traffic' && <RealTimeTrafficData />}
    </>
   
  );
}

export default App;
