import React from "react";
import database from "../firebaseConfig/index";
// import { getDatabase, ref, set, get, child } from "firebase/database";
import {ref, set, onValue} from "firebase/database";
import TrafficView from "./trafficView";

export class RealTimeTrafficData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            db: database,
            traffic:"",
            reason: "",
            totalCar: "",
            trafficData: []
        };
        // Bind the interface function to the class instance
        this.interface = this.interface.bind(this);
    }

    componentDidMount() {
        const dbRef = ref(database, 'Traffic');
        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot =>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data":data});
            });
            this.setState({trafficData: records})
        })
      }

      render() {
        return (
          <TrafficView
            state={this.state}
            handleInputChange={(e, key) => this.setState({ [key]: e.target.value })}
            handleButtonClick={this.interface}
          />
        );
             
        // this.state.trafficData.map((row,index)=>{
        //     return(
        //         <tr>
        //             <td>{index}</td>
        //             <td>{row.key}</td>
        //             <td>{row.data.Reason}</td>
        //             <td>{row.data.TotalCar}</td>
        //         </tr>
        //     )
        // }) 
    }

    interface(event){
        const id = event.target.id;

        if(id == 'insertBtn'){
            this.insertData();
        }
    }

    insertData() {
        const data = {
            traffic: this.state.traffic,
            reason: this.state.reason,
            totalCar: this.state.totalCar
        };
    
        if (!data.traffic) {
            alert("Please enter valid traffic data.");
            return;
        }
    
        const dbRef = ref(database, 'Traffic/' + data.traffic);
    
        set(dbRef, {
            Reason: data.reason,
            TotalCar: data.totalCar
        })
        .then(() => { alert('data was added successfully'); })
        .catch((error) => { alert("There was an error, details: " + error); });
    }    
}

export default RealTimeTrafficData;