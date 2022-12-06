const { type } = require("express/lib/response");
const ElectricMeter = require("../model/electricMeter");
const { default: mongoose } = require("mongoose");
const {SimulatedMeterServices} = require("./SimulatedMeterServices");

class MeterServices {

    static addMeterdetails = async (data) => {
        try {
            const query = { 
            electricMeterName : data.electricMeterName,
            marker: data.marker,
            marker: data.marker,
            model: data.model,
            location: data.location,
            electricCapacity: data.electricCapacity,
            meausurementAccuracy: data.meausurementAccuracy,
            dimensions: data.dimesions,
            design: data.design,
            deploymentDate: data.deploymentDate,
            installationDate: data.installationDate,
            power: data.power
            };
            const newMeter = new ElectricMeter(data);
        //    const newMeter = new ElectricMeter(query);
            await newMeter.save()

            const newSimulatedMeter = {
                meter_name: data.fanName,
                meter_id: data.fanId,
                userId: data.userId,
                Voltage: "10V",
                Current: "5A",
                Todays_Usage: "0",
                Last_24hr_Usage: "0",
                This_Months_Usage: "clock-wise",
                This_Weeks_Usage: "0",
                This_Years_Usage: "0",
                work_status:"false"
            }
            let temp = await SimulatedMeterServices.addSimulatedMeter(newSimulatedMeter);
            return {newMeter};
                               
        }
        catch(err){
                console.log(err);
                console.log("Some unexpected error occured while adding electric meter")
        }
}


static deleteMeter = async (data) => {
    try {
        const query = { 
            _id: data.id
        };
        
        const oldMeter = await ElectricMeter.remove(query);

        console.log(oldMeter)
        return {oldMeter};
                           
    }
    catch(err){
            console.log(err);
            console.log("Some unexpected error occured while deleting electric meter")
    }
}


static updateMeter = async (id,data) => {
    try {
        const query = { 
            _id: id
        };
        
        const updatedMeter = await ElectricMeter.findOneAndUpdate(query,data);

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

static getAllMeters = async (id,data) => {
    try {
        
        
        const meters = await ElectricMeter.find();

        if(meters?.length > 0)
        {
            return meters
        }
                           
    }
    catch(err){
            console.log(err);
            console.log("Some unexpected error occured while fetching meters")
    }
}

static getMeterById = async (id) => {
    try {
        const meter = await ElectricMeter.findById(id);                    
        if(meter)
        {
            return {meter}
        }                      
    }
    catch(err){
            console.log(err);
            console.log("Some unexpected error occured while fetching meters")
    }
}



static getMeterdetails = async (data) => {
    console.log(data)
        try {
    
            let foundMeters = await ElectricMeter.find({"userId": data.userId }); 
            console.log(data.userId);
          
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
}

module.exports.MeterServices = MeterServices;