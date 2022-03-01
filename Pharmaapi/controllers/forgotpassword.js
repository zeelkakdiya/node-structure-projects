const Register = require("../models/register")
const bcrypt = require("bcryptjs")

exports.forgotpassword = async (req, res) => {
    try {
        const _id = req.params.id
        const forgotpassword = await Register.findByIdAndUpdate(_id, req.body.password, {
            new: true,
        })
        if (!_id) {
            res.status(401).send()
        }
        res.status(201).send(forgotpassword)
    } catch (err) {
        res.status(501).json({
            status: false,
            data: err.messgae
        })
    }
}

exports.changepassword = async (req, res, next) => {

    console.log('changepassword')
    try {

        const { id } = req.params;
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt)
        const userpassword = await Register.findByIdAndUpdate({ _id: id }, { password: password }, { new: true })
        const token = await userpassword.genratetoken();
        console.log("the part of token " + token)
        return res.status(201).json({ status: true, data: userpassword })


    } catch (err) {
        console.log(err)
        res.status(501).json({ status: false, err: "Error Occured" })
    }
}