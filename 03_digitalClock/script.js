const clock = document.getElementById("clock");


// to continuously change the time -> cron job is very advanced method used in backend we will not implement it here
function updateClock() {
    let localdate = new Date();
    clock.innerText = localdate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

updateClock(); // Run once immediately
setInterval(updateClock, 1000); // Then every second