document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.cookies.getAll({ url: tabs[0].url }, function (cookies) {
            var cookieBody = document.getElementById('cookieBody');
            if (!cookieBody) {
                console.error("Cookie body element not found.");
                return;
            }
            if (!Array.isArray(cookies)) {
                console.error("No cookies found.");
                return;
            }
            if (cookies.length === 0) {
                console.log("No cookies found for the current page.");
                return;
            }
            cookies.forEach(function (cookie) {
                var row = document.createElement('tr');
                var nameCell = document.createElement('td');
                var valueCell = document.createElement('td');
                nameCell.textContent = cookie.name;
                valueCell.textContent = cookie.value;
                row.appendChild(nameCell);
                row.appendChild(valueCell);
                if (cookieBody) {
                    cookieBody.appendChild(row);
                }
            });
        });
    });
});
