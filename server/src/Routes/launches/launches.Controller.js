const {launches} = require("../../Models/launches.model");

const getAllLaunches = (req, res) => {
    return res.status(200).json(Array.from(launches.values()));
};

module.exports = {
    getAllLaunches,

}