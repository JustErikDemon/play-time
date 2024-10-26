// Start tracking when the page is active
let playtime = 0;
let playtimeInterval = null;

function startPlaytimeCounter() {
    playtimeInterval = setInterval(() => {
        playtime++;
        console.log(`Playtime: ${playtime} seconds`);
    }, 1000); // Updates every second
}

function stopPlaytimeCounter() {
    clearInterval(playtimeInterval);
    playtime = 0; // Reset playtime when leaving the game
}

// Start the timer when the content script loads
startPlaytimeCounter();

// Stop the timer if the user navigates away
window.addEventListener("beforeunload", stopPlaytimeCounter);
