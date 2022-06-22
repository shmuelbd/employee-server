const USERS = require("../../models/users")


module.exports = {

    deleteUser: async (req, res, next) => {
        const id = req.body._id
        try {
            await USERS.findByIdAndRemove(id)
            next()
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    },
};