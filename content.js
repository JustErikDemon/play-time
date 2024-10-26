let playtime = 0; // Track playtime in seconds
let playtimeInterval = null; // Interval reference
const GAME_ID = '8737602449'; // Replace with the actual game ID to track
const CHECK_INTERVAL = 1000; // Check every second

// Function to check if the player is in the specified game
function checkPlayerGame() {
    const presenceLinks = document.querySelectorAll('a.avatar-status'); // Get presence links

    presenceLinks.forEach(link => {
        const href = link.getAttribute('href'); // Get href of the avatar-status link
        // Check if the user is in the specified game
        if (href && href.includes(`PlaceId=${GAME_ID}`)) {
            return true; // Player is in the game
        }
    });

    return false; // Player is not in the game
}

// Function to start tracking playtime
function startPlaytimeCounter() {
    playtimeInterval = setInterval(() => {
        if (checkPlayerGame()) {
            playtime++;
            console.log(`Playtime: ${playtime} seconds`);
        } else {
            // User left the game
            console.log(`User left with ${playtime} seconds spent`);
            stopPlaytimeCounter();
        }
    }, CHECK_INTERVAL);
}

// Function to stop tracking playtime
function stopPlaytimeCounter() {
    clearInterval(playtimeInterval);
    playtime = 0; // Reset playtime when leaving the game
}

// Start the timer when the content script loads
startPlaytimeCounter();




