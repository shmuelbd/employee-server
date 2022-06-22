const USERS = require("../../models/users")


module.exports = {

    updateUSer: async (req, res, next) => {
        //The data expects to receive is:
        //  ||  _id: String   ||
        const id = req.body._id
        const data = req.body.data

        try {
            await USERS.findByIdAndUpdate(id, data)
            next()
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    },
};