// Function to extract the Roblox user ID from the profile URL
function getUserIdFromProfile() {
    // Get all presence links
    const presenceLinks = document.querySelectorAll('a.avatar-status');

    presenceLinks.forEach(link => {
        const href = link.getAttribute('href'); // Get href of the avatar-status link
        if (href) {
            // Extract the user ID from the URL
            const match = href.match(/users\/(\d+)\//);
            if (match && match[1]) {
                const userId = match[1];
                console.log(`User ID: ${userId}`); // Print the user ID to the console
            }
        }
    });
}

// Function to check if the user is on a game page
function checkIfOnGamePage() {
    const gameTitle = document.title; // Get the title of the current page
    // Check if the title contains " - Roblox"
    if (gameTitle.includes(" - Roblox")) {
        getUserIdFromProfile(); // Call the function to get the user ID
    }
}

// Set an interval to check if the user is on a game page every second
setInterval(checkIfOnGamePage, 1000);




