const httpStatus = require("http-status")
const { ConsumerModel, OrdersModel } = require("../models")
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

                await OrdersModel.deleteMany({consumer:id})
                

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

    

    static async GetAllUser(user,page=1,query=''){
            const limit = 10;
                const skip = (Number(page)-1)*limit

                const queryies = {
                    user,
                   $or:[
                    {
                         name: new RegExp(query)
                    },
                    {
                         email: new RegExp(query)
                    },
                    {
                         address: new RegExp(query)
                    },
                    {
                         mobile: new RegExp(query)
                    },
                   ]
                }


       const data =  await ConsumerModel.find(queryies).select("name email mobile")
                    .skip(skip)
                    .limit(limit)
       ;

        //total document

        const totalConsumer = await ConsumerModel.countDocuments(queryies)


        //hasmore
        const hasMore= skip+limit<totalConsumer


            return {
                users:data,
                more:hasMore
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

     static async GetUserForSearch(user){ 

                


       const data =  await ConsumerModel.find({user}).select("name dob")
                 
       ;

        //total document 

 


            return {
                users:data 
            }




    }
     static async DashboardData(user){ 

                


       const consumers =  await ConsumerModel.countDocuments({user})
       const orders =  await OrdersModel.find({user}).select("items.price -_id") 
                 
       ;
         const arr =await  orders.map((cur)=>{
    // console.log();
    return [...cur.items.map((c)=>c.price)]
  })

    //    let sale =0

    //    for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    //    }

        //total document 

 


            return {
                consumers,
                 orders:orders.length,
                 sell:arr.length>0 ?arr.flat(2).reduce((a,c)=>a+c):arr
            }




    }
    

    
}

module.exports = ConsumerService