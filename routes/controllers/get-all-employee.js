const USERS = require("../../models/users")


module.exports = {

    readUSers: async (req, res, next) => {

        try {
            const allUsers = await USERS.find().populate('manager')
            res.status(200).json(allUsers)
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    },
    readManagement: async (req, res, next) => {

        try {
            const allUsers = await USERS.find({ role: 'Manager' });
            res.status(200).json(allUsers)
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    },
};