const multer = require('multer');
const express = require("express")
const path = require('path')
const hash = require('random-hash');
const app = express();
app.use('../uploads/', express.static('uploads'));


const storages = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads'));
        // cb(null, __dirname);
    },
    filename: (req, file, callback) => {
        let temp = file.originalname.split('.');
        const filename = temp[0] + '-' + hash.generateHash({ length: 5 }) + '.' + temp[1]
        callback(null, filename);
    }
});

const filefilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype == 'image/jpg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

const upload = multer(
    {
        storage: storages,
        limits: {
            fileSize: 1024 * 1024 * 5
        },
        fileFilter: filefilter
    })

module.exports = upload;  