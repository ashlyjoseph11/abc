import React from 'react'
import '../../../styles/Buttons.css'
import { useState } from 'react'
import { FanDeviceManagement } from './FanDeviceManagement'
import { LightDeviceManagement } from './LightDeviceManagement'

export const IotButtonOptions = () => {
  const [iot, setiot] = useState('');
  return (

    <div className="table-wrapper">
      <br></br>
      <div style={{ display: 'flex', justifyContent: "center" }}>
        <button className='light-grey' style={buttonStyle} onClick={(e) => setiot('fan')}>
          Fan
        </button>
        <button className='light-grey' style={buttonStyle} onClick={(e) => setiot('light')}>
          Light
        </button>
      </div>
      {iot === 'fan' && <FanDeviceManagement/>}
      {iot === 'light' && <LightDeviceManagement/>}
    </div>
  )
}
const buttonStyle = {
  border: "1px solid rgba(0, 0, 0, 0.5)",
  fontSize: "15px",
  width: "10em",
  color: 'white',
  background: "teal",
  padding: "10px"
}
