document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.cookies.getAll({ url: tabs[0].url }, function (cookies) {
            var cookieBody = document.getElementById('cookieBody');
            cookies.forEach(function (cookie) {
                var row = document.createElement('tr');
                var nameCell = document.createElement('td');
                var valueCell = document.createElement('td');
                nameCell.textContent = cookie.name;
                valueCell.textContent = cookie.value;
                row.appendChild(nameCell);
                row.appendChild(valueCell);
                cookieBody.appendChild(row);
            });
        });
    });
});
