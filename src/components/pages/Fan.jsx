import React, { useEffect, useState } from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import fan from '../../assets/images/fan.jpg'

const parameters = [
  {title : "Work Status:",
  paddingTop: ""}, 
  {title : "Fan Speed:",
  paddingTop: ""},
  {title : "Speed Number:",
  paddingTop: "10px"},
  {title : "Rotation Pattern:",
  paddingTop: "23px"},
  {title : "Voltage:",
  paddingTop: "18px"},
  {title : "Current:",
  paddingTop: "18px"},

]   
    


export const data = [
  [
    "Day",
    "MIC- 2-Ststem Apparent Power",
    "Senior DG3- Apparent Power",
    "Senior DG 2 - Apparent Power",
  ],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
  [9, 16.9, 42.9, 14.8],
  [10, 12.8, 30.9, 11.6],
  [11, 5.3, 7.9, 4.7],
  [12, 6.6, 8.4, 5.2],
  [13, 4.8, 6.3, 3.6],
  [14, 4.2, 6.2, 3.4],
];

export const options = {
  chart: {
    title: "31 days ",
    subtitle: "7 days",
  },
};

const meterStyle = {
  
}
const meterListStyle = {
  display: "inline-grid",
  textAlign: "center",
  fontWeight: "600"
}
const detailsWrap = {
  display: "inline-flex",
  marginLeft: "10em"
}
const para = {
  marginTop: '8em'
}

export const Fan = () => {

const [electricMeterUser , setElectricMeterUser] = useState([]);
const userid = localStorage.getItem("id");


useEffect(() => {
  axios.get("http://localhost:3001/api/simulatedfan/getSimulatedFans?user_id=" + userid).
  then(async (res) => {
      if (res.status == 200) {
        if (res) {
          setElectricMeterUser(res.data.user);
        }            
      }
      else {
          console.log(res.status);
      }
    }).catch((err) => {
      console.log(err)
    });

}, []);
  return (

    <>
      <div className="details-wrapper" style={detailsWrap}>
        <div className="parameter" style={para}>
          <ol style={meterStyle}>
            {parameters.map((data) => (
              <li style={{paddingTop: data.paddingTop, fontWeight: "600"}}>{data.title}</li>
            ))}

          </ol>
        </div>  
        <div className="meter-details-1">
          <ol>
            {electricMeterUser.map((data) => (
              <li style={meterListStyle}>
                <span style={{ background: 'lightgray', boxShadow: "5px 5px #888888" }} >{data.fan_name}</span>
                <img style={{ marginTop: "16px", marginLeft: "60px" }} width="60" src={fan} alt="alt" />
                <span style={data.work_status === "true" ? { color: 'green' } : { color: 'red' }} >{data.work_status ==  "true" ? "Working": "Failing"}</span>
                <span>{data.Fan_Speed}</span>
                <span>{data.Speed_Number}</span>
                <span>{data.Rotation_Pattern}</span>
                <span>{data.Voltage}</span>
                <span>{data.Current}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Chart
        chartType="Line"
        width="78em"
        height="300px"
        style={{ position: 'relative', left: '10em' }}
        data={data}
        options={options}
      />
    </>
  );
}
