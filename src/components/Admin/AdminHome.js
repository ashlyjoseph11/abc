import React from 'react'
import Map from './Map'
import SjsuMap from '../../assets/images/SjsuMap.png'
import '../../styles/device.css'

export const AdminHome = () => {

   return (
    <div>
      <div className='sjsu'>
      <img src = {SjsuMap} width="800px" height="600px"  alt="SJSU"></img> <br/>
      </div> 
      <div>     
      <h3>Active IoT Stations</h3><br/>      
      <h4><span class="logged-in">●</span> LIB </h4>
      <h4><span class="logged-in">●</span> SCI </h4>
      <h4><span class="logged-in">●</span> ENG </h4>
      <h4><span class="logged-in">●</span> SPT </h4>
      <h4><span class="logged-in">●</span> PKG </h4>
      <h4><span class="logged-in">●</span> SVC </h4>
      <Map/>
      </div>
    </div>
  )
}
