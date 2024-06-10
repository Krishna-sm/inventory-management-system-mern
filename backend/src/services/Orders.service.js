const { OrdersModel } = require("../models")

class OrderService{
        static async createOrder(user,body){

                            await OrdersModel.create({
                                user,
                                consumer:body.user,
                                    items:body.items
                            })

            return {
                      msg:"Order Created Successfully"
            }

        }
}

module.exports = OrderService