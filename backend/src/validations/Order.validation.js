const {body} = require("express-validator")
class OrderValidation {

        static CreateOrder= [
                body("user").isMongoId().notEmpty().withMessage("User Is Required"),
                body("items").isArray().notEmpty().withMessage("Item Is Required")

        ]   

}



module.exports = OrderValidation