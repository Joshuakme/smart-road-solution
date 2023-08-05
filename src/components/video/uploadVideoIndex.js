import React from "react";
import database from "../firebaseConfig/index";
import {ref, set, onValue} from "firebase/database";
import UploadVideoView from "./uploadVideoView";

export class UploadTraffic extends React.Component{
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
          <UploadVideoView
            state={this.state}
            handleInputChange={(e, key) => this.setState({ [key]: e.target.value })}
            handleButtonClick={this.interface}
          />
        );
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

export default UploadTraffic;