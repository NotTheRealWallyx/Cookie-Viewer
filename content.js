// content.js

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "get_cookies") {
        // Send a message to the background script to get cookies
        chrome.runtime.sendMessage({ message: "get_cookies", url: window.location.href }, function (response) {
            // Send the response back to the popup
            sendResponse(response);
        });
    }
});
