// This variable will save the event for later use.
let deferredPrompt;

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the browser from showing the default install prompt
    e.preventDefault();
    // Save the event so we can trigger it later
    deferredPrompt = e;
    // Optionally, show your own install button
    //showInstallButton();
    showInstallPromptOnInteraction();
});

// Show the install prompt when the user clicks the install button
function showInstallButton() {
    // Get the button element
    const installButton = document.getElementById('installButton');
    // Make it visible
    installButton.style.display = 'block';
    // Add a click listener
    installButton.addEventListener('click', () => {
        // Hide the button
        installButton.style.display = 'none';
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond
        deferredPrompt.userChoice.then((choiceResult) => {
            // If the user accepted, we don't need the prompt anymore
            if (choiceResult.outcome === 'accepted') {
                deferredPrompt = null;
            }
        });
    });
}

// Show the install prompt when the user interacts with the website
// For example, after scrolling a certain amount, or after a certain time
function showInstallPromptOnInteraction() {
    // Check if the deferredPrompt is available
    if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond
        deferredPrompt.userChoice.then((choiceResult) => {
            // Act on user choice
            // If the user accepted, we don't need the prompt anymore
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt.');
                deferredPrompt = null;
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    }
}

// A function to save data on the user side
function saveData(key, value) {
    // Check if localStorage is supported
    if (typeof (Storage) !== "undefined") {
        // Save the data using the key and value parameters
        localStorage.setItem(key, value);
        // Display a success message
        //alert("Data saved successfully!");
    } else {
        // Display an error message
        alert("Sorry, your browser does not support localStorage.");
    }
}

// Get the current timestamp in milliseconds
var timestamp = new Date().getTime();
saveData ("file", "file:///folder/file.pdf");
saveData ("time", timestamp);

// Get the user's name
var fileName = localStorage.getItem ("file");
console.log('FILE: ' + fileName);
// Get the user's favorite color
var time = localStorage.getItem ("time");
console.log('TIME: ' + time);

// Delete the fileName
//localStorage.removeItem ("name");
// Delete all the data
//localStorage.clear ();

