import React from 'react'
import '../../styles/Buttons.css'
import { useState } from 'react'
import ControlMeter from './ControlMeter'
import ControlIOT from './ControlIOT'


export const ControlConfiguration = () => {
  const [meter, setMeter] = useState('');
  return (
    
    <div className="table-wrapper">
      <br></br>
      <div style={{display:'flex', justifyContent: "center"}}>
      <button className='light-grey' style={buttonStyle} onClick={(e) => setMeter('iot')}>
        IOT
      </button>
      <button className='light-grey' style={buttonStyle} onClick={(e) => setMeter('meter')}>
        Meter
      </button>
      </div>
      {meter === 'meter'?<ControlMeter/>:<ControlIOT/>}
      
    </div>
  )
}
const buttonStyle = {
  border:"1px solid rgba(0, 0, 0, 0.5)",
  fontSize:"15px" ,
  width:"10em",
  color: 'white',
  background: "teal",
  padding: "10px"
}

