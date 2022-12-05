const express = require('express');

const User = require('../model/user');
const { response } = require('../index.js');
const { SimulatedServices } = require('../services/simulatedServices.js');
const { SimulatedLightServices } = require('../services/SimulatedLightServices.js');
const router = express.Router();


router.get('/getSimulatedDetails', async (req, res) => {
    let data = req.query;
    const response = {};
    try {
      let result = await SimulatedServices.getSimulatedDetails(data);
      
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });

  router.post('/addSimulateddetails', async (req, res) => {
    //const data = req.body;
    console.log('here.....');
    let data = req.body;
    const response = {};
    try {
        console.log(data);
        let result = await SimulatedServices.addSimulateddetails(data);   
      console.log(result);
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });
 //also write code for get light by id.
  router.get('/getSimulatedLights', async (req, res) => {
    let data = req.query.user_id;
    const response = {};
    try {
      let result = await SimulatedLightServices.getSimulatedLights(data);
      
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });

  router.post('/addSimulatedLight', async (req, res) => {
    //const data = req.body;
    console.log('here.....');
    let data = req.body;
    const response = {};
    try {
        console.log(data);
        let result = await SimulatedLightServices.addSimulatedLight(data);   
      console.log("result:"+result);
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });

  //
  router.post('/updateSimulatedLight', async (req, res) => {
    const  {id}  = req.query;
    const data = req.body;
    const response = {};
    try {
        let result = await SimulatedLightServices.updateSimulatedLight(id,data);   
      if (result) {
        response.success = true;
        response.user = result;
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'cannot update ';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  });


  router.patch('/updateWorkingStatus', async (req, res) => {
    //const data = req.body;
    let data = req.query;
    console.log('here.....');
    //let data = req.body;
    const response = {};
    try {
      //  console.log(data);
        let result = await SimulatedLightServices.updateWorkingStatus(data,req.body);   
   //   console.log(result);
      if (result) {
        response.success = true;
        response.user = "Working status of the ** is sucessfully updated";
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  }); 


  router.patch('/updateEfficacy', async (req, res) => {
    //const data = req.body;
    let data = req.query;
    console.log('here.....');
    //let data = req.body;
    const response = {};
    try {
      //  console.log(data);
        let result = await SimulatedLightServices.updateEfficacy(data,req.body);   
   //   console.log(result);
      if (result) {
        response.success = true;
        response.user = "Luminous efficacy of the light is sucessfully updated";
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  }); 

  router.patch('/updateFlux', async (req, res) => {
    //const data = req.body;
    let data = req.query;
    console.log('here.....');
    //let data = req.body;
    const response = {};
    try {
      //  console.log(data);
        let result = await SimulatedLightServices.updateFlux(data,req.body);   
   //   console.log(result);
      if (result) {
        response.success = true;
        response.user = "Luminous flux of the light is sucessfully updated";
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  }); 


  router.patch('/updateIntensity', async (req, res) => {
    //const data = req.body;
    let data = req.query;
    console.log('here.....');
    //let data = req.body;
    const response = {};
    try {
      //  console.log(data);
        let result = await SimulatedLightServices.updateIntensity(data,req.body);   
   //   console.log(result);
      if (result) {
        response.success = true;
        response.user = "Luminous Intensity of the light is sucessfully updated";
        response.status = '200';
        res.status(200).send(response);
      } else {
        response.success = false;
        response.error = 'some error occured...';
        response.status = '400';
        res.status(400).send(response);
      }
    } catch (e) {
      console.log(e);
      response.success = false;
      response.error = 'Some error occurred. Please try again later';
      response.status = '500';
      res.status(500).send(response);
    }
  }); 

  module.exports = router;