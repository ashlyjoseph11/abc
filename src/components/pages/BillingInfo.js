import React from 'react'
import '../../styles/Buttons.css'
import Table from 'react-bootstrap/Table'
import energy from '../../assets/images/energy-meter-icon.png'
import water from '../../assets/images/water-meter-icon.png'
import ToggleSwitch from '../ToggleSwitch'
import settings from '../../assets/images/settings-icon.png'
import Box from '@mui/material/Box'
import { useState } from 'react'
import ControlMeter from './ControlMeter'
import BillingTable from './BillingTable'
import { Link } from 'react-router-dom'

export const BillingInfo = () => {
  const [meter, setMeter] = useState('');
  return (
    
    <div className="table-wrapper" >
      <br></br>
      <h2>Billing Information</h2>
      <div style={{ display: "flex" }}>
        <h4>Device List</h4>
      </div>

      <BillingTable></BillingTable>
      

      <br></br>
      
      
      <Link to="/bill-payment">
      <div style={{ display: "flex" }}>
          <button
              style={{ marginLeft: "auto", backgroundColor:'teal' , fontSize: '18px', 
              width:'10em', color: 'white', borderRadius:'5px', padding: "10px"}}
            >
              Next
            </button>
            </div>
        </Link>
       
      
      {/* <div style={{display:'flex', justifyContent: "center"}}>
      <button disabled={true} style={{fontSize:"15px" ,width:"100px", color:"green" }} onClick={(e) => setMeter('iot')}>
        IOT
      </button>
      <button style={{fontSize:"15px" ,width:"100px", color: "green" }} onClick={(e) => setMeter('meter')}>
        Meter
      </button>
      </div>
      {meter === 'meter'?<ControlMeter/>:null} */}
      
    </div>
  )
}

