const {body, param, query} = require("express-validator")
class ConsumerValidation {


    static RegisterConsumer = [
            body("name").notEmpty().withMessage("name can not be empty"),
            body("email").isEmail().withMessage("email must be valid").notEmpty().withMessage("name can not be empty"),
            body("mobile").notEmpty().withMessage("Mobile can not be empty"),
            body("dob").notEmpty().withMessage("dob can not be empty"),
            body("address").notEmpty().withMessage("address can not be empty"),

          
    ]

    static Params_id= [
        param("id").isMongoId().withMessage("provide valid Id").notEmpty().withMessage("Id is required")
    ]

    
    static query_page= [
        query("page").optional(),
        query("query").optional(),
    ]

    
    
    
 

    
}

module.exports =ConsumerValidation