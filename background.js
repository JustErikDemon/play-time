let currentGameId = null;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes("/games/")) {
        // When user enters a game page
        const urlParts = tab.url.split("/");
        currentGameId = urlParts[urlParts.length - 1]; // Get the Game ID from the URL
        console.log(`Entered game with ID: ${currentGameId}`);
    } else if (changeInfo.status === 'complete' && tab.url.includes("/users/")) {
        // When user enters a profile page
        currentGameId = null; // Reset game ID when navigating to a profile
        console.log("User is on a profile page.");
    }
});
