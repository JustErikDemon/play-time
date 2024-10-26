// Initialize an empty Set to store unique PlaceIds
let playedGames = new Set();

// Load previously played games from localStorage
if (localStorage.getItem("playedGames")) {
    const savedGames = JSON.parse(localStorage.getItem("playedGames"));
    savedGames.forEach((gameId) => playedGames.add(gameId));
}

// Function to save the played games to localStorage
function savePlayedGames() {
    localStorage.setItem("playedGames", JSON.stringify(Array.from(playedGames)));
}

// Function to track when a game is launched
function trackGameLaunch(message) {
    // Regex to capture the PlaceId from the console message
    const regex = /placeId=(\d+)/;
    const match = message.match(regex);
    
    if (match) {
        const placeId = match[1];

        // If the PlaceId is not already in the Set, add it and log the event
        if (!playedGames.has(placeId)) {
            playedGames.add(placeId);
            savePlayedGames(); // Save the updated set to localStorage
            console.log(`Game played! Total unique games played: ${playedGames.size}`);
        } else {
            console.log(`Already played game with PlaceId: ${placeId}`);
        }
    }
}

// Listen for console messages
const originalConsoleLog = console.log;
console.log = function (message) {
    originalConsoleLog.call(console, message); // Call the original console.log
    if (typeof message === "string" && message.includes("Launched external handler for 'roblox-player:")) {
        trackGameLaunch(message);
    }
};

// Display the number of unique games played
const displayElement = document.createElement("div");
displayElement.style.position = "fixed";
displayElement.style.bottom = "10px";
displayElement.style.right = "10px";
displayElement.style.padding = "5px 10px";
displayElement.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
displayElement.style.color = "#fff";
displayElement.style.borderRadius = "5px";
displayElement.style.zIndex = "1000";
document.body.appendChild(displayElement);

// Update the display every second
setInterval(() => {
    displayElement.innerText = `Unique games played: ${playedGames.size}`;
}, 1000);

