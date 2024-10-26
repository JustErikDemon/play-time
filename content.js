// Set an interval to check for playtime updates every second
let previousPlaytime = "";

function checkPlaytime() {
    // Select the playtime element by its ID
    const playtimeElement = document.getElementById("playTimeText");

    // If the playtime element is found, read its title attribute
    if (playtimeElement) {
        const currentPlaytime = playtimeElement.title; // Gets the "34 minutes" text

        // Log the playtime if it has changed since the last check
        if (currentPlaytime !== previousPlaytime) {
            console.log(`Playtime: ${currentPlaytime}`);
            previousPlaytime = currentPlaytime;
        }
    } else {
        console.log("Playtime element not found.");
    }
}

// Run the checkPlaytime function every second
setInterval(checkPlaytime, 1000);

