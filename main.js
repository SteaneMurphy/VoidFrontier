import { registerAgent, getAgent, getCurrentWaypoint, listSystems } from "./queries.js";

document.querySelector("mainContainer").innerHTML += listSystems();