chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && changeInfo.url.includes("/games/")) {
        chrome.storage.local.set({ currentGameStart: Date.now() });
    } else if (changeInfo.url && !changeInfo.url.includes("/games/")) {
        stopTrackingPlaytime();
    }
});

function stopTrackingPlaytime() {
    chrome.storage.local.get(["currentGameStart"], (data) => {
        if (data.currentGameStart) {
            const playtime = Math.floor((Date.now() - data.currentGameStart) / 1000); // In seconds
            console.log(`Total playtime: ${playtime} seconds`);
            chrome.storage.local.remove("currentGameStart");
        }
    });
}
