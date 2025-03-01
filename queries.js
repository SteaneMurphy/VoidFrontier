import { CONFIG } from "./utilities.js";

/*
    Registers a new account token for access to the API. Only needs to be run once per account
    and returns an session token that can be used when accessing the API endpoints
*/
export function registerAgent()
{
    const URL = `https://api.spacetraders.io/v2/register`

    fetch(URL, 
        { 
            method: "POST", 
            headers: { 
                "Authorization": "Bearer " + CONFIG.ACCOUNT_TOKEN,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                symbol: "STEANE",
                faction: "ASTRO"
            })
        })
    .then(response => {
        if(response.status === 409) 
        {
            console.log("Agent already exists");
            return null;
        }
            return response.json();
        })
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Request failed:", error.message));
}

/*
    Returns information about the user (agent)
*/
export function getAgent()
{
    const URL = `https://api.spacetraders.io/v2/my/agent`
    
    fetch(URL, 
        {
            method: "GET",
            headers: 
                {
                    "Authorization": "Bearer " + CONFIG.AGENT_TOKEN
                }
        })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message));
}

export function getCurrentWaypoint()
{
    const URL = `https://api.spacetraders.io/v2/systems/X1-TQ15/waypoints/X1-TQ15-XZ3F`

    fetch(URL, 
        {
            method: "GET",
            headers: 
                {
                    "Authorization": "Bearer " + CONFIG.AGENT_TOKEN
                }
        })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message));
}

export function getAllSystems()
{
    const URL = `https://api.spacetraders.io/v2/systems`

    return fetch(URL, 
        {
            method: "GET",
            headers: 
                {
                    "Authorization": "Bearer " + CONFIG.AGENT_TOKEN
                }
        })
    .then(response => response.json())
    .then(data => 
        {
            return data.data;
        })
    .catch(error => console.log(error.message));
}

export function getOneSystem(systemSymbol)
{
    const URL = `https://api.spacetraders.io/v2/systems/${systemSymbol}`

    return fetch(URL, 
        {
            method: "GET",
            headers: 
                {
                    "Authorization": "Bearer " + CONFIG.AGENT_TOKEN
                }
        })
    .then(response => response.json())
    .then(data => 
        {
            return data.data;
        })
    .catch(error => console.log(error.message));
}

//registerAgent();
//getAgent();
//getCurrentWaypoint();
//listSystems();