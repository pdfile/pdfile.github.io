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
            // If the user accepted, we don't need the prompt anymore
            if (choiceResult.outcome === 'accepted') {
                deferredPrompt = null;
            }
        });
    }
}
