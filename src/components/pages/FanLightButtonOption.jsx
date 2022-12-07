import React from 'react'
import '../../styles/Buttons.css'
import { useState } from 'react'
import { MonitorTracking } from './MonitorTracking'
import { WaterMeterMonitorTracking } from './WaterMeterMonitorTracking'
import { Fan } from './Fan'
import { Light } from './Light'

export const FanLightButtonOption = () => {
    const [meter, setMeter] = useState('');

    return (

        <div className="table-wrapper">
            <br></br>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <button className='light-grey' style={buttonStyle} onClick={(e) => setMeter('electric')} >
                    Fan
                </button>
                <button className='light-grey' style={buttonStyle} onClick={(e) => setMeter('water')}>
                    Light
                </button>
            </div>
            {meter === 'electric' && <Fan />}
            {meter === 'water' && <Light />}

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