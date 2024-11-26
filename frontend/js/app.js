// Fetch data from backend
fetch('http://localhost:3000/')
    .then(response => response.text())
    .then(data => {
        console.log(data); // "Welcome to your dynamic website backend!"
        document.getElementById('message').innerText = data;
    });
    document.addEventListener("DOMContentLoaded", function() {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => {
                document.getElementById('message').innerText = data.message;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                document.getElementById('message').innerText = "Error loading data";
            });
    });
    