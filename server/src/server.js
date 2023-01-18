const http = require('http');
const app = require("./app");
const {loadPlanets} = require("./Models/planets.model")
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

const startServer = async () => {
    await loadPlanets()
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT} ...`)
    })
};

startServer().then(r => console.log(r));


