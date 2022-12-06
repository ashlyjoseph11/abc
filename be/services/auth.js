const { type } = require("express/lib/response");
const User = require("../model/user");


class UserAuth {

        static loginUser = async (data) => {
            //console.log(data)
                try {
                        const query = {
                                email : data.email,
                                password : data.password,                             
                        }
                    let foundUser = await User.findOne({"email": query["email"] });
                    if(foundUser && foundUser.password === data.password)
                    {
                        
                    return {foundUser}
                    }
                    else{
                        return null
                    }
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while logging in")
                }
        }
        static getUsers = async (id,data) => {
                try {
                    
                    
                    const users = await User.find();

                    if(users?.length > 0)
                    {
                        return users
                    }
                                       
                }
                catch(err){
                        console.log(err);
                        console.log("Some unexpected error occured while fetching meters")
                }
        }
}

module.exports.UserAuth = UserAuth;