const api = "http://localhost:8000";

async function httpGetPlanets() {

    try {
        const response = await fetch(`${api}/planets`);

        return await response.json();
    }catch (e) {
        console.log(e)
    }

}

async function httpGetLaunches() {
    // TODO: Once API is ready.
    // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
    // TODO: Once API is ready.
    // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
    // TODO: Once API is ready.
    // Delete launch with given ID.
}

export {
    httpGetPlanets,
    httpGetLaunches,
    httpSubmitLaunch,
    httpAbortLaunch,
};