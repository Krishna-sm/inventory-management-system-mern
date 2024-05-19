const httpStatus = require("http-status"); 
const CatchAsync = require("../utils/CatchAsync");
const ConsumerService = require("../services/Consumer.service");

class ConsumerController{
            static RegisterConsumer= CatchAsync(async(req,res)=>{
                const res_obj  = await ConsumerService.RegisterConsumer(req?.user,req.body);
                return    res.status(httpStatus.CREATED).json(res_obj)
                 
            })
  static DeleteConsumer= CatchAsync(async(req,res)=>{
                const res_obj  = await ConsumerService.DeleteConsumer(req?.user,req.params.id);
                return    res.status(httpStatus.OK).json(res_obj)
                 
            })

            
}

module.exports = ConsumerController