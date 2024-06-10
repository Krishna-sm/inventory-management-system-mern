const httpStatus = require("http-status"); 
const CatchAsync = require("../utils/CatchAsync"); 
const OrderService = require("../services/Orders.service");

class OrdersController{
            static createOrder= CatchAsync(async(req,res)=>{
                const res_obj  = await OrderService.createOrder(req?.user,req.body);
                return    res.status(httpStatus.CREATED).json(res_obj)
                 
            })

        }

        
module.exports = OrdersController