/*
    CONFIG and its values are exported for use in the backend script. Normally it is customary to use a '.env' file to store and use
    access keys locally. As this is a vanilla javascript project, I opted for exporting an ES module. The following keys are explained below:

    ACCOUNT_TOKEN: this is equivalent to an account API bearer token
    AGENT_TOKEN: this is equivalent to a session bearer token, the generated token is stored to the account (a permanent session)

    As this public API is 'gamified', the access and session tokens are renamed to fit this purpose.
*/

export const CONFIG = {
    ACCOUNT_TOKEN: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiY203b2JmczA3MDAwZmtuMGoyanBjZ29jNSIsInZlcnNpb24iOiJ2Mi4zLjAiLCJpYXQiOjE3NDA3MTk1MjYsInN1YiI6ImFjY291bnQtdG9rZW4ifQ.mE8wAXUIGVjySz0mNn4QyXFZfbSfAiXCVswBXmQD8FEgV9zlF5yuEabAnL7HYUBISKHXpTuDJNNZI2rA4I2DqVtSI1BR6Ws2brlpVQ-2ZmnKRZ0tWejv2SOHKx2N7ngP4b2eeenLJdL7VYXQ5uJ4RNSPfWYlHwaH4lOCL1I1RQq_2hHhiUVEedFVqw5q3NZvKYuXN1ahzNaL16DlNXAmgCubFPgr8lJiqbE1kl4V_foUpcWTsOF4vll3-72VjrWAj3Sh45TESFP6cXeKLOF9sDeLd7V_45XImTkx94EpFpf9cVlnu0tQ1elSIj5pTwol_Q1s1YGFz2eX_D0y46-fwA`,
    AGENT_TOKEN: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiU1RFQU5FIiwidmVyc2lvbiI6InYyLjMuMCIsInJlc2V0X2RhdGUiOiIyMDI1LTAzLTAxIiwiaWF0IjoxNzQwODEwOTg5LCJzdWIiOiJhZ2VudC10b2tlbiJ9.PLCv4d07gDbclqfIUUYBqGLEFuI8zj5hXp48rykxwNmfgdZ-tuSqhbryrI9akzaZYf3SXQ7qOmOp5v6pf6K0Oyn5igXeu-sKuOiKp5J_iPt2YtgzIR2AG4ZVYLq_3WGC5SBiA7CKkWwzj9e4cYsRSlnB-n90S5ZYw2kJmAYFletoAodQQ_yqkDEHYhRyDFltlRTkcf8vi_bF_MEJ0LV5yf1ZVUZzUux7czq_1aSIeROOoCxQN51ES2p0IWclT738j0B2DItwK0s8ywzyYhNEWGsjOZmKJU4Ad2LBTCTE_2CKMq3V-Z2-tIqYkYUxrZ49CZSV8qd64nGi2DNDDGjX6Q`
};

export function assignSystemImage(type)
{
    switch(type)
    {
        case "NEUTRON_STAR":
            return "./images/purpleStar.png"
        case "HYPERGIANT":
            return "./images/greenStar.png"
        case "NEBULA":
            return "./images/nebula.png"
        case "UNSTABLE":
            return "./images/unstableStar.png"
        case "YOUNG_STAR":
            return "./images/yellowStar.png"
        case "ORANGE_STAR":
            return "./images/orangeStar.png"
        case "BLUE_STAR":
            return "./images/blueStar.png"
        case "RED_STAR":
            return "./images/redStar.png"
        case "BLACK_HOLE":
            return "./images/blackHole.png"
        case "WHITE_DWARF":
            return "./images/whiteStar.png"
    }
}

export function assignOrbitalImage(type)
{
    switch (type) {
        case "PLANET":
            return './images/asteroid.png';
        case "GAS_GIANT":
            return './images/asteroid.png';
        case "MOON":
            return './images/asteroid.png';
        case "ORBITAL_STATION":
            return './images/asteroid.png';
        case "JUMP_GATE":
            return './images/asteroid.png';
        case "ASTEROID_FIELD":
            return './images/asteroid.png';
        case "ASTEROID":
            return './images/asteroid.png';
        case "ENGINEERED_ASTEROID":
            return './images/asteroid.png';
        case "ASTEROID_BASE":
            return './images/asteroid.png';
        case "NEBULA":
            return './images/asteroid.png';
        case "DEBRIS_FIELD":
            return './images/asteroid.png';
        case "GRAVITY_WELL":
            return './images/asteroid.png';
        case "ARTIFICIAL_GRAVITY_WELL":
            return './images/asteroid.png';
        case "FUEL_STATION":
            return './images/asteroid.png';
    }
}

