import React, { useEffect } from 'react'
import axios from "axios";
import '../../styles/Buttons.css'
import Table from 'react-bootstrap/Table'
import energy from '../../assets/images/energy-meter-icon.png'
import water from '../../assets/images/water-meter-icon.png'
import ToggleSwitch from '../ToggleSwitch'
import settings from '../../assets/images/settings-icon.png'
import Box from '@mui/material/Box'
import { useState } from 'react'

const buttonStyle = {
  border:"1px solid rgba(0, 0, 0, 0.5)",
  fontSize:"15px" ,
  width:"10em",
  color: 'white',
  background: "teal",
  padding: "10px"
}

function ControlMeter() {

  const [meterList, setMeterList] = useState([]);
  const [meter, setMeter] = useState('Electricity');
  const [setting, setSetting] = useState('');
  const [type, setType] = useState('TCP/IP')
  const [data, setData] = useState('30 seconds')
  const [load, setLoad] = useState('AC Loads')
  const userId= localStorage.getItem("id");


  useEffect(() => {
    axios.get("http://localhost:3001/api/meter/getMeterDetails?userId=" + userId).
    then(async (res) => {
        if (res.status == 200) {
          if (res) {
            setMeterList(res.data.user);
            console.log();
          }            
        }
        else {
            console.log(res.status);
        }
      }).catch((err) => {
        console.log(err)
      });


  }, [])

  return (

    
    <div className="table-wr  apper">
      <br></br>
      <div style={{display:'flex', justifyContent: "center"}}>
      <button className='light-grey' style={buttonStyle} onClick={(e) => setMeter('Electricity')}>
        Electricity Meter
      </button>
      {/* <button className='light-grey' style={{ border:"1px solid rgba(0, 0, 0, 0.5)",fontSize:"15px" ,width:"100px", color: 'green' }} onClick={(e) => setMeter('Water')}>
        Water Meter
      </button> */}
      </div>
      <br></br>
      <Box textAlign="center" bgcolor="#D3D3D3" border="1px solid rgba(0, 0, 0, 0.12)" padding="10px 10px" width="20%" > <h6>Device List</h6></Box>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Device Name</th>
            <th>Active/Deactive</th>
            <th>Start/Stop</th>
            <th>Connect to cloud</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {meterList.map((item) => (
          <tr key={item._id}>
            <td><img width="30" src={meter ==='Electricity'? energy : water}/>{item.electricMeterId}</td>
            <td>{item.electricMeterName}</td>
            <td><ToggleSwitch activeStatus={item.activeStatus} meterId = {item._id}/></td>
            <td><ToggleSwitch activeStatus={item.workingStatus} meterId = {item._id}/></td>
            <td><ToggleSwitch activeStatus={item.cloudStatus} meterId = {item._id}/></td>
            <td> <img width="30" src={settings} onClick={(s) => setSetting('setting')}/></td>
          </tr>
        ))}
          </tbody>
      </Table>
      <br></br>
      {setting==='setting'?
      <div>
        <Box textAlign="center" bgcolor="#D3D3D3" border="1px solid rgba(0, 0, 0, 0.12)" padding="10px 10px" width="20%" > <h6>Configuration</h6></Box>
        <div style={{display:'flex', justifyContent: "center"}}>
          <label htmlFor="type">
            Select Communication Protocol
            <br></br>
            <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value = "Empty"></option>
              <option value="TCP">TCP/IP</option>
              <option value="Arrival">UDP</option>
            </select>
          </label>
          <label htmlFor="type">
            Select Data Reporting Intervals
            <br></br>
            <select id="type" value={data} onChange={(e) => setData(e.target.value)}>
              <option value = "Empty"></option>
              <option value="30">30 seconds</option>
              <option value="60">60 seconds</option>
            </select>
          </label>
          <label htmlFor="type">
            Select Electronic Loads
            <br></br>
            <select id="type" value={load} onChange={(e) => setLoad(e.target.value)}>
              <option value = "Empty"></option>
              <option value="AC">AC Loads</option>
              <option value="DC">DC Loads</option>
            </select>
          </label>
        </div>
        <div style={{display:'flex', justifyContent: "center"}}><button className='light-grey' style={{border:"1px solid rgba(0, 0, 0, 0.5)",fontSize:"15px" ,width:"100px", color: 'black'}}><h6>Confirm</h6></button></div>
      </div>
      :null}

    </div>
  )
}

export default ControlMeter
