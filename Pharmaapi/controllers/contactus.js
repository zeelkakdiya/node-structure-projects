const Contactaus = require("../models/contactaus")

exports.contactaus = async (req, res) => {

    const { firstname, lastname, email, subject, messgae } = req.body;


    try {
        const user = new Contactaus({
            firstname: firstname,
            lastname: lastname,
            email: email,
            subject: subject,
            messgae: messgae
        })
        const contact = await user.save();

        if (!user) {
            res.status(401).json({
                status: false,
                data: " Something wrong"
            });
        }
        res.status(201).json({
            status: true,
            data: contact,
        })

    } catch (err) {
        console.log(err)
        res.status(501).json({
            status: true,
            data: err.messgae
        })
    }

}

exports.getcontactdata = async (req, res) => {
    try {
        const getdatacontact = await Contactaus.find()
        return res.status(200).json({
            status: true,
            data: getdatacontact
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: false,
            data: error.messgae
        })
    }

}