// Function to log PresenceData from Local Storage
function logPresenceData() {
    const presenceData = localStorage.getItem('PresenceData');
    if (presenceData) {
        console.log(`PresenceData: ${presenceData}`);
    } else {
        console.log('No PresenceData found in Local Storage.');
    }
}

// Check if the current URL matches the Roblox home URL
const targetUrl = 'https://www.roblox.com/home';

if (window.location.href === targetUrl) {
    console.log(`You are on the Roblox home page: ${targetUrl}`);
    // Log PresenceData every second while on the page
    setInterval(logPresenceData, 1000); // Log PresenceData every second
} else {
    console.log(`You are not on the Roblox home page. Current URL: ${window.location.href}`);
}




