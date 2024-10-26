// Function to check and log playtime if available on the page
function checkAndLogPlaytime() {
    const playtimeElement = document.querySelector("#playTimeText");

    if (playtimeElement) {
        const playtime = playtimeElement.getAttribute("title");
        console.log(`Current playtime: ${playtime}`);
    } else {
        console.log("Playtime information not available on this page.");
    }
}

// Set an interval to check for playtime every second
setInterval(checkAndLogPlaytime, 1000);


