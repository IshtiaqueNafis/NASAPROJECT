const launches = new Map();
const launch = {
    flightNumber: 100,
    mission: "Kepler x",
    rocket: "EXPLORE IS1",
    launchDate: new Date("December 27,2030"),
    destination: "Kepler-442 b",
    customers: ["NASA", "ZERO TO MASTERY"],
    upcoming: true,
    success: true,


}
launches.set(launch.flightNumber, launch)
module.exports = {
    launches
}