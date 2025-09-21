let isDarkMode = true; // default dark mode

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12;

    // Pad numbers
    hours = hours < 10 ? '0' + hours : hours;   
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Use simple concatenation instead of $
    document.getElementById('clock').innerText = hours + ":" + minutes + ":" + seconds + " " + ampm;

    // Display date
    const day = now.getDate();
    const month = now.getMonth() + 1; // 0-11
    const year = now.getFullYear();
    document.getElementById('date').innerText = (day < 10 ? '0' + day : day) + "-" + 
                                               (month < 10 ? '0' + month : month) + "-" + 
                                               year;

    // Display day of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('day').innerText = days[now.getDay()];
}

// Dark/Light toggle
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    isDarkMode = !isDarkMode;
    document.getElementById('toggleTheme').innerText = isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
});

// Update every second
setInterval(updateClock, 1000);
updateClock();
