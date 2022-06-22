const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const { initial_router } = require("./routes/initial_router")
require('dotenv').config()
const port = 3001
const app = express()
app.use(cors())
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/employee');
mongoose.connection.on("connected", () => {
    console.log("mongoDB Connected");
});

initial_router(app)

app.listen(port, () => {
    console.log(`listening on :${port}`);
});
