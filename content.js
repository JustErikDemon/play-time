// Function to log PresenceData from Local Storage
function logPresenceData() {
    const presenceData = localStorage.getItem('PresenceData');
    if (presenceData) {
        const presenceObject = JSON.parse(presenceData);
        const gameId = getGameIdFromUrl(); // Get the game ID from the URL

        // Print the entire PresenceData for debugging
        console.log('Checking... PresenceData:', presenceObject);

        // Check if the gameId exists in the PresenceData
        if (presenceObject && presenceObject[gameId]) {
            console.log(`Game ID ${gameId} is found in PresenceData. Starting playtime tracking...`);
            startTrackingPlaytime(gameId);
        } else {
            console.log(`Game ID ${gameId} is NOT found in PresenceData.`);
        }
    } else {
        console.log('No PresenceData found in Local Storage.');
    }
}

// Get the Game ID from the current URL
function getGameIdFromUrl() {
    const urlParts = window.location.href.split('/');
    return urlParts[4]; // The ID is assumed to be the 4th segment of the URL
}

// Start tracking playtime for the given gameId
let timer;
let playtime = 0;
let isPlaying = false;

function startTrackingPlaytime(gameId) {
    if (!isPlaying) {
        isPlaying = true;
        console.log(`Found Game ID ${gameId} in PresenceData. Starting playtime tracking...`);
        
        // Log playtime every second
        timer = setInterval(() => {
            playtime++;
            console.log(`Playtime: ${playtime} seconds`);
        }, 1000);

        // Check for presence data updates
        checkPresenceData(gameId);
    }
}

// Check for changes in PresenceData
function checkPresenceData(gameId) {
    const interval = setInterval(() => {
        const presenceData = localStorage.getItem('PresenceData');
        const presenceObject = presenceData ? JSON.parse(presenceData) : null;

        // Print the entire PresenceData for debugging
        console.log('Checking... PresenceData:', presenceObject);

        // Check if the gameId exists in the PresenceData
        if (!presenceObject || !presenceObject[gameId]) {
            // Stop tracking if the gameId is no longer in PresenceData
            clearInterval(interval);
            console.log(`Playtime tracking stopped. Total playtime: ${playtime} seconds.`);
            isPlaying = false;
            clearInterval(timer); // Stop the timer
        } else {
            console.log(`Game ID ${gameId} is still present in PresenceData. Continuing playtime tracking...`);
        }
    }, 1000);
}

// Check if the current URL matches the Roblox game URL format
const gameUrlPattern = /https:\/\/www\.roblox\.com\/games\/(\d+)/;

if (gameUrlPattern.test(window.location.href)) {
    console.log(`You are on a Roblox game page: ${window.location.href}`);
    // Start checking PresenceData every second while on the page
    setInterval(logPresenceData, 1000);
} else {
    console.log(`You are not on a Roblox game page. Current URL: ${window.location.href}`);
}



