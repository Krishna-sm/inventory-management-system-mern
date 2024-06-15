const express = require("express")
const Authentication = require("../middlewares/Authentication"); 
const Validation = require("../middlewares/Validation");
const { CreateOrder } = require("../validations/Order.validation");
const OrdersController = require("../controllers/Order.controller");
const router = express.Router();

router.use(Authentication);

router.route("/create-order")
.post(CreateOrder,Validation,OrdersController.createOrder)

router.route("/get-orders")
.get(OrdersController.getAllorders)



router.route("/get-invoice/:id")
.get(OrdersController.getInvoiceById)

router.route("/delete/:id")
.delete(OrdersController.deleteOrder)



module.exports = router