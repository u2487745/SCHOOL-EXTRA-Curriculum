const multer = require("multer");
const path = require("path");

const imageStorage = multer.diskStorage({
    destination:'images',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() +path.extname(file.originalname));
        }
})
const uploads = multer({
    storage : imageStorage,
})
module.exports = uploads