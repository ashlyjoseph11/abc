const simulated_light = require("../model/simulated_light");

class SimulatedLightServices {
    static getSimulatedLights = async(userid) => {
        console.log(userid)
                try {
                    let foundLights = await simulated_light.find({"userId": userid });
                    if(foundLights != [])
                    {
                        console.log(foundLights);
                        return foundLights;
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

    static addSimulatedLight = async (data) => {
        console.log(data)
        try {
            const newFan = new simulated_light(data);
            await newFan.save()
            return {newFan};
                               
        }
        catch(err){
                console.log(err);
                console.log("Some unexpected error occured while adding electric meter")
        }
    }

    static updateWorkingStatus = async (id, data) => {
        try {
            const query = { 
                _id: id
            };
            
            const updatedStatus = await simulated_light.findOneAndUpdate(query,data);

            if(updatedStatus)
            {
                return { updatedStatus }
            }
                               
        }
        catch(err){
                console.log(err);
                console.log("Some unexpected error occured while updating working status")
        }
    }


    static updateEfficacy = async (id, data) => {
        try {
            const query = { 
                _id: id
            };
            
            const updatedEfficacy = await simulated_light.findOneAndUpdate(query,data);

            if(updatedEfficacy)
            {
                return { updatedEfficacy }
            }
                               
        }
        catch(err){
                console.log(err);
                console.log("Some unexpected error occured while updating luminous efficacy")
        }
    }


    static updateFlux = async (id, data) => {
        try {
            const query = { 
                _id: id
            };
            
            const updatedFlux = await simulated_light.findOneAndUpdate(query,data);

            if(updatedFlux)
            {
                return { updatedFlux }
            }
                               
        }
        catch(err){
                console.log(err);
                console.log("Some unexpected error occured while updating luminous flux")
        }
    }


    static updateIntensity = async (id, data) => {
        try {
            const query = { 
                _id: id
            };
            
            const updateIntensity = await simulated_light.findOneAndUpdate(query,data);

            if(updateIntensity)
            {
                return { updateIntensity }
            }
                               
        }
        catch(err){
                console.log(err);
                console.log("Some unexpected error occured while updating luminous intensity")
        }
    }

}







module.exports.SimulatedLightServices = SimulatedLightServices;

/**
 * sample 
 * 
 {
    "light_name": "Light 001",
    "light_id": "lig001",
    "Voltage": "5V",
    "Current": "10A",
    "Luminious_Efficacy": "55",
    "Luminious_Flux": "0.9",
    "Luminious_Intensity": 1,
    "work_status": "true"
}
 */