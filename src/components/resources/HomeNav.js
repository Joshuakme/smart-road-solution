// import Nav from 'react-bootstrap/Nav';

// export const HomeNav = () => {
//   return (
//     <Nav justify variant="tabs" defaultActiveKey="/home">
//       <Nav.Item>
//         <Nav.Link href="/home">Home</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Traffic</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-2">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="disabled" disabled>
//           Disabled
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default HomeNav;

// import React, { useState } from 'react';
// import { RealTimeTrafficData } from './components/trafficRealtime/trafficIndex';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';

// function App() {
//   const [activeTab, setActiveTab] = useState('home');

//   const handleTabChange = (eventKey) => {
//     setActiveTab(eventKey);
//   };

//   return (
//     <>
//       <Nav justify variant="tabs" activeKey={activeTab} onSelect={handleTabChange}>
//         <Nav.Item>
//           <Nav.Link eventKey="home">Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="traffic">Traffic</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="disabled" disabled>
//             Disabled
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>

//       {/* Conditionally render the RealTimeTrafficData component when the active tab is 'traffic' */}
//       {activeTab === 'traffic' && <RealTimeTrafficData />}
//     </>
//   );
// }

// export default App;