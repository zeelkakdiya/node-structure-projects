require("./db/conn")
require('dotenv').config()
const express = require("express")
const port = process.env.PORT || 5000;
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser")
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRoutes = require("./routers/product")
const userregister = require("./routers/register")
const login = require("./routers/login")
const forgotpasswords = require("./routers/forgotpassword")
const changepassword = require("./routers/forgotpassword")
const contactus = require("./routers/contactaus")
const useraddress = require("./routers/useraddress")
const Productinventroy = require("./routers/Productinventroy")
const discounproducts = require("./routers/dicount")
const order = require("./routers/order")
const orderitem = require("./routers/ordeitem")
const Orderdetails = require("./routers/orderdetails")
const updateorder = require("./routers/orderdetails")
const totalpayment = require("./routers/orderdetails")
const Customer = require("./routers/customer")
const cartitem = require("./routers/Cartitem")
const userpayment = require("./routers/Userpayment")
const payment = require("./routers/Payment")
const paymentdetails = require("./routers/Paymentdetails")
const Reviwe = require("./routers/reviwe")

app.use("/product", productRoutes)
app.use("/register", userregister)
app.use("/userlogin", login)
app.use("/forgotpass", forgotpasswords)
app.use("/changepass", changepassword)
app.use("/contactaus", contactus)
app.use("/useraddress", useraddress)
app.use("/Productinventroy", Productinventroy)
app.use("/discounproducts", discounproducts)
app.use("/order", order)
app.use("/orderitem", orderitem)
app.use("/orderdetails", Orderdetails)
app.use("/updateorder", updateorder)
app.use("/totalpayment", totalpayment)
app.use("/Customer", Customer)
app.use("/Cartitem", cartitem)
app.use("/Userpayment", userpayment)
app.use("/Payment", payment)
app.use("/Paymentdetails", paymentdetails)
app.use("/Reviwe", Reviwe)


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());


app.get("/", (req, res) => {
    res.send("register login")
})


app.listen(port, () => {
    console.log(`port number ${port}`)
})