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

            await ConsumerModel.create({
                name,email,mobile,dob,address,user
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
    static async getById(user,id){
         

        const checkExist = await ConsumerModel.findOne({_id:id,user:user});

        console.log({user,id});

        if(!checkExist){
            throw new ApiError(httpStatus.BAD_REQUEST,"Consumer Not Found in Record");
            return
        }

                

            return {
                user:checkExist
            }

        
    }

    

    static async GetAllUser(user,page=1){

       const data =  await ConsumerModel.find({user}).select("name email mobile");
            return {
                users:data
            }




    }
    
    static async updateById(user,body,id){
        
        const {name,email,mobile,dob,address} = body

        const checkExist = await ConsumerModel.findById({_id:id});

        if(checkExist.email !==email){

        const checkExistEmail = await ConsumerModel.findOne({email:email,user:user});

        if(checkExistEmail){
            throw new ApiError(httpStatus.BAD_REQUEST,"Consumer Email Already in Another Record ");
            return
        } 
        }

            await ConsumerModel.findByIdAndUpdate(id,{
                name,email,mobile,dob,address,user
            })

            return {
                msg:"Consumer Update :)"
            }

        
    }
}

module.exports = ConsumerService