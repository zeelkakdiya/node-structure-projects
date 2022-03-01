const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const config = require('./config.js')


const OAuth2 = google.auth.OAuth2

const OAuth2_client = new OAuth2(config.clientId, config.clientSecret)
OAuth2_client.setCredentials({ refresh_token: config.refreshToken })

const send_mail = async (name, recipient) => {
    try {
        const accessToken = OAuth2_client.getAccessToken()

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: config.user,
                clientId: config.clientId,
                clientSecret: config.clientSecret,
                refreshToken: config.refreshToken,
                accessToken: accessToken
            }
        })

        const mail_options = {
            from: `THE T.E.S.T <${config.user}>`,
            to: recipient,
            subject: `A Message  From The T.E.S.T`,
            html: get_html_message(name),

        }

        const result = await transport.sendMail(mail_options)
        return result

    } catch (err) {
        console.log(err)
        return err
    }

}

function get_html_message(name) {

    return `<h1>${name} your Coupen code 54pE8TIr5y   </h1>`

}

function randomcode(string_length) {

    var random_string = ''
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZqirTTfyyuro448754354fgdfygtruw77563jnvboplaffdrecbh787"
    for (var i = 0; i < string_length; i++) {
        random_string += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return console.log(random_string)
}

//  send_mail('mrzk..hello' , 'zeelkakdiya2002@gmail.com')
// .then((result) =>console.log('Email sent .. ' ,result))
// .catch((err) => console.log(err.message))

module.exports = { send_mail };






