const { type } = require("express/lib/response");
const Fan = require("../model/fan");
const { default: mongoose } = require("mongoose");

class FanServices {


            
        static getFandetails = async (data) => {
            console.log(data)
                try {
                  //  const foundFans = await Fan.findById(id); 
                  //let foundFans = await Fan.find(id.userId);
                  const query = {
                    userId : data.userId,                             
            }
        let foundFans = await Fan.find({"userId": query["userId"] });  

                    if(foundFans != [])
                    {
                        console.log(foundFans);
                        return foundFans;
                    }
                    else{
                        console.log('no user found');
                    }
                    
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while logging in")
                }
        }


        static updateFanDetails = async (id,data) => {
            try {
                const query = { 
                    _id: id
                };
                
                const updatedFan = await Fan.findOneAndUpdate(query,data);
        
                if(updatedFan)
                {
                    return { updatedFan }
                }
                                   
            }
            catch(err){
                    console.log(err);
                    console.log("Some unexpected error occured while updating fan")
            }
        }
            // we dont have a ctrl api for this yet we are confused if we will use post or put or patch....
            static deleteFandetails = async (data) => {
                try {
                    const query = { 
                        _id: data.id
                    };
                    
                    const oldFan = await Fan.remove(query);
            
                    console.log(oldFan)
                    return {oldFan};
                                       
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while deleting electric meter")
                }
            }

        // this above api is working fone but is showing error messages and then is executing the query.
        /**
         * output is :
        { fanId: '1' }
        MongooseError: Query was already executed: Fan.deleteOne({ fanId: 1 })
        at model.Query._wrappedThunk [as _deleteOne] (C:\Users\Home\Desktop\smart_meter\smart-meter\be\node_modules\mongoose\lib\helpers\query\wrapThunk.js:23:19)
        at C:\Users\Home\Desktop\smart_meter\smart-meter\be\node_modules\kareem\index.js:426:25
        at processTicksAndRejections (node:internal/process/task_queues:78:11) {
        originalStack: 'Error\n' +
        '    at model.Query._wrappedThunk [as _deleteOne] (C:\\Users\\Home\\Desktop\\smart_meter\\smart-meter\\be\\node_modules\\mongoose\\lib\\helpers\\query\\wrapThunk.js:27:28)\n' +
        '    at C:\\Users\\Home\\Desktop\\smart_meter\\smart-meter\\be\\node_modules\\kareem\\index.js:426:25\n' +
        '    at processTicksAndRejections (node:internal/process/task_queues:78:11)'
        }
        Some unexpected error occured while logging in
        result:undefined
        res:[object Object]
         * 
         */

            static addFandetails = async (data) => {
                console.log(data)
                    try {
                            const newvalues = { 
                              fanId : data.fanId,
                              fanName: data.fanName,
                              marker: data.marker,
                              model: data.model,
                              location: data.location,
                              speed: data.speed,
                              weight: data.weight,
                              dimensions: data.dimesions,
                              design: data.design,
                              deploymentDate: data.deploymentDate,
                              installationDate: data.installationDate,
                              power: data.power,
                              cloudStatus: data.cloudStatus,
                              workingStatus: data.workingStatus,
                              activeStatus: data.activeStatus,
                              monthlyUsage: data.monthlyUsage,
                              weeklyUsage: data.weeklyUsage,
                              userId: data.userId
                        };
                        const newFan = new Fan(data);
                        await newFan.save()
                        return {newFan};                   
                    }
                    catch(err){
                            console.log(err);
                            console.log("Some unexpected error occured while logging in")
                    }
            }




            static updateFanCloudStatus = async (data,reqbody) => {
                //  console.log(data)
                      try {
                  
                              var query = { id : data.id };
                              var newvalues = {cloudStatus: reqbody.cloudStatus};
  
                              let updatedFan = await Fan.findOneAndUpdate(query, newvalues); 
                              console.log(updatedFan);        
                              console.log("ashly");         
   
                                  if(updatedFan)
                                  {
                                      console.log(updatedFan);
                                      return updatedFan;
                                  }
                                  else{
                                       //   console.log(updatedFan);
                                  }                        
                              }
                      catch(err){
                            //  console.log(err);
                            //  console.log("Some unexpected error occured while logging in")
                      }
              }
              static updateWorkingStatus = async (data,reqbody) => {
                //  console.log(data)
                      try {
                  
                              var query = { id : data.id };
                              var newvalues = {workingStatus: reqbody.workingStatus};
  
                              let updatedFan = await Fan.findOneAndUpdate(query, newvalues); 
                              console.log(updatedFan);        
   
                                  if(updatedFan)
                                  {
                                      console.log(updatedFan);
                                      return updatedFan;
                                  }
                                  else{
                                       //   console.log(updatedFan);
                                  }                        
                              }
                      catch(err){
                            //  console.log(err);
                            //  console.log("Some unexpected error occured while logging in")
                      }
              }
              
              static updateActiveStatus = async (data,reqbody) => {
                //  console.log(data)
                      try {
                  
                              var query = { id : data.id };
                              var newvalues = {activeStatus: reqbody.activeStatus};
  
                              let updatedFan = await Fan.findOneAndUpdate(query, newvalues); 
                              console.log(updatedFan);           
                                  if(updatedFan)
                                  {
                                      console.log(updatedFan);
                                      return updatedFan;
                                  }
                                  else{
                                       //   console.log(updatedFan);
                                  }                        
                              }
                      catch(err){
                            //  console.log(err);
                            //  console.log("Some unexpected error occured while logging in")
                      }
              }
}


module.exports.FanServices = FanServices;