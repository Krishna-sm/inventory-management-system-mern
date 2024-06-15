const httpStatus = require("http-status"); 
const CatchAsync = require("../utils/CatchAsync"); 
const OrderService = require("../services/Orders.service");

class OrdersController{
            static createOrder= CatchAsync(async(req,res)=>{
                const res_obj  = await OrderService.createOrder(req?.user,req.body);
                return    res.status(httpStatus.CREATED).json(res_obj)
                 
            })

  static getAllorders= CatchAsync(async(req,res)=>{
                const res_obj  = await OrderService.getAllorders(req?.user,req.query?.page,req.query?.query);
                return    res.status(httpStatus.OK).json(res_obj)
                 
            })
              static deleteOrder= CatchAsync(async(req,res)=>{
                const res_obj  = await OrderService.deleteOrder(req?.user,req?.params?.id);
                return    res.status(httpStatus.OK).json(res_obj)
                 
            })
     static getInvoiceById= CatchAsync(async(req,res)=>{
                const res_obj  = await OrderService.getInvoiceById(req?.user,req?.params?.id);
                return    res.status(httpStatus.OK).json(res_obj)
                 
            })


            
            
            

        }

        
module.exports = OrdersController