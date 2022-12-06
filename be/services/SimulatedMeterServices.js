const simulated_meter = require("../model/simulated_meter");

class SimulatedMeterServices {

    static getSimulatedMeters = async(userid) => {
        console.log(userid)
                try {
                    let foundMeters = await simulated_meter.find({"userId": userid });
                    if(foundMeters != [])
                    {
                        console.log(foundMeters);
                        return foundMeters;
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


    
    static updateSimulatedMeter = async (id, data) => {
        try {
            const query = { 
                _id: id
            };
            
            const updatedMeter = await simulated_meter.findOneAndUpdate(query,data);

            if(updatedMeter)
            {
                return { updatedMeter }
            }
                               
        }
        catch(err){
                console.log(err);
                console.log("Some unexpected error occured while updating electric meter")
        }
    }

    static addSimulatedMeter = async (data) => {
        console.log(data)
        try {
            const newMeter = new simulated_meter(data);
            await newMeter.save()
            return {newMeter};
                               
        }
        catch(err){
                console.log(err);
                console.log("Some unexpected error occured while adding electric meter")
        }
    }


}







module.exports.SimulatedMeterServices = SimulatedMeterServices;
