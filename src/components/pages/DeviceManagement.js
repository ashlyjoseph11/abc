import React, {useEffect} from 'react';
import axios from "axios";
import { useState } from 'react';
import { Table } from 'react-bootstrap';


const trStyle = {
    textAlign : "center",

}



const fdivStyle = {
    display : "inline-flex",
    width : "max-content",
}

const dummy_data = {
  "electricMeterId":"eme_007",
  "electricMeterName":"eme_1",
  "location":"cahill",
  "manufacturer":"nxp",
  "model":"bmw",
  "electricCapacity":"23",
  "installationMethod":"222",
  "meausurementAccuracy":"66",
  "dimensions":"2019",
  "deploymentDate":"2019",
  "installationDate":"2020",
  "power":"222"
}




export const DeviceManagement = () => {
    
    let [meterdetails, setMeterdetails] = useState([]);
    let [showsubmit, setshowSubmit] = useState(false);
    let [isdisabled, setisDisabled] = useState(true);
    let [hideform, setHideform] = useState(true);
    const noneStyle = {display: 'none'}
    const blockstyle = {
      "display": "grid",
      "grid-template-columns" : "auto auto auto auto auto auto",
      "grid-template-rows" : "auto auto auto auto",
      "max-width": "max-content"
    }
    
    //parameters for viewing device's details
    const [_id,setId] = useState("");
    const [electricMeterId, setelectricMeterId] = useState("");
    const [electricMeterName, setelectricMeterName] = useState("");
    const [location, setlocation] = useState("");
    const [manufacturer, setmanufacturer] = useState("");
    const [model, setmodel] = useState("");
    const [electricCapacity, setelectricCapacity] = useState("");
    const [installationMethod, setinstallationMethod] = useState("");
    const [meausurementAccuracy, setmeausurementAccuracy] = useState("");
    const [dimensions, setdimensions] = useState("");
    const [deploymentDate, setdeploymentDate] = useState("");
    const [installationDate, setinstallationDate] = useState("");
    const [power, setPower] = useState("");

    //parameters for updating device's details
    // const [newelectricMeterId, setnewelectricMeterId] = useState("");
    // const [newelectricMeterName, setnewelectricMeterName] = useState("");
    // const [newlocation, setnewlocation] = useState("");
    // const [newmanufacturer, setnewmanufacturer] = useState("");
    // const [newmodel, setnewmodel] = useState("");
    // const [newelectricCapacity, setnewelectricCapacity] = useState("");
    // const [newinstallationMethod, setnewinstallationMethod] = useState("");
    // const [newmeausurementAccuracy, setnewmeausurementAccuracy] = useState("");
    // const [newdimensions, setnewdimensions] = useState("");
    // const [newdeploymentDate, setnewdeploymentDate] = useState("");
    // const [newinstallationDate, setnewinstallationDate] = useState("");
    // const [newpower, setnewPower] = useState("");

    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
        axios.get("http://localhost:3001/api/fan/getAllMeters").
        then(async (res) => {
            console.log("success", res);
            if (res.status == 200) {
              if (res) {
                console.log(res.data.meters);
                setMeterdetails(res.data.meters);
                console.log(meterdetails);
              }            
            }
            else {
                console.log(res.status);
            }
          }).catch((err) => {
            console.log(err)
          });

      }, []);

      const view = (id) => {
        console.log(id);
        setHideform(false);
        setisDisabled(true);
        setshowSubmit(false);

        axios.get("http://localhost:3001/api/fan/getMeterById?id="+id).
        then(async (res) => {
            if (res.status == 200) {
                if (res) {
                    console.log(res.data.meters.meter);
                    let Meter = res.data.meters.meter;
                    setId(Meter._id);
                    setelectricMeterId(Meter.electricMeterId);
                    setelectricMeterName(Meter.electricMeterName);
                    setelectricCapacity(Meter.electricCapacity);
                    setlocation(Meter.location);
                    setmanufacturer(Meter.manufacturer);
                    setinstallationMethod(Meter.installationMethod);
                    setinstallationDate(Meter.installationDate);
                    setPower(Meter.power);
                    setmeausurementAccuracy(Meter.meausurementAccuracy);
                    setdeploymentDate(Meter.deploymentDate);
                    setdimensions(Meter.dimensions);
                    setmodel(Meter.model);
                }            
              }
              else {
                  console.log(res.status);
              }
        }).catch((err)=> {
            console.log(err);
        });

      }

      const update = (id) => {
        console.log(id);
        view(id);
        setisDisabled(false);
        setHideform(false);
        setshowSubmit(true);
        updatedata(id);        
      }

      const updatedata = (id) =>{
        console.log(id);
      }

      const removedata = (id) => {
    
        console.log(id);
        setHideform(true);

        axios.get("http://localhost:3001/api/fan/deleteMeter?id="+id).
        then(async (res) => {
            console.log("success", res);
            if (res.status == 200) {
              if (res) {
                console.log(res.data.user.oldMeter.deletedCount);
                window.location.reload(false);
              }            
            }
            else {
                console.log(res.status);
            }
          }).catch((err) => {
            console.log(err)
          });

      }

      const addmeter = (e) => {
        axios.post("http://localhost:3001/api/fan/addMeterdetails",dummy_data).then(async (res) => {
            if (res.status === 200) {
              if (res) {                
                console.log(res.data.meter.newmeter);
                window.location.reload(false);
            }
          }
          else{
            console.log(res.status);
          }
        }).catch((err) => {
            console.log(err)
          });
      }

    return(
        <>        
        <div className="text-left">
            <h5>Device List</h5>
            <Table table borderless>
                <thead>
                <tr>
                    <th className='light-grey'>Device ID</th>                    
                    <th className='light-grey'>Device Name</th>                       
                    <th className='light-grey'>View</th>
                    <th className='light-grey'>Update</th>
                    <th className='light-grey'>Delete</th>                    
                </tr>
                </thead>
                
                {meterdetails.map((data) => (
                    <tr style = {trStyle}>
                        <td>{data.electricMeterId}</td>
                        <td>{data.electricMeterName}</td>
                        <td><button onClick={ () => view(data._id) }>View</button></td>
                        <td><button onClick={ () => update(data._id) }>Update</button></td>
                        <td><button onClick={ () => removedata(data._id) }>Delete</button></td>
                    </tr>
                ))}                                    
            </Table>
        </div>
        <button style = {{width : 'fit-content'}} onClick={addmeter}>Add a Device + </button>
        <form style = {hideform ? noneStyle:blockstyle}>
            <div><label>Device Name:</label></div>
            <div><input name = "dname" value = {electricMeterName} disabled = {isdisabled}/></div>
            <div><label>Device ID:</label></div>
            <div><input name = "did" value = {electricMeterId} disabled/></div>
            <div><label>Manufacturer:</label></div>
            <div><input name = "dman" value = {manufacturer} disabled = {isdisabled}/></div>
            <div><label>Location:</label></div>
            <div><input name = "dloc" value = {location} disabled = {isdisabled}/></div>
            <div><label>Model:</label></div>
            <div><input name = "dmodel" value = {model} disabled = {isdisabled}/></div>
            <div><label>Amperage Capacity:</label></div>
            <div><input name = "dacap" value = {electricCapacity} disabled = {isdisabled}/></div>
            <div><label>Installation Method:</label></div>
            <div><input name = "dins" value = {installationMethod} disabled = {isdisabled}/></div>
            <div><label>Measurement Accuracy:</label></div>
            <div><input name = "dmeaacc" value = {meausurementAccuracy} disabled = {isdisabled}/></div>
            <div><label>Installation Date:</label></div>
            <div><input name = "dins" value = {installationDate} disabled = {isdisabled}/></div>
            <div><label>Dimensions:</label></div>
            <div><input name = "ddime" value = {dimensions} disabled = {isdisabled}/></div>
            <div><label>Deployment Date:</label></div>
            <div><input name = "ddep" value = {deploymentDate} disabled = {isdisabled}/></div>
            <div><label>Power:</label></div>
            <div><input name = "dpower" value = {power} disabled = {isdisabled}/></div>
            <button style = {showsubmit ? blockstyle:noneStyle}>Submit</button>
        </form>
        </>
    )
}