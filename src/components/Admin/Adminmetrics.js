import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import GaugeChart from 'react-gauge-chart'
import Thermometer from 'react-thermometer-chart'
import { Line } from 'rc-progress';
import {IoBulbOutline} from 'react-icons/io5';

export const Adminmetrics = () => {
  return (
    <div className='text-left'>
    <Dropdown>
      <Dropdown.Toggle style={{width: "10em", background: "teal", color: "white"}} variant="success" id="dropdown-basic">
        SJSU buildings
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width: "10em", background: "teal", color: "white"}}>
        <Dropdown.Item style={{width: "10em", background: "teal", color: "white"}} >KING </Dropdown.Item>
        <Dropdown.Item style={{width: "10em", background: "teal", color: "white"}} >IRC</Dropdown.Item>
        <Dropdown.Item style={{width: "10em", background: "teal", color: "white"}}>ADM</Dropdown.Item>
        <Dropdown.Item style={{width: "10em", background: "teal", color: "white"}}>YUH</Dropdown.Item>
        <Dropdown.Item style={{width: "10em", background: "teal", color: "white"}}>SPC</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div style={{display: 'flex'}}>
      <div className='guage'>
      <span> Relative Humidity</span>
    <GaugeChart  
          animate={true} 
          nrOfLevels={10} 
          percent={0.70} 
          needleColor="#345243" 
          textColor={'black'}
        /> </div>
        <div className='guage'>
        <span> Temparature</span>
        <Thermometer width="100px" height="200px" steps={5} minValue={1000} maxValue={40000} currentValue={8500}> 
        </Thermometer> </div>
        <div className='guage' align="center">
          <br/>
        <span> Soil PH value</span>  <br/>        
        <p>4.6</p>
        <span>Acidic</span>   </div>
      </div>
  
      <div style={{display: 'flex'}}>
        <div className='guage'>
        <span> Soil Relative Humidity</span>
      <GaugeChart  
          animate={true} 
          nrOfLevels={10} 
          percent={0.65} 
          needleColor="#345243" 
          textColor={'black'}
        /> </div>
        <div className='guage'>
        <span> Luminosity</span> <br/>
        <Line percent={50} strokeWidth={8} strokeColor="yellow" /> 
        <IoBulbOutline style={{ fontSize: '50px' }}/></div>
        <div className='guage'>
        <span> Fan speed</span>
        <GaugeChart  
          animate={true} 
          nrOfLevels={10} 
          percent={0.40000} 
          needleColor="#345243" 
          textColor={'black'}
        /> </div>
    </div>
    </div>
  );
}


