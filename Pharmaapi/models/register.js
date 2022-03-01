const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const register = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is exists")
            }
        },
    },

    password: {
        type: String,
        required: true,
        minlength: 5
    },
    confirmpassword: {
        type: String,
        required: true,
        minlength: 5
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,

            },

        }
    ]
})

register.methods.genratetoken = async function () {

    try {
        const token = await jwt.sign({ id: this._id }, process.env.SECRET_KEY, {
            expiresIn: '7d'
        })
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;
    } catch (er) {
        console.log(er)
        throw Error(" the part of the " + er)
    }

}

register.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(this.password)
        // const passwordhas =  await  bcrypt.hash(password,10)

        this.password = await bcrypt.hash(this.password, 10)
        this.confirmpassword = await bcrypt.hash(this.password, 10)
    } next();

})



const Register = new mongoose.model("Register", register)

module.exports = Register;