const express = require("express");
const cors = require("cors");
const planetsRouter = require("./Routes/planets/plantes.router");
const app = express(); // fancy listener funciton
app.use(cors({
    origin:"http://localhost:3000"
}));
app.use(express.json());
app.use(planetsRouter);
module.exports = app;
