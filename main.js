import { getOneSystem, getAllSystems } from "./queries.js";
import { assignSystemImage, assignOrbitalImage } from "./utilities.js";

async function displaySystems()
{
    const data = await getAllSystems();

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

    adjustMapToScreenSize(maxX, minX, maxY, minY, data);
}

function adjustMapToScreenSize(maxX, minX, maxY, minY, data)
{
    const mainContainer = document.querySelector(".mainContainer");
    const mainContainerRect = mainContainer.getBoundingClientRect();
    const scaleX = mainContainerRect.width / (maxX - minX);
    const scaleY = mainContainerRect.height / (maxY - minY);
    
    data.forEach(system => {
        const normalizedX = (system.x - minX) * scaleX;
        const normalizedY = (system.y - minY) * scaleY;
        const clampedX = Math.min(Math.max(normalizedX, 0), mainContainerRect.width - 120);
        const clampedY = Math.min(Math.max(normalizedY, 0), mainContainerRect.height - 120);

        //parent planet container
        const parentContainer = document.createElement("div");
        parentContainer.className = "systemContainer";
        document.querySelector(".mainContainer").appendChild(parentContainer);
        parentContainer.style.position = "absolute";
        parentContainer.style.left = `${clampedX}px`;
        parentContainer.style.top = `${clampedY}px`;

        //add planet container to parent
        const currentSystem = document.createElement("img");
        currentSystem.className = "system";
        currentSystem.src = assignSystemImage(system.type);
        parentContainer.appendChild(currentSystem);
        currentSystem.onclick = () => systemOnClick(system.symbol);

        //add planet text to parent
        const systemText = document.createElement("span");
        systemText.innerHTML += system.symbol;
        systemText.className = "systemText";
        parentContainer.appendChild(systemText);
    });
}

function systemOnClick(systemSymbol)
{
    clearScreen();
    displayOrbitals(systemSymbol);
}

async function displayOrbitals(systemSymbol)
{
    const data = await getOneSystem(systemSymbol);
    console.log(data.waypoints);
    
    let minX = 0;
    let minY = 0;
    let maxX = 0;
    let maxY = 0;

    (data.waypoints).forEach(orbital => {

        if(orbital.x <= minX)
        {
            minX = orbital.x
        }
        else if(orbital.x >= maxX)
        {
            maxX = orbital.x
        }

        if(orbital.y <= minY)
        {
            minY = orbital.y
        }
        else if(orbital.y >= maxY)
        {
            maxY = orbital.y
        }
    });

    adjustMapToScreenSizeOrbital(maxX, minX, maxY, minY, data);
}

function adjustMapToScreenSizeOrbital(maxX, minX, maxY, minY, data)
{
    const scaleX = window.innerWidth / (maxX - minX);
    const scaleY = window.innerHeight / (maxY - minY);
    
    (data.waypoints).forEach(orbital => {
        
        //dont display moons or sub-orbitals
        if(orbital.orbits)
        {
            return;
        }

        const normalizedX = (orbital.x - minX) * scaleX;
        const normalizedY = (orbital.y - minY) * scaleY;

        //parent orbital container
        const parentContainer = document.createElement("div");
        parentContainer.className = "orbitalContainer";
        document.querySelector(".mainContainer").appendChild(parentContainer);
        parentContainer.style.position = "absolute";
        parentContainer.style.left = `${normalizedX}px`;
        parentContainer.style.top = `${normalizedY}px`;

        //add orbital container to parent
        const currentOrbital = document.createElement("img");
        currentOrbital.className = "orbital";
        currentOrbital.src = assignOrbitalImage(orbital.type);
        parentContainer.appendChild(currentOrbital);
        //currentOrbital.onclick = () => orbitalOnClick(orbital.symbol);

        //add orbital text to parent
        const orbitalText = document.createElement("span");
        orbitalText.innerHTML += orbital.symbol;
        orbitalText.className = "orbitalText";
        parentContainer.appendChild(orbitalText);
    });
}

function clearScreen()
{
    const mainContainer = document.getElementById("mainContainer");
    while(mainContainer.firstChild)
    {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

window.addEventListener("resize", () => {
    clearScreen();
    displaySystems();
});

displaySystems();