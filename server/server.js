const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require("cookie-parser")
require('dotenv').config();

const router = require('./routers/routes.js');
// const { userAuth } = require('./basicTableFunc.js');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
// app.use(userAuth);
app.use("/", router);





const PORT = process.env.PORT
app.listen(PORT, () => console.log("listen to port" + PORT))