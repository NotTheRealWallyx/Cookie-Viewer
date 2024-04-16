// background.js

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "get_cookies") {
            chrome.cookies.getAll({ url: request.url }, function (cookies) {
                // Do something with the retrieved cookies
                sendResponse(cookies);
            });
        }
    }
);
