const httpStatus = require("http-status")
const { ConsumerModel } = require("../models")
const ApiError = require("../utils/ApiError")
class ConsumerService{


    static async RegisterConsumer(user,body){
        
        const {name,email,mobile,dob,address} = body

        const checkExist = await ConsumerModel.findOne({email:email,user:user});

        if(checkExist){
            throw new ApiError(httpStatus.BAD_REQUEST,"Consumer Already in Record");
            return
        }

            await ConsumerModel({
                name,email,mobile,dob,address
            })

            return {
                msg:"Consumer Added :)"
            }

        
    }

    static async DeleteConsumer(user,id){
         

        const checkExist = await ConsumerModel.findOneAndDelete({_id:id,user:user});

        if(!checkExist){
            throw new ApiError(httpStatus.BAD_REQUEST,"Consumer Not Found in Record");
            return
        }

                

            return {
                msg:"Consumer Deleted :)"
            }

        
    }
    
}

module.exports = ConsumerService