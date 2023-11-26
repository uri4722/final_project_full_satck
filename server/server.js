require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routers/routes.js')

app.use(express.json());
app.use("/", router);



const PORT = process.env.PORT
app.listen(PORT, () => console.log("listen to port" + PORT))