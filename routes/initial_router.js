const { createUSer } = require("./controllers/create-user")
const { readUSers } = require("./controllers/get-all-employee")
const { updateUSer } = require("./controllers/update-user")
const { deleteUser } = require("./controllers/delete-user")

exports.initial_router = (app) => {
    app.get("/", readUSers);
    app.post("/", createUSer);
    app.put("/", updateUSer, readUSers);
    app.delete("/", deleteUser, readUSers);
};