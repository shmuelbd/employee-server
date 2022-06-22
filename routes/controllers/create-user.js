const USERS = require("../../models/users")


module.exports = {

    createUSer: async (req, res, next) => {

        //Requirements and error throws are in the schema.
        //The data structure that the Schema expects to receive is:
        //  ||  name: String                        ||
        //  ||  idNumber: String                    ||
        //  ||  role: id from roles table           ||
        //  ||  manager: id from managers table     ||
        const data = req.body;
        try {
            const checkUserExist = await USERS.find({ idNumber: data.idNumber })
            if (checkUserExist.length > 0) {
                return res.status(500).json({ message: "user exist" })

            }
            await USERS.create(data)
            res.status(200).json({ message: "user created" })
        }
        catch (err) {
            return res.status(500).json(err.message)
        }
    },
};