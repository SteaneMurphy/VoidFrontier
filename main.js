import { registerAgent, getAgent, getCurrentWaypoint, listSystems } from "./queries.js";

function adjustMapToScreenSize(maxX, minX, maxY, minY, data)
{
    const scaleX = window.innerWidth / (maxX - minX);
    const scaleY = window.innerHeight / (maxY - minY);
    console.log("scaleX: " + scaleX + " scaleY: " + scaleY);
    
    data.forEach(system => {
        const normalizedX = (system.x - minX) * scaleX;
        const normalizedY = (system.y - minY) * scaleY;
        console.log("x: ", (normalizedX), " y: ", (normalizedY));

        //parent planet container
        const parentContainer = document.createElement("div");
        parentContainer.className = "planetContainer";
        document.querySelector(".mainContainer").appendChild(parentContainer);
        parentContainer.style.position = "absolute";
        parentContainer.style.left = `${normalizedX}px`;
        parentContainer.style.top = `${normalizedY}px`;

        //add planet container to parent
        const currentPlanet = document.createElement("div");
        currentPlanet.className = "planet";
        currentPlanet.style.backgroundColor = `var(${convertStarColourToCSS(system.type)})`;
        parentContainer.appendChild(currentPlanet);

        //add planet text to parent
        parentContainer.innerHTML += `<span class="planetText">${system.symbol}</span>`;

    });
}

function convertStarColourToCSS(starColour)
{
    switch(starColour)
    {
        case "YOUNG_STAR":
            return "--young-star"
        case "ORANGE_STAR":
            return "--orange-star"
        case "BLUE_STAR":
            return "--blue-star"
        case "RED_STAR":
            return "--red-star"
        case "BLACK_HOLE":
            return "--black-hole"
        case "WHITE_DWARF":
            return "--white-dwarf"
    }
}

async function displaySystems()
{
    const data = await listSystems();
    console.log(data);

    let minX = 0;
    let minY = 0;
    let maxX = 0;
    let maxY = 0;

    data.forEach(system => {

        if(system.x <= minX)
        {
            minX = system.x
        }
        else if(system.x >= maxX)
        {
            maxX = system.x
        }

        if(system.y <= minY)
        {
            minY = system.y
        }
        else if(system.y >= maxY)
        {
            maxY = system.y
        }
    });

    console.log("minX: " + minX + " minY: " + minY + " maxX: " + maxX + " maxY: " + maxY);

    adjustMapToScreenSize(maxX, minX, maxY, minY, data);
}

displaySystems();
// const data = listSystems();
// document.querySelector(".mainContainer").innerHTML += data.data[0].symbol;