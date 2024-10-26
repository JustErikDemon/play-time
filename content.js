let playtime = 0; // Track playtime in seconds
let playtimeInterval = null; // Reference to the interval

// Function to start the playtime counter
function startPlaytimeCounter() {
    if (playtimeInterval) return; // Prevent multiple intervals
    playtimeInterval = setInterval(() => {
        playtime++;
        console.log(`Playtime: ${playtime} seconds`);
    }, 1000); // Update every second
}

// Function to stop the playtime counter
function stopPlaytimeCounter() {
    if (!playtimeInterval) return; // If there's no interval, do nothing
    clearInterval(playtimeInterval);
    console.log(`User left the game. Total time spent: ${playtime} seconds`);
    playtime = 0; // Reset playtime
}

// Function to check if the player is in a specific game
function checkGameStatus() {
    const gameLink = document.querySelector('.avatar-status a'); // Get the avatar status link

    if (gameLink && gameLink.href.includes("PageType=Profile") && gameLink.href.includes("PlaceId=8737602449")) {
        // Replace '8737602449' with the actual game ID you want to track
        startPlaytimeCounter();
    } else {
        stopPlaytimeCounter();
    }
}

// Observe changes in the DOM to check for changes in game status
const observer = new MutationObserver(checkGameStatus);
observer.observe(document.body, { childList: true, subtree: true });

// Initial check when the script loads
checkGameStatus();

// Stop tracking when navigating away from the game page
window.addEventListener("beforeunload", stopPlaytimeCounter);



