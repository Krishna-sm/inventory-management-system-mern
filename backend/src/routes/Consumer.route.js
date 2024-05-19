const express = require("express")
const Authentication = require("../middlewares/Authentication");
const ConsumerController = require("../controllers/Consumer.controller");
const ConsumerValidation = require("../validations/Consumer.validation");
const Validation = require("../middlewares/Validation");
const router = express.Router();

router.use(Authentication);

router.post("/register",ConsumerValidation.RegisterConsumer,Validation,ConsumerController.RegisterConsumer)
router.post("/delete/:id",ConsumerValidation.Params_id,Validation,ConsumerController.DeleteConsumer)


//

module.exports = router