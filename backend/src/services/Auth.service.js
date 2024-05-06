const httpStatus = require("http-status")
const { UserModel,ProfileModel } = require("../models")
const ApiError = require("../utils/ApiError")
const { generatoken } = require("../utils/Token.utils")

class AuthService{
       static  async RegisterUser(body){
        const {email,password,name} = body

                const checkExist = await UserModel.findOne({email})
                if(checkExist){
                    throw new ApiError(httpStatus.BAD_REQUEST,"User Alrady Regisrered")
                    return
                }

            const user =     await UserModel.create({
                    email,password,name
                })

                const token = generatoken(user)
                const refresh_token = generatoken(user,'2d')
                await ProfileModel.create({
                            user:user._id,
                            refresh_token
                })  


                return {
                    msg:"User Register Successflly",
                    token:token
                }    

       }
        static  async LoginUser(body){
        const {email,password,name} = body

                const checkExist = await UserModel.findOne({email})
                if(!checkExist){
                    throw new ApiError(httpStatus.BAD_REQUEST,"User Not Regisrered")
                    return
                }

                if(password !==checkExist.password){
 throw new ApiError(httpStatus.BAD_REQUEST,"Invalid Credentials")
                    return
                }
             
   const token = generatoken(checkExist) 
              
                return {
                    msg:"User Login Successflly",
                    token:token
                }    

       }
         static  async ProfileService(user){ 

                      const checkExist = await UserModel.findById(user).select("name email")
                if(!checkExist){
                    throw new ApiError(httpStatus.BAD_REQUEST,"User Not Regisrered")
                    return
                }


   
              
                return {
                    msg:"Data fetched",
                    user:checkExist
                }    

       }
}

module.exports = AuthService