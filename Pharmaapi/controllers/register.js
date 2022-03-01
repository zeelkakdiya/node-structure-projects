
const Register = require("../models/register")
const sendmail = require("../utils/sendmail")
const bcrypt = require("bcryptjs")

exports.gteAlluserdata = async (req, res) => {
    try {

        const getalluserdata = await Register.find({})
        return res.status(200).json({
            status: true,
            data: getalluserdata
        })

    } catch (error) {
        console.log(error)
        res.status(501).json({
            status: false,
            data: error.messgae
        })
    }
}

exports.userRegister = async (req, res) => {
    try {

        const { password, confirmpassword, username, email } = req.body;

        if (password === confirmpassword) {
            const userregister = new Register({
                username: username,
                email: email,
                password: password,
                confirmpassword: confirmpassword
            })


            console.log("the sucess the part of " + userregister)
            const token = await userregister.genratetoken();
            console.log("the part of token " + token)

            const sendemail = await sendmail.send_mail(username, email).then((result) => console.log("MAIL SUCCESS", result)).catch((err) => console.log("MAIL ERROR", err))
            console.log(`The part of the send email ${sendemail}`)


            console.log("cookie genrated")
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 90000),
                httpOnly: true,

            })

            const regi = await userregister.save();
            return res.status(201).send(regi)

        }
        else {
            return res.status(401).send("password Not metch")
        }
    } catch (er) {
        console.trace(er)
        return res.status(500).json({
            status: false,
            data: er.messgae
        })
    }
}

exports.userlogine = async (req, res) => {
    try {

        const { email, password } = req.body;

        const userlogin = await Register.findOne({ email: email })

        const isMatch = await bcrypt.compare(password, userlogin.password)

        const token = await userlogin.genratetoken();
        console.log("the part of token " + token)

        const sendemail = await sendmail.send_mail(email, email).then((result) => console.log(result)).catch((err) => console.log(err))
        console.log(`The part of the send email ${sendemail}`)

        console.log("cookie genrated")
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 90000),
            httpOnly: true,

        })

        if (isMatch) {
            res.status(201).json({
                status: true,
                data: userlogin
            })
        }
        else {
            res.send("password not match")
            return res.status(400).send()

        }


    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: false,
            data: err.messgae
        })
    }

}

