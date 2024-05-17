const apirouter = require('express').Router();

const { WriteFileFromName, readFileFromDirectory } = require('./fs.utils')


apirouter.get('/', function (req, res) {
    res.send('Start Page')
})

apirouter.post('/createfile', function (req, res) {
    const content = Date.now().toString();
    const currentDate = new Date();
    const localDate = currentDate.toLocaleDateString().replace(/\//g, "-");
    const localTime = currentDate.toLocaleTimeString().replace(/:/g, "-");
    const fileName = `${localDate}_${localTime}.txt`;
    WriteFileFromName(fileName, content).then((d) => {
        res.send({
            sucess: true,
            message: "File Created Succesfully"
        })
    }).catch((e) => {
        res.send({
            sucess: false,
            error: e,
            message: "File Creation failed"
        })
    })

})
apirouter.get('/readfiles', function (req, res) {
    readFileFromDirectory().then((d) => {
        res.send({
            sucess: true,
            FileDetails:d
            })
    }).catch((e) => {
        res.send({
            sucess: false,
            error: e,
            message: "File Read failed"
        })
    })

})


module.exports = apirouter;