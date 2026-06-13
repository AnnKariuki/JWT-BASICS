// check username, password in post(login) request
// if exists create a new JWT
// send back to front-end

//setup authentication so only the request with JWT can access the dashboard

const CustomAPIError = require('../errors/custom-error')
const login = async (req, res) => {
    const { username, password } = req.body
    //if these 3 values are not provided we could set up either of the following:
    // mongoose validation in schema
    // Joi
    // check in the controller
    if (!username || !password) {
        throw new CustomAPIError('Please provide emai and password', 400)
    }

    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, John Doe`, secret: `Here is your authorized data, your luncky number is ${luckyNumber}` })
}

module.exports = {
    login, dashboard
}